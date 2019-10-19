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
  });
});