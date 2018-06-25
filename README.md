# VuePress

*This is a Starter template for a [VuePress](https://vuepress.vuejs.org) site and it integrates the NetlifyCMS with VuePress.*  

## Requirements  

::: tip
*It is currently recommended to use Yarn instead of npm when installing VuePress into an **existing project** that has webpack 3.x as a dependency. Npm fails to generate the correct dependency tree in this case.*
:::  


You can check, the software is already installed on your computer: 
Type in your terminal

```bash
$ node --version  
$ yarn --version  
$ vuepress --version
```  

λ node -v  
**v8.11.3**  
<br />
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


## One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/iwilfried/vuepress-boilerplate)

Documentation of other free server deployments like GitHub Pages, Gitlab Pages, Gitlab CLI, Google Firebase, Surge, Heroku 
you can find under 
[vuepress.vuejs.org/guide/deploy](https://vuepress.vuejs.org/guide/deploy.html)

<br />

# Local Development

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
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---test.md  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---Welcome.md  
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

|---docs  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---README.md  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---test.md  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---Welcome.md  


Lastly, the docs folder contains actual markdown files that will make up the content of our site itself. These files are committed to github, and netlify's cms will work with these via a CMS that we will have setup by the end of this tutorial.  

If you review these files, note that README.md is different than the other two because it's serving as the home page for the site. VuePress reads front matter to configure this post differently. There are a lot more options you can configure using these properties but I'll leave that to you to read the VuePress docs.




For more information, see [VuePress Docs](https://vuepress.vuejs.org)

