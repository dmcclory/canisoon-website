const browserData = require('canisoon-lib')

module.exports = function () {
  const featureCategories = Array.from(new Set( Object.values(browserData.dataset).flatMap(f => f.categories)))
  return featureCategories
}