const browserData = require('canisoon-lib')
module.exports = function() {

  const features = Object.values(browserData.dataset)

  return {
    optimal: features.filter(a => (a.latestPercentage > 70) && (a.latestPercentage < 90)),
    tooLate: features.filter(a => (a.latestPercentage >= 90)),
    tooEarly: features.filter(a => (a.latestPercentage <= 70))
  };
}
