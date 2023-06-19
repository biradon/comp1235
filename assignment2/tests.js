"use strict";

const chai = window.chai;
const expect = chai.expect;

/***************************************************************************************
describe('yourFunctionName', () =>  {
    it('please enter your function description here',  () => {
        expect(yourFunctionName(parameters)).to.deep.equal(expected_result)
    })
})
 ***************************************************************************************/
// Function 1
describe('_findNumOfDigits', () =>  {
    it('Find the Number of Digits in an Argument',  () => {
        // expect(_findNumOfDigits(1000)).to.deep.equal(4)
        // expect(_findNumOfDigits("abcd")).to.deep.equal(0)
        // expect(_findNumOfDigits(12)).to.deep.equal(2)
        // expect(_findNumOfDigits("COMP1235")).to.deep.equal(4)
        // expect(_findNumOfDigits(0)).to.deep.equal(1)
        // expect(_findNumOfDigits("C1O2M3P5")).to.deep.equal(4)
    })
})

// Function 2
describe('_surplus', () =>  {
    it('Surplus Function',  () => {
        // expect(_surplus("orange")).to.deep.equal("orange")
        // expect(_surplus("pear")).to.deep.equal("pear")
        // expect(_surplus("")).to.deep.equal("")
    })
})

// Function 3
describe('_strNumbers', () =>  {
    it('Find the number in the string',  () => {
        expect(_strNumbers((["1a", "a", "2b", "b"]))).to.deep.equal(["1a", "2b"])
        // expect(_strNumbers((["abc", "abc10"]))).to.deep.equal(["abc10"])
        // expect(_strNumbers((["abc", "ab10c", "a10bc", "bcd"]))).to.deep.equal(["ab10c", "a10bc"])
        // expect(_strNumbers((["this is a test", "test1"]))).to.deep.equal(["test1"])
    })
})

// Funtion 4
describe('_determineClassGrading', () =>  {
    it('Find and determine the grading in class',  () => {
        expect(_determineClassGrading([50, 51, 80, 45])).to.deep.equal([3,1,56.5])
        // expect(_determineClassGrading([35,45,25,10,6,33])).to.deep.equal([0,6,25.7])
        //expect(_determineClassGrading([80, 90])).to.deep.equal([2,0,85.0])
    })
})

// Function 5
describe('_moveCapitalLetters', () =>  {
    it('Move all the capital letter to the front',  () => {
        expect(_moveCapitalLetters("hApPy")).to.deep.equal("APhpy")
        // expect(_moveCapitalLetters("moveMENT")).to.deep.equal("MENTmove")
        //expect(_moveCapitalLetters("shOrtCAKE")).to.deep.equal("OCAKEshrt")
    })
})