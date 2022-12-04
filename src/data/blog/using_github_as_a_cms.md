---
banner_alt: A photo of a forest overlooking the bright white sky in the background
banner: https://images.unsplash.com/photo-1618401471353-b98afee0b2eb
title_prefix: Guide
title: Using GitHub as a CMS
description: Learn how to use GitHub as a CMS using server-side rendering from Next.js
date: '2022-01-19'
---

Since re-launching my website with an all new redesign I added a number of cool features. One such feature I thought worth sharing about was my [projects page](/portfolio) as it actually uses [GitHub](https://github.com) as a CMS (Content Management System).

So, let's go through and breakdown why I added this feature, why not use some other service & of course how it works.

## :question: Why

---

When re-designing my website I set out with a number of goals. One such goal was to retain a similar portfolio page to my existing website at the time which fetched all my GitHub repositories & just listed them all.

However, I wanted to improve on this page by adding some sort of curation to it. Preferably via some method that is quick, easy to use, can be accessed from almost anywhere & preferably free.

## :cloud: Headless CMS

---

I knew I needed some kind of headless CMS in some form to let me curate the content I wanted displayed, so I did some thinking & some research.

I found most people were happy to recommend other headless CMS services like [Strapi](https://strapi.io/), [Sanity](https://www.sanity.io/), [GraphCMS](https://graphcms.com/), etc which did seem to do the job I wanted of providing a platform for me to curate & manage my content without having to redeploy. But most of them had the same issues that I didn't like.

#### Resilience

Is it overkill to try & have your personal portfolio website to have a 99.999% uptime? Probably.

Does it matter if my website goes down? No. But I like to try & treat as any other production environment & where possible not add another possible point of failure. In this case being a 3rd party service to serve the data for my portfolio page.

If the 3rd party service goes down will my content somehow still be magically served by some cache somewhere until the service comes back online? Or is there just going to be no content served at all?

"But you're fetching from GitHub, right? So you're still reliant on data from them" Fair point, yes I am. However, I am both more likely to trust GitHub's uptime & platform resilience than a CMS service, and it's easier to add in a fail safe so if GitHub does go down we can still serve content without them (More on this later).

#### Price

Some may call me cheap for this but another goal for my personal website is to be as cheap as possible. As of writing my website costs me $20/year to run. That's it.

How? Simple. $20/year for a domain, code hosted GitHub & deployed to [Vercel](https://vercel.com/home?utm_source=nuro&utm_campaign=oss). It's that cheap & I want to keep it that way.

So, the idea of paying for another service, however nice a lot of them look, is just not for me. So I wanted to find an alternative that would serve the same function I need it to but for zero additional cost.

## :hammer: How

---

If you'd rather just look at the final code to see how it works, go check the [`projects.ts`](https://github.com/nurodev/nuro.dev/blob/667b055043b94d894172085fee794c3849a3f25f/lib/projects.ts) file in my websites GitHub repository.

The short version of how it works is this: Using [topics on GitHub](https://github.com/topics) you can filter what content you do & don't want to show. In my case I have given all my chosen repositories a `portfolio` topic & that will make the repository show up on my portfolio page.

To get this working there are 2 key things we're going to need: [Next.js](https://nextjs.org/) & the [GitHub api](https://docs.github.com). Optionally you can also use some kind of cache, like [Upstash](https://upstash.com/), to cache your data & save on requests to the GitHub api.

### Fetching repositories

Starting off we will set up a base `getServerSideProps` function that will allow us to fetch the repository data on the server & pass the data to the client.

```jsx:portfolio.jsx
export async function getServerSideProps () {
	const response = await fetch('https://api.github.com/users/GITHUB_USERNAME/repos');

	const json = await response.json();

	return {
		props: {},
	};
};
```

### Repository filtering

Here is where we can add our own custom logic to curate the data based on the data returned from GitHub. In this example we'll be filtering out all the repositories that both don't have the `portfolio` topic & are not archived.

```jsx:portfolio.jsx
export async function getServerSideProps () {
	// ...

	const repositories = json.map((repo) => {
		if (!repo.topics.includes('portfolio')) return null;

		if (repo.archived) return null;

		return repo;
	})
	.filter((project) => project !== null);

	return {
		props: {
			repositories,
		}
	}
};
```

#### GitHub Authentication

Next up is an optional step that I highly recommend to reduce the chance of hitting the GitHub api rate limit.

To complete this step you will first need to create a GitHub personal access token. You can follow the [official guide here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

With your newly generated access token, add it to your `.env` file.

```:.env
GITHUB_PAT=abc123
```

With it added you can update your fetch request to add the token to your request headers.

```jsx:portfolio.jsx
export async function getServerSideProps () {
	const response = await fetch('https://api.github.com/users/GITHUB_USERNAME/repos', {
		headers: {
			authorization: `token ${process.env.GITHUB_PAT}`,
		},
	});

	// ...
};
```

#### Caching

This last step is also optional but can help with platform resilience & response times. In short we'll use some form of super fast caching database, like Redis, to store the request data after the first request & from then on after serve the cached data instead of having to make multiple requests.

For my website I ended up using [Upstash](https://upstash.com) which offers a single single Redis database for free. I recommend following their guide to [get started setting up your first Redis database](https://docs.upstash.com/redis).

With your database set up you should now have a `REDIS_URL` to add your `.env` file. It should look something like this `redis://USERNAME:PASSWORD@HOST:PORT`. Don't worry if there isn't a username.

```:.env
GITHUB_PAT=abc123
REDIS_URL=redis://USERNAME:PASSWORD@HOST:PORT
```

Now that we have a database to access we need a client to access it with. There's a number of Redis client's, including Upstash's [own client](https://www.npmjs.com/package/@upstash/redis), but I personally prefer `ioredis` so that's what I will be using for this example but any others should work fine. Install it as a development dependency.

```zsh:Terminal
npm install --save-dev ioredis
```

Or using Yarn

```zsh:Terminal
yarn add -D ioredis
```

With it now installed we can create a new client instance to connect to our database.

```jsx:portfolio.jsx
export async function getServerSideProps () {
	const redis = new Redis(process.env.REDIS_URL);

	// ...
};
```

Finally we can add the actual logic to check whether the cache already has the data we need & if not we can fetch the data fresh from GitHub & store it in the cache before we finally return it.

```jsx:portfolio.jsx
export async function getServerSideProps () {
	// ...

	const cache = await redis.get('repositories');
	if (cache !== null)
		return {
			props: {
				repositories: cache,
			}
		}

	const repositories = ...

	redis.set('repositories', JSON.stringify(repositories));

	return {
		props: {
			repositories,
		}
	}
};
```

## :white_check_mark: Conclusion

---

And that's it, with all of that we have a very simple but resilient system that allows us to use GitHub to manage what content is displayed on our site, but also is not entirely reliant on GitHub so if there is any downtime for whatever reason on GitHub's end we still have the data cached.

```jsx:portfolio.jsx
export async function getServerSideProps () {
	const redis = new Redis(process.env.REDIS_URL);

	const cache = await redis.get('repositories');
	if (cache !== null)
		return {
			props: {
				repositories: cache,
			}
		}

	const response = await fetch('https://api.github.com/users/GITHUB_USERNAME/repos', {
		headers: {
			authorization: `token ${process.env.GITHUB_PAT}`,
		},
	});

	const json = await response.json();

	const repositories = json.map((repo) => {
		if (!repo.topics.includes('portfolio')) return null;

		if (repo.archived) return null;

		return repo;
	})
	.filter((project) => project !== null);

	redis.set('repositories', JSON.stringify(repositories));

	return {
		props: {
			repositories,
		}
	}
};

export default function Page({ repositories }) {
	return (
		<pre>
			{JSON.stringify(repositories, null, 4)}
		</pre>
	);
}
```
