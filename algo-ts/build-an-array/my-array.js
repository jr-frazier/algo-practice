var MyArray = /** @class */ (function () {
    function MyArray() {
        this.length = 0;
        this.data = {};
    }
    MyArray.prototype.greet = function () {
        return "Hello There!";
    };
    MyArray.prototype.getData = function () {
        return this.data;
    };
    MyArray.prototype.get = function (index) {
        return this.data[index];
    };
    MyArray.prototype.push = function (item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    };
    MyArray.prototype.pop = function () {
        var lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    };
    MyArray.prototype.shiftItems = function (index) {
        for (var i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    };
    return MyArray;
}());
var newArray = new MyArray();
newArray.push("Hello");
newArray.push("sup");
newArray.push("yo");
console.log(newArray.data);
newArray.shiftItems(1);
console.log(newArray.getData());
