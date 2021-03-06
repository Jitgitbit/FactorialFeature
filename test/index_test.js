var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('testing if 5! gives 120', ()=>{
      const expected = 120;
      const inputNumber = 5;
      const actual = Calculate.factorial(inputNumber);
      assert.equal(expected, actual);
    });
    it('testing if factorial(3) gives 6', ()=>{
      const expected = 6;
      const inputNumber = 3;
      const result = Calculate.factorial(inputNumber);
      assert.equal(result, expected);
    });
    it("returns 1 when you pass in 0.", ()=>{
      assert.equal(Calculate.factorial(0), 1);
    });
  });
});