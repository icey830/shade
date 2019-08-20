
var pkg = require('../package.json')

var data = {
  name: pkg.name,
  title: pkg.name,
  href: '/shade',
  version: pkg.version,
  description: pkg.description,
  keywords: pkg.keywords,
  links: [
    { href: '//github.com/icey830/shade', text: 'GitHub' }
  ]
}

module.exports = data

