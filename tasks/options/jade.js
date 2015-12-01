module.exports = {
  compile: {
    options: {
      data: {
        debug: false
      }
    },
    files: {
      "index.html": ["components/main/templates/*.jade"]
    }
  }
}