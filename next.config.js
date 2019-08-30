const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    }
  }
})
