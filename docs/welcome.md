---
title: Welcome to the VuePress + TOC component 

---

<a href="https://vuepress.vuejs.org/" target="_blank" rel="nofollow">
    <img width="280" src="https://raw.githubusercontent.com/vuejs/vuepress/master/docs/.vuepress/public/hero.png" alt="logo" />
  </a>  

# VuePress

_This is a Starter template for a [VuePress](https://vuepress.vuejs.org) site and it integrates the NetlifyCMS with VuePress.
VuePress is focused on content-centric static sites and provides features tailored for technical documentation out of the box._

<script\>
export default{
  data(){
    return{
      active:true,
    }
  }
}
</script\>

<div><button @click="active=!active" class="button">Show / Hide</button></div>

<div>

<div class="toc" v-if="active">
<p  class="toc">Table of Contents</p>  

<hr>  

[[toc]]

</div>
</div>

## What is Lorem Ipsum?

Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has ...

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
of classical Latin literature...

### The standard chunk of Lorem Ipsum

used since the 1500s is reproduced below for those interested.
Sections 1.10.32 and 1.10.33 from "de Finibus...

## Contrary

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
of classical Latin literature...

### Where does it come from?

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
of classical Latin literature...

#### The standard chunk of Lorem Ipsum

used since the 1500s is reproduced below for those interested.
Sections 1.10.32 and 1.10.33 from "de Finibus...

#### Where does it come from?

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
of classical Latin literature...

### Where does it come from?

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
of classical Latin literature...

[markdown packages](https://www.npmjs.com/search?q=keywords:markdown-it-plugin)

- Type: Object
- Default: { includeLevel: [2, 3] }

Options for markdown-it-table-of-contents. (Note: prefer markdown.slugify if you want to customize header ids.)

### markdown.config

- Type: Function
- Default: undefined

A function to modify default config or apply additional plugins to the markdown-it instance used to render source files.

`Example:`

```bash
module.exports = {
  markdown: {
    config: md => {
      md.set({ breaks: true })
      md.use(require('markdown-it-xxx'))
    }
  }
}
```

markdown-it-toc-and-anchor-with-slugid
Description
Markdown-it plugin to add toc and anchor links with slugified id in headings

Keywords
Publisher
avatar
yuki-takei
published 1.1.4 • a month ago

markdown-it-toc-x3
Description
Markdown-it plugin for adding table of contents

Keywords
Publisher
avatar
chenxsan
published 0.0.6 • 22 days ago

## Advanced Configuration

VuePress uses [markdown-it](https://github.com/markdown-it/markdown-it) as the markdown renderer.
A lot of the extensions above are implemented via custom plugins. You can further customize the `markdown-it`
instance using the `markdown` option in `.vuepress/config.js`

```
module.exports = {
markdown: {
// options for markdown-it-anchor
anchor: { permalink: false },
// options for markdown-it-toc
toc: { includeLevel: [1, 2] },
config: md => {
// use more markdown-it plugins!
md.use(require('markdown-it-xxx'))
}
}
}
```
