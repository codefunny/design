interface Command {
    execute():void;
}

class SimpleCommand implements Command {
    private payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }

    public execute(): void {
        console.log(`simple command ${this.payload}`);
    }
}

class Receiver {
    public doSomething(a: string) :void {
        console.log(`Receiver work on ${a}`);
    }
}

class ComplexCommand implements Command {
    private receiver: Receiver;

    private a: string;
    private b: string;

    constructor(receiver: Receiver,a :string, b: string) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }

    public execute(): void {
        this.receiver.doSomething(this.a + this.b);
    }

}

class Invork {
    private onStart: Command;
    private onFinish: Command;

    public setOnStart(command: Command):void {
        this.onStart = command;
    }

    public setOnFinsh(command: Command):void {
        this.onFinish = command;
    }

    public doSomething(): void {
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }

        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    }

    private isCommand(object): object is Command {
        return object.execute !== undefined;
    }
}

const invork = new Invork();

invork.setOnStart(new SimpleCommand("simple command"));

const receiver = new Receiver();
invork.setOnFinsh(new ComplexCommand(receiver,"a","b"));

invork.doSomething();