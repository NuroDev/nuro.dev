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

However, since switching back to using Next.js after so many years, I have noticed a number of things that have made me want to go back to using Vue + Vite.

As the title implies, this post is going to focus specifically on the [next.config.js](https://nextjs.org/docs/api-reference/next.config.js/introduction) file.

If you want to see the full power of Vite I recommend having a scroll through the [Vite config docs](https://vitejs.dev/config), however in the meantime I wanted to focus on a handful of the top/best config options that I feel should be added to Next.js to make the config file actually good & more usable other than for advanced users.

### :wrench: Options Galore

---

In general I feel like there should be more options added to the config file. Looking at the [shared options in Vite](https://vitejs.dev/config/#root), here are just a few that would make a lot of sense to add:

-   [`build`](https://vitejs.dev/config/#build-target): Customize the build output

    Offer more customization for the build configuration of your project. In the case of Next.js I feel a lot of existing build options could be moved here. EG: `swcMinify`, `webpack`, etc.

-   [`define`](https://vitejs.dev/config/#define): Adjust console output verbosity

    As a good alternative to having to add `NEXT_PUBLIC_` environment variables all the time you can use this to define public constant variables.

-   [`logLevel`](https://vitejs.dev/config/#logLevel): Define global constant replacements

    I have not looked into this too deeply but some quick research doesn't show any "easy" way to customize the log level of a Next.js project. As someone planning on using Next.js for self-hosted projects sometime in the future this would prove very helpful to have.

-   [`plugins`](https://vitejs.dev/config/#plugins): Array of plugins to use

    Plugins are a huge feature that I [dive into more below](#-plugins).

-   [`root`](https://vitejs.dev/config/#root): Project root directory

    Not for myself personally but re-learing Next.js over the past few months I have noticed a number of projects like to keep all their `components/`, `pages/`, etc inside of a `src/` directory and this will be beneficial for them.

-   [`server`](https://vitejs.dev/config/#server-host): Server options

    Customize the server configuration with options like `cors`, `port`, etc.

The majority of these options simply add project structure flexability & extensibility for more advanced users.

### :exclamation: TypeScript

---

Moving on to, to me at least, one of the most obvious & up there features. TypeScript support.

I personally don't like using the [CommonJS syntax](https://flaviocopes.com/commonjs/) where possible. To the point that for most projects now when I want to write a simple Node script I quickly add [`tsup`](https://tsup.egoist.sh/) so I can use TypeScript & a number of other handy features.
One scenario I particularly hate is when a library offers a object type definition & but you have to use the CommonJS `@type {import('...').TypeName}` syntax to use it.

For comparison, this, to me, is ugly:

```js:next.config.js
/**
 * @type {import('next').NextConfig}
 */
module.exports = {
	// ...
}
```

This is looks much cleaner:

```ts:next.config.ts
import type { NextConfig } from "next"

export default {
	// ...
} as NextConfig;
```

I know type safety isn't needed for a config file. But when writing it it can be very helpful to have tools, such as intellisense, to help you write it faster without having to look up the docs or inspect the `NextConfig` type.

`next.config.ts` has been [talked about for 3 years now](https://github.com/vercel/next.js/issues/5318) & has still not been added. [This issue](https://github.com/vercel/next.js/issues/5318) has been tracking this request since first posted in 2018 and still to this day has people asking for it.

I can very much understand if there are more pressing features, bugs, etc that need to be addressed. But [Next.js 12 has just been released](https://nextjs.org/blog/next-12), the Next.js core has been running on TypeScript since 2019 & Vercel has constantly preached how amazing TypeScript is to the point it works out of the box pretty much.
And yet, the Next.js config still only allows a CommonJS JavaScript file.

### :electric_plug: Plugins

---

One of the second features that I think would have the biggest & best impact on Next.js would be an all new plugins system.
Currently Next.js does KIND OF support plugins but not anything properly. As far as I can tell it currently involves nesting a lot of functions that each return an updated Next config object. Not so pretty.

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

That's basically how Vite's plugin system works & how nice & easy it is to work with. It has a [`plugins`](https://vitejs.dev/config/#plugins) option that allows you to simply provide an array of plugin methods that you call with your desired options.

This system has become so popular that there are a huge number of plugins to let you to almost anything and everything you could need. Here is a few examples of my favourites:

-   [`vite-plugin-icons`](https://www.npmjs.com/package/vite-plugin-icons): Access thousands of icons via [Iconify](https://iconify.design/).
-   [`vite-plugin-markdown`](https://www.npmjs.com/package/vite-plugin-markdown): Import markdown files content, frontmatter, etc.
-   [`vite-plugin-pwa`](https://www.npmjs.com/package/vite-plugin-pwa): Generate all assets needed to make your app PWA ready.
-   [`vite-plugin-windicss`](https://windicss.org/integrations/vite.html): Quickly add WindiCSS (TailwindCSS + some cool extras).

### :sunglasses: Merged

---

With all of those features all put together you end up with something that looks something like this:

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

Fair point. But who said new or inexperienced developers would have to use this new system. If they wanted they could stick to using the existing CommonJS `next.config.js` system & then anyone who wants to use the more advanced system, with plugins & TypeScript support, etc can use it. It's the same reason why Vite offers support for both.

### :thinking: Conclusion

---

Of course all of this is just my opinion on how to improve the Next.js config system & how I think it should look, but others may have differing opinions / preferences, which I am very open to discussing.

For now though I feel like this needs to be something that should be discussed more in the community & looked into further as it could very much make Next.js even more powerful than it already is.
