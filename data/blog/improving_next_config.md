---
banner_alt: A random screenshot of screen showing a Webpack config
banner: https://images.unsplash.com/photo-1593720213411-697ba0ac0162?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1712&q=80
title_prefix: Upgrade
title: Improving the Next.js config
description: The Next.js config file feels underutilized. Here's how it could be better
date: '2021-12-03'
---

For the past few years I have been an avid lover of [Vue.js](https://vuejs.org/) and in the past year or so been using it in combination with [Vite](https://vitejs.dev/), an all new build tool that is just out of this world fast :zap:.
However, spending more time working in the industry I have learned to fall back in love with [React](https://reactjs.org/) and more specifically [Next.js](https://nextjs.org/).

However, since switching back to using Next.js after so many years, I have noticed a number of things that have made me want to go back to using Vue + Vite.

As the title implies, this post is going to focus specifically on how to improve the [Next.js config](https://nextjs.org/docs/api-reference/next.config.js/introduction) by focusing on a handful of the top/best config options used in other build tools like [Vite](https://vitejs.dev/).

### :wrench: More Options

---

In general I feel like there should be more options added to the config file. Looking at the [shared options in Vite](https://vitejs.dev/config/#root), here are just a few that would make a lot of sense to add:

-   [`build`](https://vitejs.dev/config/#build-target): Customize the build output

    Offer more customization for the build configuration of your project. In the case of Next.js I feel a lot of existing build options could be moved here. EG: `swcMinify`, `webpack`, etc.

-   [`define`](https://vitejs.dev/config/#define): Define global constant replacements

    As a good alternative to having to add `NEXT_PUBLIC_` environment variables all the time you can use this to define public constant variables.

-   [`logLevel`](https://vitejs.dev/config/#logLevel): Adjust console output verbosity

-   [`plugins`](https://vitejs.dev/config/#plugins): Array of plugins to use

    Plugins are a big feature that I'm going to [dive into more later](#-plugins).

-   [`root`](https://vitejs.dev/config/#root): Project root directory

    Re-learning Next.js over the past few months I have been researching a number of open source projects, many of which like to point to a custom root directory. Most commonly a `src/` directory.

-   [`server`](https://vitejs.dev/config/#server-host): Server options

    Customize the server configuration with options like `cors`, `port`, etc.

The majority of these options simply add project structure flexability & extensibility for more advanced users.

### :exclamation: TypeScript

---

Moving onto what is, to me at least, one of the most obvious features. TypeScript support.

I personally don't like using the [CommonJS syntax](https://flaviocopes.com/commonjs/) where possible. To the point that for most projects now when I want to write a simple Node script I quickly add [`tsup`](https://tsup.egoist.sh/) so I can use TypeScript & a number of other handy features.
One scenario I particularly hate is when a library offers a object type definition & but you have to use the JSDoc `@type {import('...').TypeName}` syntax to use it.

For comparison: This, to me, is ugly:

```js:next.config.js
/**
 * @type {import('next').NextConfig}
 */
module.exports = {
	// ...
}
```

This however, looks much cleaner:

```ts:next.config.ts
import type { NextConfig } from "next"

export default {
	// ...
} as NextConfig;
```

No, type safety isn't needed for a config file. But when writing it it can be very helpful to have tools, such as intellisense, to help prompt any issues with your setup or help save you from having to even look up the conig documentation.

`next.config.ts` has been talked about for 3 years now & has still not been added. [This issue](https://github.com/vercel/next.js/issues/5318) has been tracking this request since first posted in 2018 and still to this day has people asking for it.

I can very much understand if there are more pressing features, bugs, etc that need to be addressed. But [Next.js 12 has just been released](https://nextjs.org/blog/next-12), the Next.js core has been running on TypeScript since 2019 & Vercel has constantly preached how amazing TypeScript is to the point it works out of the box pretty much.
And yet, the Next.js config still only allows a CommonJS JavaScript file.

### :electric_plug: Plugins

---

One of the second features that I think would have the biggest & best impact on Next.js would be an all new plugins system.

Currently Next.js does provide a plugin system of sorts but is, as far as I can tell, community made & managed by nesting functions that return an updated Next.js configuration object. Not so pretty.

In an indeal world an all new plugins system could make it even easier to bootstap & customize a Next.js project with your favourite tools in a matter of minutes, not hours like it does today.

Imagine if you could add [TailwindCSS](https://tailwindcss.com/) to your Next.js project by just doing this:

```bash:Terminal
npm install --save-dev next-plugin-tailwindcss

# Or with Yarn

yarn add -D next-plugin-tailwindcss
```

```js:next.config.js
/**
 * @type {import('next').NextConfig}
 */
module.exports = {
	plugins: [
		require("next-plugin-tailwindcss")(),
	]
}
```

That's basically how Vite's plugin system works & how nice & easy it is to work with. It has a [`plugins`](https://vitejs.dev/config/#plugins) property that allows you to simply provide an array of plugin methods that you call with your desired options.

This system has become so popular that there are a huge number of plugins to let you to almost anything and everything you could need. Here is a few examples of my favourites:

-   [`vite-plugin-icons`](https://www.npmjs.com/package/vite-plugin-icons): Access thousands of icons via [Iconify](https://iconify.design/).
-   [`vite-plugin-markdown`](https://www.npmjs.com/package/vite-plugin-markdown): Import markdown files content, frontmatter, etc.
-   [`vite-plugin-pwa`](https://www.npmjs.com/package/vite-plugin-pwa): Generate all assets needed to make your app PWA ready.
-   [`vite-plugin-windicss`](https://windicss.org/integrations/vite.html): Quickly add WindiCSS (TailwindCSS + some cool extras).

### :sunglasses: Merged

---

With all of those features all put together you end up with something that looks a little like this:

```ts:next.config.ts
import TailwindCSS from 'next-plugin-windicss';

import type { NextConfig } from "next";

export default {
	build: {
		swc: {
			minify: true,
		},
		webpack: (config, { dev, isServer }) => {
			// ...
		},
	},
	experimental: {
		// ...
	},
	images: {
		// ...
	},
	plugins: [
		TailwindCSS(),
	],
	root: "./src/",
	server: {
		headers: [
			// ...
		],
		port: 4000,
	},
} as NextConfig;
```

### :innocent: Simplicity

---

One argunment I could see for NOT to make all these big, possibly breaking, changes to the config system would be "But Next.js is so simple to use. This will just add complexity".

Fair point. But if done correctly it could be backwards compatible with the current config system & then allows more experienced developers who do want to utilize some of the new features, such as plugins, TypeScript support, etc, can do so.

### :thinking_face: Conclusion

---

Of course all of this is just my opinion on how to improve the Next.js config system & how I think it should look, but others may have differing opinions / preferences, which I am very open to discussing.

For now though I feel like this needs to be something that should be discussed more in the community & looked into further as it could very much make Next.js even more powerful than it already is.
