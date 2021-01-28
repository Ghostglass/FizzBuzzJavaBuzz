describe('FizzBuzz', function() {
    var fizzBuzz = new FizzBuzz();
    beforeEach(function() {
        fizzBuzz = new FizzBuzz();
});
describe('multiples of 3', function() {
    it('fizzes for 3', function() {
      expected(fizzBuzz.play (3)).toEqual ('Fizz');
    });
    it('fizzes for 6', function() {
      expect(fizzBuzz.play(6)).toEqual   ('Fizz');
    });
});
describe('multiples of 5', function() {
    it('buzzes for 5', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });

    it('buzzes for 10', function() {
      expect(fizzBuzz.play(10)).toEqual('Buzz');
    });
});
describe('multiples of 3 and 5',function() {
    it('fizzbuzzes for 15', function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
  });
    it('fizzbuzzes for 30', function() {
      expect(fizzBuzz.play(30)).toEqual('FizzBuzz',);
    });
});  
describe('all other numbers', function() {
    it('1 for 1', function() {
      expect(fizzBuzz.play(1)).toEqual(1);
    });

    it('11 for 11', function() {
      expect(fizzBuzz.play(11)).toEqual(11);
    });
});

  describe('knows when a number is', function() {

      describe('knows when a number is NOT',function() {
        it('divisible by 3', function() {
          expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
        });

      it('divisible by 3',function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);

      });
    
    });

  });

});

describe('when playing,says',function() {
  it('"Fizz" when a number is divisible by 3', function() {
    expect(fizzbuzz.says(3)).toEqual("Fizz");
    });
});