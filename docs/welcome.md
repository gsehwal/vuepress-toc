---
title: Welcome to the VuePress + Netlify Example 
---  

<a href="https://vuepress.vuejs.org/" target="_blank" rel="nofollow">
    <img width="280" src="https://raw.githubusercontent.com/vuejs/vuepress/master/docs/.vuepress/public/hero.png" alt="logo" />
  </a>  
  
  
# VuePress

*This is a Starter template for a [VuePress](https://vuepress.vuejs.org) site and it integrates the NetlifyCMS with VuePress.*  

VuePress is focused on content-centric static sites and provides features tailored for technical documentation out of the box.

## Requirements  

::: tip
*It is currently recommended to use Yarn instead of npm when installing VuePress into an **existing project** that has webpack 3.x as a dependency. Npm fails to generate the correct dependency tree in this case.*
:::  


You can check, if Node, Yarn and Vuepress is already installed with: 

```bash
$ node --version  
$ yarn --version  
$ vuepress --version
```  
```bash
$ node -v  
v8.11.3
```  

<br />
If you see a version number on your screen then the software is installed.  
Otherwise you need to download and install it.  

## Installing Node, Yarn and VuePress  

[Node Installation](https://nodejs.org/en/download/)  
[Yarn Installation](https://yarnpkg.com/lang/en/docs/install/#windows-stable)  
[VuePress Installation](https://www.npmjs.com/package/vuepress )  


## Updating Node, Yarn and VuePress  
[Node.js](https://nodejs.org/en/)  
[Yarn Update](https://yarnpkg.com/en/docs/cli/upgrade)  
[VuePress 'Update](https://www.npmjs.com/package/vuepress)  


```bash
nvm install 8.1.0 (any version number - nvm = Node Version Manager)
yarn upgrade --latest
yarn global add vuepress # OR npm install -g vuepress
```
<br />  

# Quickstart 

Use the one-click deploy button and get a copy of this base-template as a repositary in your own GitHub account and additionally
a live-server version on Netlify for free. Every change in the GitHub README.md file will then automatically get a change 
on this server.

### [Life Demo on Netlify](https://nifty-williams-038c26.netlify.com/)


## One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/iwilfried/vuepress-boilerplate)

Documentation of other free server deployments like GitHub Pages, Gitlab Pages, Gitlab CLI, Google Firebase, Surge, Heroku 
you can find under [vuepress.vuejs.org/guide/deploy](https://vuepress.vuejs.org/guide/deploy.html)

<br />  

``If you edit the files in Github direct, the changes are automatically done on the server too.``

<br /> 

# Local Development - Getting Started  

**Step 1:** Install VuePress.  
Create a project directory called vpress.

```bash
mkdir vpress
```
Go into that directory.  

```bash
cd vpress
```  

I am using Yarn as a package manager, so let us pull the package using the following command.  

```bash
yarn add vuepress
```  

If you are not using Yarn, then you can pull through NPM.  

```bash
npm install vuepress --save  
```
Now, open the project in your favorite editor.






<br /><br /><br /><br /><br /><br />



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

Check your site at `http://127.0.0.1:8080/`  or `localhost://8080`

<br />

## Review of the files in the project-directory 

.  
|---gitignore  
|---LICENSE  
|---README.md  
|---**docs**  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---README.md   
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---welcome.md  
|---netlify.toml  
|---package.json  
|---yarn.lock  

<br />  

Let's start by explaining the meaning of some of these files.  

If you want to use the **One-Click Deploy** option, then Netlify needs a `netlify.toml` file.  

### netlify.toml  

```bash
[build]  
command = "yarn docs:build"  
publish = "docs/.vuepress/dist/"  
```

This file is used by netlify on deployment. Netlify pulls code from your github repo, and will run command to generate your static site. Once it's complete publish tells it where the public directory is to launch your site.


### package.json  

```bash  
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
  "devDependencies": {
    "vuepress": "^0.10.2"
  }
}  
```

This file is the standard VuePress settings that you would have if you followed the official Vue Press installation guide.

### /docs  

|---**docs**  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---README.md   
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---welcome.md  

<br />  

Lastly, the docs folder contains actual markdown files that will make up the content of our site itself. These files are committed to github, and netlify's cms will work with these via a CMS that we will have setup by the end of this tutorial.  

If you review these files, note that README.md is different than the other two because it's serving as the home page for the site. VuePress reads front matter to configure this post differently. There are a lot more options you can configure using these properties but I'll leave that to you to read the VuePress docs.  









For more information, see [VuePress Docs](https://vuepress.vuejs.org)


