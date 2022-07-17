function Counter() {
    this.count = 0;
    this.sum = 0;
    this.product = 1;
}

Counter.prototype.execute = function (array) {
    array.forEach((entry) => {
        this.sum += entry;
        ++this.count;
        this.product *= entry;
    }, this)
}

const obj = new Counter();
obj.execute([4, 1, , 45, 8]);

console.log(obj.count); // 4

console.log(obj.sum); // 58

console.log(obj.product); // 1440