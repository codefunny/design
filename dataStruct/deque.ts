interface IDeque<T> {
    pushFront(item: T): number;
    pushBack(item: T): number;
    popFront(): T|undefined;
    popBack(): T|undefined;
    front(): T;
    back(): T;
    size(): number;
    empty(): boolean;
    clear(): void;
}

class Deque<T> implements IDeque<T> {
    private _data: Array<T>;

    constructor() {
        this._data = new Array<T>();
    }

    pushFront(item: T): number {
        return this._data.unshift(item);
    }

    pushBack(item: T): number {
        return this._data.push(item);
    }

    popFront(): T | undefined{
        return this._data.shift();
    }

    popBack(): T| undefined {
        return this._data.pop();
    }

    front(): T {
        return this._data[0];
    }

    back(): T {
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