class MinHeap<T> {
    private _data: Array<T>;
    private _compare: (a: T, b: T) => number;

    constructor(compare: (a: T, b: T) => number) {
        this._data = new Array<T>();
        this._compare = compare;
    }

    push(item: T): number {
        this._data.push(item);
        this._shiftUp(this._data.length - 1);
        return this.size();
    }

    pop(): T | undefined {
        if (this.empty()) {
            return undefined;
        }

        const item = this._data[0];
        this._data[0] = this._data[this._data.length - 1];
        this._data.pop();
        this._shiftDown(0);
        return item;
    }

    top(): T {
        return this._data[0];
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

    private _shiftUp(index: number): void {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this._compare(this._data[index], this._data[parentIndex]) < 0) {
                this._swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    private _shiftDown(index: number): void {
        while (index * 2 + 1 < this._data.length) {
            let childIndex = index * 2 + 1;
            if (childIndex + 1 < this._data.length && this._compare(this._data[childIndex + 1], this._data[childIndex]) < 0) {
                childIndex++;
            }

            if (this._compare(this._data[index], this._data[childIndex]) > 0) {
                this._swap(index, childIndex);
                index = childIndex;
            } else {
                break;
            }
        }
    }

    private _swap(i: number, j: number): void {
        const temp = this._data[i];
        this._data[i] = this._data[j];
        this._data[j] = temp;

        // [this._data[i],this._data[j]] = [this._data[j],this._data[i]];
    }

}