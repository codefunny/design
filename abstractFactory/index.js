"use strict";
class Creator {
    someOperation() {
        const product = this.factoryMethod();
        return `result operation ${product.operation()}`;
    }
}
class ConcreteProduct1 {
    operation() {
        return "result of ConcreteProduct1";
    }
}
class ConcreteProduct2 {
    operation() {
        return "result of ConcreteProduct2";
    }
}
class ConcreteCreator1 extends Creator {
    factoryMethod() {
        return new ConcreteProduct1();
    }
}
class ConcreteCreator2 extends Creator {
    factoryMethod() {
        return new ConcreteProduct2();
    }
}
