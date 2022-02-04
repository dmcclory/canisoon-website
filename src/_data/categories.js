const browserData = require('canisoon-lib')
const getCanisoonData = require('../../utils/getCanisoonData')
const bucketData = require('../../utils/bucketData')

module.exports = function () {
  const featureCategories = Array.from(new Set( Object.values(browserData.dataset).flatMap(f => f.categories)))

  const dataset = featureCategories.map((fc) => {
    const categoryFeatures = getCanisoonData(fc)
    const features = bucketData(categoryFeatures)
    return { name: fc, features }
  })

  return dataset
}