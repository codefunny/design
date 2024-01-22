interface ISet<T> {
    add(item: T): boolean;
    remove(item: T): boolean;
    contains(item: T): boolean;
    size(): number;
    empty(): boolean;
    clear(): void;
    toString(): string;
    union(otherSet: ISet<T>): ISet<T>;
    values(): Array<T>;
}

class CustomSet<T> implements ISet<T> {
    private _data: Array<T>;

    constructor() {
        this._data = new Array<T>();
    }

    add(item: T): boolean {
        if (this.contains(item)) {
            return false;
        }

        this._data.push(item);
        return true;
    }

    remove(item: T): boolean {
        const index = this._data.indexOf(item);
        if (index < 0) {
            return false;
        }

        this._data.splice(index, 1);
        return true;
    }

    contains(item: T): boolean {
        return this._data.indexOf(item) >= 0;
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

    values(): Array<T> {
        return [...this._data];
    }

    union(otherSet: ISet<T>): ISet<T> {
        const unionSet = new CustomSet<T>();
        this.values().forEach(item => unionSet.add(item));
        otherSet.values().forEach(item => unionSet.add(item));
        return unionSet;
    }

    difference(otherSet: ISet<T>): ISet<T> {
        const differenceSet = new CustomSet<T>();
        this.values().forEach(item => {
            if (!otherSet.contains(item)) {
                differenceSet.add(item);
            }
        });
        return differenceSet;
    }

    intersection(otherSet: ISet<T>): ISet<T> {
        const intersectionSet = new CustomSet<T>();
        this.values().forEach(item => {
            if (otherSet.contains(item)) {
                intersectionSet.add(item);
            }
        });
        return intersectionSet;
    }

    isSubsetOf(otherSet: ISet<T>): boolean {
        if (this.size() > otherSet.size()) {
            return false;
        }
        return this.values().every(item => otherSet.contains(item));
    }
}