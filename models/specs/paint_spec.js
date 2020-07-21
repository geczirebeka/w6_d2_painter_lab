const assert = require('assert')
const Paint = require('../paint.js')

describe('Paint', function() {
     let paint;

     beforeEach(function() {
         paint = new Paint(2);
     });

     it('should have a number of litres of paint', function() {
        const actual = paint.litres;
        assert.strictEqual(actual, 2);
     });

     it('should be able to check if it is empty', function() {
        const actual = paint.isEmpty;
        assert.strictEqual(actual, false);
     });

     it('should be able to empty itself of paint', function() {
        paint.empty();
        const actual = paint.isEmpty;
        assert.strictEqual(actual, true);
     });


});