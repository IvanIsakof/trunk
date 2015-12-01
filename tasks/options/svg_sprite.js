module.exports = {
  main: {
    // Target basics
    files: [{
      expand: true,
      cwd: 'images/svg/',
      src: ['*.svg'],
      dest: '.'
    }],
    // Target options
    options: {
      shape: {
        // Remove SVGO default optimization, move it out and make before spriting
        transform: []
      },
      svg: {
        // Prevent classnames transformtations
        namespaceClassnames: false
      },
      mode: {
        symbol: {
          dest: '.',
          inline: true,
          prefix: '.%s',
          dimensions: '%s', // was '-size'
          bust: false, // Cache busting
          // inline: true,
          sprite: 'components/main/templates/sprite.svg',
          /*example: {
            dest: 'static/_spd20/i/sprite.html'
          },*/
          example: false,
          render: {
            less: {
              dest: 'components/main/sprite.svg_.less'
            }
          }
        }
      }
    }
  }
}