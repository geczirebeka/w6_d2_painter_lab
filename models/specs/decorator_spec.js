const assert = require('assert')
const Decorator = require('../decorator.js')
const Paint = require('../paint.js')
const Room = require('../room.js')

describe('Decorator', function() {

    let decorator;

    beforeEach(function() {
        decorator = new Decorator();
    });

    it('starts with an empty paint stock', function() {
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, []);
    });

    it('should be able to count number of paints', function() {
        const actual = decorator.numberOfCans();
        assert.strictEqual(actual, 0);
    });

    it('should be able to add a can of paint to stock', function() {
        canOfPaint = new Paint(2);
        decorator.addPaint(canOfPaint);
        const actual = decorator.numberOfCans();
        assert.strictEqual(actual, 1);        
    });

    it('should be able to count total litres of paint in stock', function() {
        canOfPaint1 = new Paint(2);
        canOfPaint2 = new Paint(3);
        decorator.addPaint(canOfPaint1);
        decorator.addPaint(canOfPaint2);
        const actual = decorator.totalLitresInStock();
        assert.strictEqual(actual, 5);
    });

    it('should be able to calculate if it has enough paint to paint a room', function() {
        canOfPaint1 = new Paint(2);
        canOfPaint2 = new Paint(3);
        decorator.addPaint(canOfPaint1);
        decorator.addPaint(canOfPaint2);
        room = new Room(50);
        const actual = decorator.hasEnoughPaint(room);
        assert.strictEqual(actual, false);
    });
    
    it('should be able to paint room if has enough paint in stock', function() {
        canOfPaint1 = new Paint(5);
        canOfPaint2 = new Paint(5);
        decorator.addPaint(canOfPaint1);
        decorator.addPaint(canOfPaint2);
        room = new Room(9);
        decorator.paintRoom(room);
        const actual = room.isPainted;
        assert.strictEqual(actual, true);
    });
});