"use strict";
class SimpleCommand {
    payload;
    constructor(payload) {
        this.payload = payload;
    }
    execute() {
        console.log(`simple command ${this.payload}`);
    }
}
class Receiver {
    doSomething(a) {
        console.log(`Receiver work on ${a}`);
    }
}
class ComplexCommand {
    receiver;
    a;
    b;
    constructor(receiver, a, b) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }
    execute() {
        this.receiver.doSomething(this.a + this.b);
    }
}
class Invork {
    onStart;
    onFinish;
    setOnStart(command) {
        this.onStart = command;
    }
    setOnFinsh(command) {
        this.onFinish = command;
    }
    doSomething() {
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }
        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    }
    isCommand(object) {
        return object.execute !== undefined;
    }
}
const invork = new Invork();
invork.setOnStart(new SimpleCommand("simple command"));
const receiver = new Receiver();
invork.setOnFinsh(new ComplexCommand(receiver, "a", "b"));
invork.doSomething();
