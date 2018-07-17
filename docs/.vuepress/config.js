module.exports = {
  title: 'VuePress ',
  description: 'VuePress Project Documentation System',

    

 markdown: {
    // options for markdown-it-anchor
    
  // options for markdown-it-anchor
    anchor: { permalink: false },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },
	
    config: md => {
      // use more markdown-it plugins!
      md.use(require("markdown-it-table-of-contents"), [1,2]);
    }
  }
}

