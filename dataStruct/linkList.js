"use strict";
class LinkListNode {
    element;
    next;
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}
class LinkList {
    _head;
    _length;
    constructor() {
        this._head = undefined;
        this._length = 0;
    }
    append(element) {
        const node = new LinkListNode(element);
        if (this._head === undefined) {
            this._head = node;
        }
        else {
            let current = this._head;
            while (current.next !== undefined) {
                current = current.next;
            }
            current.next = node;
        }
        this._length++;
    }
    insert(position, element) {
        if (position < 0 || position > this._length) {
            return false;
        }
        const node = new LinkListNode(element);
        if (position === 0) {
            node.next = this._head;
            this._head = node;
        }
        else {
            let current = this._head;
            let previous;
            let index = 0;
            while (index < position) {
                previous = current;
                current = current?.next;
                index++;
            }
            node.next = current;
            previous.next = node;
        }
        this._length++;
        return true;
    }
    removeAt(position) {
        if (position < 0 || position >= this._length) {
            return undefined;
        }
        let current = this._head;
        if (position === 0) {
            this._head = current.next;
        }
        else {
            let previous;
            let index = 0;
            while (index < position) {
                previous = current;
                current = current.next;
                index++;
            }
            previous.next = current.next;
        }
        this._length--;
        return current.element;
    }
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }
    indexOf(element) {
        let current = this._head;
        let index = 0;
        while (current !== undefined) {
            if (current.element === element) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }
    isEmpty() {
        return this._length === 0;
    }
    size() {
        return this._length;
    }
    getHead() {
        return this._head;
    }
    toString() {
        let current = this._head;
        let str = '';
        while (current !== undefined) {
            str += current.element + (current.next !== undefined ? ', ' : '');
            current = current.next;
        }
        return str;
    }
}
