var Alt = require('alt')
var alt = new Alt()

alt.dispatcher.register(console.log.bind(console))
window.Alt = Alt;

module.exports = alt
