# Personal website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Styling

@docusaurus/preset-classic uses [Infima](https://infima.dev/) as the underlying styling framework.

Default [HTML symbols](https://www.w3schools.com/charsets/ref_utf_arrows.asp).

[Convert images to WebP](https://web.dev/serve-images-webp/) with

```
cwebp -q 50 images/flower.jpg -o images/flower.webp
```

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch - see `deploy.yml` GitHub Action workflow. This action is used for automatic deployments.
