interface IStack<T> {
    push(item: T): number;
    pop(): T|undefined;
    top(): T;
    size(): number;
    empty(): boolean;
    clear(): void;
    toString(): string;
}

class Stack<T> implements IStack<T> {
    private _data: Array<T>;

    constructor() {
        this._data = new Array<T>();
    }

    push(item: T): number {
        return this._data.push(item);
    }

    pop(): T | undefined{
        return this._data.pop();
    }

    top(): T {
        return this._data[this._data.length - 1];
    }

    size(): number {
        return this._data.length;
    }

    empty(): boolean {
        return this._data.length === 0;
    }

    clear(): void {
        this._data = new Array<T>();
    }

    toString(): string {
        return this._data.toString();
    }
}