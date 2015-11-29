module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
      'css/build/global.css': 'components/s.less'
    }
  }
}