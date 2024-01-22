interface ICircularQueue<T> {
    enqueue(item: T): number;
    dequeue(): T|undefined;
    front(): T;
    size(): number;
    empty(): boolean;
    clear(): void;
    isFull(): boolean;
}

class CircularQueue<T> implements ICircularQueue<T> {
    private _data: Array<T>;
    private _capacity: number;
    private _front: number;
    private _rear: number;

    constructor(capacity: number) {
        this._data = new Array<T>(capacity);
        this._capacity = capacity;
        this._front = 0;
        this._rear = 0;
    }

    enqueue(item: T): number {
        if (this.isFull()) {
            throw new Error('queue is full');
        }

        this._data[this._rear] = item;
        this._rear = (this._rear + 1) % this._capacity;
        return this.size();
    }

    dequeue(): T|undefined {
        if (this.empty()) {
            return undefined;
        }

        const item = this._data[this._front];
        this._front = (this._front + 1) % this._capacity;
        return item;
    }

    front(): T {
        return this._data[this._front];
    }

    size(): number {
        return (this._capacity - this._front + this._rear) % this._capacity;
    }

    empty(): boolean {
        return this._front === this._rear;
    }

    clear(): void {
        this._front = 0;
        this._rear = 0;
    }

    isFull(): boolean {
        return (this._rear + 1) % this._capacity === this._front;
    }

    toString(): string {
        return this._data.toString();
    }
}