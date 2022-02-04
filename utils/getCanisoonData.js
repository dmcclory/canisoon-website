const browserData = require('canisoon-lib')

module.exports = function(category) {

  let scopeFn = category ? (f => f.categories.includes(category)) : (f => true)

  const features = Object.values(browserData.dataset).filter(scopeFn).sort((a, b) => a.latestPercentage < b.latestPercentage ? 1 : -1 )

  return features
}
