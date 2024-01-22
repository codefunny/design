"use strict";
class Stack {
    _data;
    constructor() {
        this._data = new Array();
    }
    push(item) {
        return this._data.push(item);
    }
    pop() {
        return this._data.pop();
    }
    top() {
        return this._data[this._data.length - 1];
    }
    size() {
        return this._data.length;
    }
    empty() {
        return this._data.length === 0;
    }
    clear() {
        this._data = new Array();
    }
    toString() {
        return this._data.toString();
    }
}
