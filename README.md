
# Blog template, powered by Blogger, Astro, Tailwind, and hosted on Cloudflare Pages

## Why use this template?

This template offers a starting point to build a blog (or other resource) that is using a mixture of dynamic and static pages but hosted on Cloudflare pages.

The template uses the [Astro Framework](https://astro.build) as its core, with CSS being handled by [Tailwindcss](https://tailwindcss.com). This template uses [Blogger](https:/blogger.com) as the source of blog content, by using API calls to the Blogger API to receive the pages, but it could easily be converted to use any other blog that provides an API e.g. [Ghost](https://ghost.org). It is built to use [Cloudflare Pages](https://pages.cloudflare.com/) as the websites hosting platform, which is a free* hosting platform for static sites, but can handle dynamic sites via a worker script which this template creates.

## How to use the template

Edit components with your own data (e.g. change logo, favicon, social image) and the pages files (e.g. this page is index.astro).

Edit the file, `.env.development` to have the correct BLOGID (the blogs ID on the Blogger dashboard) and [API key](https://developers.google.com/blogger/docs/3.0/using#APIKey) for the blog on Blogger. Create a `.env.production` file with the correct information for your production blog; note the production file is set to be ignored by git, remove this from `.git.ignore` if that isn't suitable. Alternativily if you are going to use a different blog backend edit the API calls on the blog/index.astro, blog/[slug].astro and label/[slug].astro pages.

This is built using npm or [pnpm](https://pnpm.io/installation). It is advised to be run via pnpm, if you do not have that installed then follow the instructions (simplest method is just to enable corepack in node).

Run the command `pnpm install`, this will fetch and install in the .pnpm directory the required packages.

Setup [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/).

### How to run development testing

There are 2 ways to do this:

*   `pnpm run dev` this will create a live dev server which will monitor for changes.
*   `pnpm run build` then `npm run preview` this will build the project into the dist folder and then create a local server that runs as a local cloudflare server app.

Use the first method for normal testing while you are creating your site, the second to test to see if it works correctly on build.

### How to deploy

`pnpm run publish` command will run wrangler to publish the contents of the dist folder on the cloudflare network. It will give you an address for the deployed pages site, full information for the deployment is available on the cloudflare dashboard.