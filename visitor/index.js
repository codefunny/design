"use strict";
class ConcreteComponentA {
    accept(visitor) {
        visitor.visitComponentA(this);
    }
    doSomething() {
        console.log('do something');
    }
}
class ConcreteComponentB {
    accept(visitor) {
        visitor.visitComponentB(this);
    }
    doSomethingB() {
        console.log('do somethingB');
    }
}
class ConcreteVisitorA {
    visitComponentA(element) {
        element.doSomething();
    }
    visitComponentB(element) {
        element.doSomethingB();
    }
}
const component1 = new ConcreteComponentA();
const visitor = new ConcreteVisitorA();
component1.accept(visitor);
