"use strict";
class Deque {
    _data;
    constructor() {
        this._data = new Array();
    }
    pushFront(item) {
        return this._data.unshift(item);
    }
    pushBack(item) {
        return this._data.push(item);
    }
    popFront() {
        return this._data.shift();
    }
    popBack() {
        return this._data.pop();
    }
    front() {
        return this._data[0];
    }
    back() {
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
