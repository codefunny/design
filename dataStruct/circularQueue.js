"use strict";
class CircularQueue {
    _data;
    _capacity;
    _front;
    _rear;
    constructor(capacity) {
        this._data = new Array(capacity);
        this._capacity = capacity;
        this._front = 0;
        this._rear = 0;
    }
    enqueue(item) {
        if (this.isFull()) {
            throw new Error('queue is full');
        }
        this._data[this._rear] = item;
        this._rear = (this._rear + 1) % this._capacity;
        return this.size();
    }
    dequeue() {
        if (this.empty()) {
            return undefined;
        }
        const item = this._data[this._front];
        this._front = (this._front + 1) % this._capacity;
        return item;
    }
    front() {
        return this._data[this._front];
    }
    size() {
        return (this._capacity - this._front + this._rear) % this._capacity;
    }
    empty() {
        return this._front === this._rear;
    }
    clear() {
        this._front = 0;
        this._rear = 0;
    }
    isFull() {
        return (this._rear + 1) % this._capacity === this._front;
    }
    toString() {
        return this._data.toString();
    }
}
