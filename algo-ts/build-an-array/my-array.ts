class MyArray {
  data: {};
  length: number;

  constructor() {
    this.length = 0;
    this.data = {};
  }

  greet() {
    return "Hello There!";
  }

  getData() {
    return this.data;
  }

  get(index: number) {
    return this.data[index];
  }

  push(item: any) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shiftItems(index: number) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
let newArray = new MyArray();
newArray.push("Hello");
newArray.push("sup");
newArray.push("yo");
console.log(newArray.getData());

newArray.shiftItems(1);
console.log(newArray.getData());
