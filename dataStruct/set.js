"use strict";
class CustomSet {
    _data;
    constructor() {
        this._data = new Array();
    }
    add(item) {
        if (this.contains(item)) {
            return false;
        }
        this._data.push(item);
        return true;
    }
    remove(item) {
        const index = this._data.indexOf(item);
        if (index < 0) {
            return false;
        }
        this._data.splice(index, 1);
        return true;
    }
    contains(item) {
        return this._data.indexOf(item) >= 0;
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
    values() {
        return [...this._data];
    }
    union(otherSet) {
        const unionSet = new CustomSet();
        this.values().forEach(item => unionSet.add(item));
        otherSet.values().forEach(item => unionSet.add(item));
        return unionSet;
    }
    difference(otherSet) {
        const differenceSet = new CustomSet();
        this.values().forEach(item => {
            if (!otherSet.contains(item)) {
                differenceSet.add(item);
            }
        });
        return differenceSet;
    }
    intersection(otherSet) {
        const intersectionSet = new CustomSet();
        this.values().forEach(item => {
            if (otherSet.contains(item)) {
                intersectionSet.add(item);
            }
        });
        return intersectionSet;
    }
    isSubsetOf(otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }
        return this.values().every(item => otherSet.contains(item));
    }
}
