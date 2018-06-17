# VuePress-Starter

*This is a Starter template for a [VuePress](https://vuepress.vuejs.org) site and it integrates the NetlifyCMS with VuePress.*  

## Requirements  

**Node >= 8**, **Yarn** and **VuePress** should be installed before you start. We also need a free **Github** and **Netlify** account to follow this example.  

You can check that on your computer in your terminal: 

$ node --version  
$ yarn --version  
$ vuepress --version

If you see a version number then the software is installed otherwise you need to download and install it. 

[Node Installation](https://nodejs.org/en/download/)  
[Yarn Installation](https://yarnpkg.com/lang/en/docs/install/#windows-stable)  


#### Global Installation of VuePress  

yarn global add vuepress # OR npm install -g vuepress  


if you need to update..https://yarnpkg.com/en/docs/cli/upgrade  
yarn upgrade --latest


## Quickstart 

Use the one-click deploy button and get a copy of this base-template as a repositary in your own GitHub account and additionally
a live-server version on Netlify for free. Every change in the GitHub README.md file will automatically cause a change 
on this server.

[Server View](https://nifty-williams-038c26.netlify.com/)

## One-click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/iwilfried/vuepress-boilerplate)

Documentation of other free server deployments like GitHub, Firebase, Heroku you can find under 
[vuepress.vuejs.org/guide/deploy](https://vuepress.vuejs.org/guide/deploy.html)

## Local Development

To try it out locally, clone this repo and generate a static site

```bash
# Clone the repo
$ git clone https://github.com/iwilfried/vuepress-minimalistic.git
$ cd vuepress-minimalistic

# Install dependencies
$ yarn  # or npm install

# Run
$ yarn dev  # or npm run dev
```

Check your site at `http://127.0.0.1:8080/`

## Local Development

To try it out locally, clone this repo and generate a static site

```bash

$ npm install -g vuepress

git clone https://github.com/iwilfried/vuepress-minimalistic
cd vuepress-minimalistic
npm install

$ vuepress dev
or
$ vuepress build -> .vuepress/dist
```

For more information, see [VuePress Docs](https://vuepress.vuejs.org)

