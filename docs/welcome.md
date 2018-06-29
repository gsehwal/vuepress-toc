---
title: Welcome to the VuePress + Netlify Example 
---  

<a href="https://vuepress.vuejs.org/" target="_blank" rel="nofollow">
    <img width="280" src="https://raw.githubusercontent.com/vuejs/vuepress/master/docs/.vuepress/public/hero.png" alt="logo" />
  </a>  
  
  
# VuePress

*This is a Starter template for a [VuePress](https://vuepress.vuejs.org) site and it integrates the NetlifyCMS with VuePress. 
VuePress is focused on content-centric static sites and provides features tailored for technical documentation out of the box.*

## Requirements  

::: tip
*It is currently recommended to use Yarn instead of npm when installing VuePress into an **existing project** that has webpack 3.x as a dependency. Npm fails to generate the correct dependency tree in this case.*
:::  

You can check, if **Node**, **Yarn** and **Vuepress** is already installed: 
```bash
$ node --version  
$ yarn --version  
$ vuepress --version
```  
```bash
$ node -v  
v8.11.3
```  
If you see a version number on your screen then the software is installed.  
Otherwise you need to download and install it.  

## Installing Node, Yarn and VuePress  

##### [Node Installation](https://nodejs.org/en/download/)  
##### [Yarn Installation](https://yarnpkg.com/lang/en/docs/install/#windows-stable)##### [VuePress Installation](https://www.npmjs.com/package/vuepress )  


## Updating Node, Yarn and VuePress  
[Node.js](https://nodejs.org/en/)  
[Yarn Update](https://yarnpkg.com/en/docs/cli/upgrade)  
[VuePress 'Update](https://www.npmjs.com/package/vuepress)  


```bash
nvm install 8.1.0 (any version number - nvm = Node Version Manager)
yarn upgrade --latest
yarn global add vuepress # OR npm install -g vuepress
```
<br /><br /> 

# Quickstart 

Use the one-click deploy button and get a copy of this base-template as a repositary in your own GitHub account and additionally
a live-server version on Netlify for free. Every change in the GitHub README.md file will then automatically get a change 
on this server.

### [Life Demo on Netlify](https://nifty-williams-038c26.netlify.com/)


## One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/iwilfried/vuepress-boilerplate)

Documentation of other free server deployments like GitHub Pages, Gitlab Pages, Gitlab CLI, Google Firebase, Surge, Heroku 
you can find under [vuepress.vuejs.org/guide/deploy](https://vuepress.vuejs.org/guide/deploy.html)

``If you edit the files in Github direct, the changes are automatically done on the server too.``

<br /> 

# Local Development - Getting Started  

### Step 1: Install VuePress.  
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

```bash
code .  
```
### Step 2: Create a folder inside the root.
Inside the project root folder, create one folder called docs.

Now, in that folder, make one **markdown** file called a **README.md**.

In the **README.md** file, just write the following line of code.  

```bash
# Hello World  
```
Okay, now we need to run the project.

### Step 3: Run the Project in development server.  

Go into your root folder, and open the terminal and hit the following command.  

```bash
npx vuepress dev docs  
```
Calling npx <command> when <command> isn’t already in your $PATH will automatically install a package with that name from the npm registry for you, and invoke it.  

<br /><br /><br /><br /><br /><br />

## VuePress Example Tutorial

Switch to your browser and go to this URL: http://localhost:8080/

You can see the Hello World. Here # means h1 tag equivalent to HTML. It is simple Markdown syntax.

You can add the scripts to **package.json** file.

{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
Now, stop the server by control + c and then start the server with the following command.

RELATED POSTS
Nuxt js Laravel Authentication Tutorial With Example

Jun 22, 2018
Vue Datatable Component Example

Jun 7, 2018
npm run docs:dev
You can also generate the static assets using the following command.

npm run docs:build
By default, the built files will be in docs/.vuepress/dist, which can be configured via the dest field in docs/.vuepress/config.js The created files can be deployed to any static file server.

Step 4: Configuration.
For creating a configuration file, we need to first create a folder inside the docs folder called .vuepress.

Inside .vuepress folder, create a  javascript file called config.js file.

// config.js

module.exports = {
  title: 'First VuePress Project',
  description: 'Exploring VuePress'
}
Okay, if your development server is running, then you can see that the page now has a header with the title and a search box. VuePress comes with built-in headers-based search – it automatically builds a simple search index from the title, h2, and h3 headers from all the pages.

 

VuePress

There are more configurations that you can apply, for example, base, title, head, Google Analytics, Port number and other stuff.

Step 5: Asset Handling
In our project, docs folder is mainly reacting as a root folder, so we need to create one folder called images inside docs folder, and them move any local image to that folder. We can access using this syntax.

README.md

# Hello world

![An image](./images/Krunal.jpg)
You can see, now we can see the image in our page.  You can check out the more options here.

Step 6: Create second md file inside docs folder.
Okay, now create second Markdown file inside docs folder called Demo.md. Write the following line inside that file and save it.

# This is second demo
Now, see the project in the browser.

 

VuePress Markdown Tutorial

You can see here, the content is displaying in the browser and after clicking that link, we can redirect to a new route, and that is Demo.html. 

We have not defined any route but still, VuePress takes that second file as another route, and after clicking that link we redirect to that page. How cool is that!! It automatically figures it out by itself.

You can check out the markdown extensions. It is handy for creating content.

In future, we will build an entirely static website with the help of VuePress.

Conclusion
It is the perfect framework for the creating technical documentation and blog. It is server-side rendered so entirely SEO friendly. VuePress Tutorial For Beginners is over.

 

VueVue js
 
Krunal
I am Web Developer and Blogger. I have created this website for the web developers to understand complex concepts in an easy manner.

 PREV POST

How To Deploy Nodejs App To Heroku

NEXT POST 

Laravel Datatables Tutorial With Example

YOU MIGHT ALSO LIKE More From Author
VUEJS
Nuxt js Laravel Authentication Tutorial With Example

VUEJS
Vue Datatable Component Example

VUEJS
Vue Notification Tutorial


LEAVE A REPLY
Your email address will not be published.


Your Comment


Your Name *

Your Email *

Your Website

This site uses Akismet to reduce spam. Learn how your comment data is processed.


Like This Page

Tags
Angular 4Laravel 5.4ReduxWebpackReact.js TutorialAxiosmongodbAngular 5React NativeVueexpressES6ReactReact.jsAngularVue jsNode.jsLaravel 5.5Laravel 5.6Laravel
Stay With Us
Facebook
Likes
198
Followers
47
Followers
16
Subscribers
137
Followers
10
Followers
134
Followers
Linkedin
Follow us
201
Posts
Subscribe For Latest Post
Name

Email





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


