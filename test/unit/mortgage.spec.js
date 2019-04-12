const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {

  let mortgage = null;

  beforeEach(() => {
    mortgage = new Mortgage(500000, 3, 30, 12);
  })

  it('should have a monthly payment function', () => {
    expect(mortgage.monthlyPayment).to.exist;
  });

  it('should provide the correct monthly payment', () => {
    expect(mortgage.monthlyPayment()).to.equal(2108.02);
  });

  it('should ', () => {

  });

  it('should ', () => {

  });


});