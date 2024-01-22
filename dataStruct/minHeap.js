"use strict";
class MinHeap {
    _data;
    _compare;
    constructor(compare) {
        this._data = new Array();
        this._compare = compare;
    }
    push(item) {
        this._data.push(item);
        this._shiftUp(this._data.length - 1);
        return this.size();
    }
    pop() {
        if (this.empty()) {
            return undefined;
        }
        const item = this._data[0];
        this._data[0] = this._data[this._data.length - 1];
        this._data.pop();
        this._shiftDown(0);
        return item;
    }
    top() {
        return this._data[0];
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
    _shiftUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this._compare(this._data[index], this._data[parentIndex]) < 0) {
                this._swap(index, parentIndex);
                index = parentIndex;
            }
            else {
                break;
            }
        }
    }
    _shiftDown(index) {
        while (index * 2 + 1 < this._data.length) {
            let childIndex = index * 2 + 1;
            if (childIndex + 1 < this._data.length && this._compare(this._data[childIndex + 1], this._data[childIndex]) < 0) {
                childIndex++;
            }
            if (this._compare(this._data[index], this._data[childIndex]) > 0) {
                this._swap(index, childIndex);
                index = childIndex;
            }
            else {
                break;
            }
        }
    }
    _swap(i, j) {
        const temp = this._data[i];
        this._data[i] = this._data[j];
        this._data[j] = temp;
        // [this._data[i],this._data[j]] = [this._data[j],this._data[i]];
    }
}
