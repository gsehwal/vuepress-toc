module.exports = {
  title: 'VuePress ',
  description: 'VuePress Project Documentation System',

 markdown: {
    // options for markdown-it-anchor
    
    config: md => {
      // use more markdown-it plugins!
	  md.use(require("markdown-it-anchor")); // Optional, but makes sense as you really want to link to something
	  md.use(require("markdown-it-table-of-contents"), { includeLevel: [2, 3] }); 
    }
  }
}

