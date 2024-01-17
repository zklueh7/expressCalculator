const { mean, median, mode } = require('./calculations');

describe("#median", function(){
    test("finds median of an even set", function(){ 
      expect(median([1, 2, 3, 4])).toEqual(2.5)
    })
    test("finds median of an odd set", function () { 
      expect(median([1, 2, 3])).toEqual(2)
    })
  })

describe("#mode", function() {
    test("returns mode", function () {
        expect(mode([1, 1, 2, 3])).toEqual(1);
    });
})

describe("#mean", function() {
    test("return mean of set", function() {
        expect(mean([1, 2, 6])).toEqual(3);
    });
})
