
module.exports = function (features) {
  return {
    optimal: features.filter(a => (a.latestPercentage > 70) && (a.latestPercentage < 90)),
    tooLate: features.filter(a => (a.latestPercentage >= 90)),
    tooEarly: features.filter(a => (a.latestPercentage <= 70))
  };
}