"use strict";
class ConcreteFactory1 {
    createProductA() {
        return new ConcreteProductA1();
    }
    createProductB() {
        return new ConcreteProductB1();
    }
}
class ConcreteFactory2 {
    createProductA() {
        return new ConcreteProductA2();
    }
    createProductB() {
        return new ConcreteProductB2();
    }
}
class ConcreteProductA1 {
    usefulFunctionA() {
        return 'the result of product A1';
    }
}
class ConcreteProductA2 {
    usefulFunctionA() {
        return 'the result of product A2';
    }
}
class ConcreteProductB1 {
    usefulFunctionB() {
        return 'The result of product B1';
    }
    anotherUsefulFunctionB(collaborator) {
        const result = collaborator.usefulFunctionA();
        return `The result of B1 collaborating is ${result}`;
    }
}
class ConcreteProductB2 {
    usefulFunctionB() {
        return 'The result of product B2';
    }
    anotherUsefulFunctionB(collaborator) {
        const result = collaborator.usefulFunctionA();
        return `The result of B2 collaborating is ${result}`;
    }
}
function clientCode(factory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}
clientCode(new ConcreteFactory1());
clientCode(new ConcreteFactory2());
