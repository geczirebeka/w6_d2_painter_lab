const Decorator = function() {
    this.paintStock = [];
};

Decorator.prototype.numberOfCans = function() {
    return this.paintStock.length;
};

Decorator.prototype.addPaint = function(canOfPaint) {
    this.paintStock.push(canOfPaint);
};

Decorator.prototype.totalLitresInStock = function() {
    let total = 0;
    for (let can of this.paintStock) {
        total += can.litres;
    }
    return total;
};

Decorator.prototype.hasEnoughPaint = function(room) {
    return room.area <= this.totalLitresInStock(); 
};

Decorator.prototype.paintRoom

module.exports = Decorator;