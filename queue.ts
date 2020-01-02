class Queue<T> {
  storage: Array<T> = [];
  size() {
    return this.storage.length;
  }
  enqeue(value: T) {
    this.storage.push(value);
  }
  deqeue() {
    this.storage.splice(0, 1);
  }
}