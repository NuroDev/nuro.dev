---
banner_alt: A random screenshot of screen showing a Webpack config
banner: https://images.unsplash.com/photo-1593720213411-697ba0ac0162?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1712&q=80
title_prefix: Upgrade
title: next.config.js
description: The Next.js config file feels underutilized. Here's how it could be better
date: '2021-11-14'
---

For the past few years I have been an avid lover of [Vue.js](https://vuejs.org/) and in the past year or so been using it in combination with [Vite](https://vitejs.dev/), an all new build tool that is just out of this world fast :zap:.
However, spending more time working in the industry I have learned to fall back in love with [React](https://reactjs.org/) and more specifically [Next.js](https://nextjs.org/).

However, since switching back to using Next.js I have noticed a number of things that I have loved (SSR, SSG, ISR, etc) and others that have made me want to go back to Vue + Vite.

As the title implies, this post is going to focus specifically on the [next.config.js](https://nextjs.org/docs/advanced-features/customizing-config) file.

### :zap: Vite

---

As I said I am coming from using [Vite](https://vitejs.dev/) where the config file is insanely powerful & lets you do a lot with a little.
For a complete reference I recommend having a scroll through the [Vite config docs](https://vite.dev/config) to see how much you can do with it.

To save you some time, here is just a few of the golden features of it that I feel should be added to Next.js to make the config file actually good.

### :exclamation: TypeScript

---

Starting off with one of, to me at least, the most obvious & best features. TypeScript support.

I hate having to use the CommonJS structure for Node.js files, especially when they also offer a TypeScript type for the object.

This is, to me, is ugly:

```js:next.config.js
/** @type {import('next').NextConfig} */
module.exports = {
	// ...
}
```

This is much better:

```ts:next.config.ts
import type { NextConfig } from "next"

export default {
	// ...
} as NextConfig;
```

I know type safety isn't needed for a config file. But when writing it it can be very helpful to have tools, such as intellisense, to help you write it faster without having to look up the docs or inspect the `NextConfig` type.

`next.config.ts` has been talked about for 3 years now & has still not been added. [#5318](https://github.com/vercel/next.js/issues/5318) has been tracking this request since first posted in 2018 and still to this day has people asking for it.

I can very much understand if there are more pressing features, bugs, etc that need to be addressed. But [Next.js 12 has just been released](https://nextjs.org/blog/next-12), the Next.js core has been running on TypeScript since 2019 & Vercel has constantly preached how amazing TypeScript is to the point it works out of the box pretty much. And yet, the Next.js config still only allows a CommonJS `.config.js` file.

### :electric_plug: Plugins

---

One of the best features of Vite that I sorely miss is [plugins](https://vitejs.dev/plugins/).

Plugins in Vite are insanely powerful and allow you to do any number of things from modifying your build pipeline to add or remove content/files, to add a framework/library of choice.
Some popular ones I often used were the following:

-   [`vite-plugin-windicss`](https://windicss.org/integrations/vite.html): Quickly add WindiCSS (TailwindCSS + some cool extras).
-   [`vite-plugin-icons`](https://www.npmjs.com/package/vite-plugin-icons): Access thousands of icons via [Iconify](https://iconify.design/).
-   [`vite-plugin-pwa`](https://www.npmjs.com/package/vite-plugin-pwa): Generate all assets needed to make your app PWA ready.
-   [`vite-plugin-markdown`](https://www.npmjs.com/package/vite-plugin-markdown): Import markdown files content, frontmatter, etc. Great for building a blog.

### :rocket: Simplicity

---

One argunment I could see for NOT to make all these big breaking changes to the config system would be "But Next.js is so simple to use. This will just add complexity".
Fair point. But who said new or inexperienced developers would have to use this new system. If they wanted they could stick to using the existing CommonJS `next.config.js` system & then anyone who wants to use the more advanced system, with plugins & TypeScript support, etc can use it. It's the same reason why Vite offers support for both.

## :cloud: The "dream" config

---

With all of that put together, what would some sort of "dream" Next.js config look like?

Well, something a little like this:

```ts:next.config.ts
import Components from 'next-plugin-components';
import TailwindCSS from 'next-plugin-windicss';

import type { NextConfig } from "next"

export default {
	// Based on: https://vitejs.dev/config/#build-target
	build: {
		swc: {
			minify: true,
		}
		webpack: (config, { dev, isServer }) => {
			// ...
		}
	},
	experimental: {
		// ...
	},
	images: {
		// ...
	},
	plugins: [
		Components(),
		TailwindCSS({
			// ...
		}),
	],

	// Some use a `./src/` directory
	root: ".",

	// Based on: https://vitejs.dev/config/#server-host
	server: {
		headers: [
			// ...
		]
	},
} as NextConfig;
```
