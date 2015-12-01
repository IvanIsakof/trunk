module.exports = {
  main: {
    files: {
        'images/sprite.svg': 'images/sprite.svg'
    },
    options: {
      plugins: [
        { cleanupIDs: false },
        { collapseGroups: false }
      ]
    },
  }
}