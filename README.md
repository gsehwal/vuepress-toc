# VuePress

*This is a Starter template for a [VuePress](https://vuepress.vuejs.org) site and it integrates the NetlifyCMS with VuePress.*  

## Requirements  

::: warning
*It is currently recommended to use Yarn instead of npm when installing VuePress into an **existing project** that has webpack 3.x as a dependency. Npm fails to generate the correct dependency tree in this case.*
:::  

::: info
*It is currently recommended to use Yarn instead of npm when installing VuePress into an **existing project** that has webpack 3.x as a dependency. Npm fails to generate the correct dependency tree in this case.*
:::  
<br />
::: danger  
Node >= 8, Yarn and VuePress should be installed before you start.  
We also need a free **Github** and **Netlify** account to follow this example  
:::  



You can check, the software is already installed on your computer: 
Type in your terminal

```
$ node --version  
$ yarn --version  
$ vuepress --version
```
If you see a version number on your screen then the software is installed.  
Otherwise you need to download and install 

[Node Installation](https://nodejs.org/en/download/)  
[Yarn Installation](https://yarnpkg.com/lang/en/docs/install/#windows-stable)  
[VuePress Installation](https://www.npmjs.com/package/vuepress )  


## Updating Software
[Yarn Update](https://yarnpkg.com/en/docs/cli/upgrade)  
[VuePress 'Update](https://www.npmjs.com/package/vuepress)

```bash
nvm install 8.1.0 ( or any other version number)
yarn upgrade --latest
yarn global add vuepress # OR npm install -g vuepress
```

# Quickstart 

Use the one-click deploy button and get a copy of this base-template as a repositary in your own GitHub account and additionally
a live-server version on Netlify for free. Every change in the GitHub README.md file will automatically cause a change 
on this server.

### [Life Demo on Netlify](https://nifty-williams-038c26.netlify.com/)


## One-click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/iwilfried/vuepress-boilerplate)

Documentation of other free server deployments like GitHub Pages, Gitlab Pages, Gitlab CLI, Google Firebase, Surge, Heroku 
you can find under 
[vuepress.vuejs.org/guide/deploy](https://vuepress.vuejs.org/guide/deploy.html)

## Local Development

To try it out locally, clone this repo and generate a static site

```bash
# Clone the repo
$ git clone https://github.com/iwilfried/vuepress-boilerplate.git
$ cd vuepress-boilerplate

# Install dependencies
$ yarn  # OR npm install

# Run
$ yarn dev  # OR npm run dev

# Build
$ yarn build  # OR npm run build  (-> .vuepress/dist)
```

Check your site at `http://127.0.0.1:8080/`

Now take some time to review the directory /docs/.vuepress in your project. Think of this directory as your Vue App as this is where you go if you need to extend VuePress.  

.  
|---gitignore  
|---LICENSE  
|---README.md  
|---docs  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---README.md  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---test.md  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---Welcome.md  
|---netlify.toml  
|---package.json  
|---yarn.lock  


Let's start by explaining the meaning of some of these files.  

### netlify.toml  








For more information, see [VuePress Docs](https://vuepress.vuejs.org)

