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

describe('circle', () =>  {
    it('Calculate the area and perimeter by given circle radius',  () => {
        expect(circle(3)).to.deep.equal(28.27, 18.85)
    })
})

describe('calculateSalary', () =>  {
    it('Calculate the area and perimeter by given circle radius',  () => {
        expect(calculateSalary([8,8,8,8,8,0,0])).to.deep.equal(400)
    })
})

describe('indexMultipler', () =>  {
    it('Multiple the array value with array position',  () => {
        expect(indexMultipler([1, 2, 3, 4, 5])).to.deep.equal(40)
    })
})

describe('filteredJSON', () =>  {
    it('Filter the JSON object with specific condition',  () => {
        expect(filteredJSON(([{id: 1, u: "batman"}])).to.deep.equal([]))
        expect(filteredJSON(([{id: 11, u: "spidey"}])).to.deep.equal([{id: 11, u: "spidey"}]))

    })
})

describe('breakAway', () =>  {
    it('Break the array and combine it with the given number',  () => {
        expect(breakAway(([2,3,4,5], 2)).to.deep.equal([[2,3],[4,5]]))
        expect(breakAway(([2,3,4,5,6,7], 3)).to.deep.equal([2,3],[4,5],[6] ))

    })
})