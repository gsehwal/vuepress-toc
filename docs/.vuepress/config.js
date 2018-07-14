module.exports = {
  title: 'VuePress Boilerplate',
  description: 'VuePress Project Documentation System',
  themeConfig: {
    docsDir: 'docs',
    repo: 'iwilfried/vuepress-boilerplate'
  },
  markdown: {
	  // options for markdown-it-anchor
    anchor: { permalink: false },
	includeLevel: { [1, 2, 3] } 

};


