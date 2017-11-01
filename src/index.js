var getRandomBetween = require('./lib/getRandomNumber')

function generateNumber() {
    return getRandomBetween(1, 50)
}

function generateStar() {
    return getRandomBetween(1, 12)
}

module.exports = {
    generateNumber,
    generateStar
}