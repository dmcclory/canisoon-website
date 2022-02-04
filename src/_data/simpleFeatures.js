const getCanisoonData = require('../../utils/getCanisoonData')
const bucketData = require('../../utils/bucketData')

module.exports = function() {
  return bucketData(getCanisoonData())
}
