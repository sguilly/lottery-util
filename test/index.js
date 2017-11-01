import test from "tape"
import lotteryUtil from "../src"

// var test = require('tape')
// var lotteryUtil = require('../dist')

test("lotteryUtil.generateStar()", (t) => {
    t.plan(3)

    t.equal(true, (lotteryUtil.generateStar() > 0), "> 0")
    t.equal(true, (lotteryUtil.generateStar() < 13), "< 13")

    var testOk = true

    for (var index = 0; index < 100; index++) {
        var star = lotteryUtil.generateStar()

        if (star < 1 || star > 12) {

            console.log('???', star)
            testOk = false
        }
    }

    t.equal(true, testOk, "loop 100 tests")

})

test("lotteryUtil.generateNumber()", (t) => {
    t.plan(1)

    var testOk = true

    for (var index = 0; index < 100; index++) {
        var number = lotteryUtil.generateNumber()

        if (number < 1 || number > 50) {

            console.log('???', number)
            testOk = false
        }
    }

    t.equal(true, testOk, "loop 100 tests")

})