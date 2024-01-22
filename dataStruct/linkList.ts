class LinkListNode<T> {
    public element: T;
    public next: LinkListNode<T> | undefined;

    constructor(element: T) {
        this.element = element;
        this.next = undefined;
    }
}

interface ILinkList<T> {
    append(element: T): void;
    insert(position: number, element: T): boolean;
    removeAt(position: number): T | undefined;
    remove(element: T): T | undefined;
    indexOf(element: T): number;
    isEmpty(): boolean;
    size(): number;
    getHead(): LinkListNode<T> | undefined;
    toString(): string;
}

class LinkList<T> implements ILinkList<T> {
    private _head: LinkListNode<T> | undefined;
    private _length: number;

    constructor() {
        this._head = undefined;
        this._length = 0;
    }

    append(element: T): void {
        const node = new LinkListNode(element);
        if (this._head === undefined) {
            this._head = node;
        } else {
            let current = this._head;
            while (current.next !== undefined) {
                current = current.next;
            }
            current.next = node;
        }
        this._length++;
    }

    insert(position: number, element: T): boolean {
        if (position < 0 || position > this._length) {
            return false;
        }

        const node = new LinkListNode(element);
        if (position === 0) {
            node.next = this._head;
            this._head = node;
        } else {
            let current = this._head;
            let previous: LinkListNode<T> | undefined;
            let index = 0;
            while (index < position) {
                previous = current;
                current = current?.next;
                index++;
            }
            node.next = current;
            previous!.next = node;
        }
        this._length++;
        return true;
    }

    removeAt(position: number): T | undefined {
        if (position < 0 || position >= this._length) {
            return undefined;
        }

        let current = this._head;
        if (position === 0) {
            this._head = current!.next;
        } else {
            let previous: LinkListNode<T> | undefined;
            let index = 0;
            while (index < position) {
                previous = current;
                current = current!.next;
                index++;
            }
            previous!.next = current!.next;
        }
        this._length--;
        return current!.element;
    }

    remove(element: T): T | undefined {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    indexOf(element: T): number {
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

    isEmpty(): boolean {
        return this._length === 0;
    }

    size(): number {
        return this._length;
    }

    getHead(): LinkListNode<T> | undefined {
        return this._head;
    }

    toString(): string {
        let current = this._head;
        let str = '';
        while (current !== undefined) {
            str += current.element + (current.next !== undefined ? ', ' : '');
            current = current.next;
        }
        return str;
    }
}