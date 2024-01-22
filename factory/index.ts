interface AbstractFactory {
    createProductA() : AbstractProductA;

    createProductB() : AbstractProductB;
}

interface AbstractProductA {
    usefulFunctionA(): string;
}

interface AbstractProductB{
    usefulFunctionB(): string;

    anotherUsefulFunctionB(collaborator: AbstractProductA):string;
}

class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}

class ConcreteProductA1 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'the result of product A1';
    }
}

class ConcreteProductA2 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'the result of product A2';
    }
}

class ConcreteProductB1 implements AbstractProductB {
    public usefulFunctionB(): string {
        return 'The result of product B1';
    }

    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();

        return `The result of B1 collaborating is ${result}`;
    }
}

class ConcreteProductB2 implements AbstractProductB {
    public usefulFunctionB(): string {
        return 'The result of product B2';
    }

    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();

        return `The result of B2 collaborating is ${result}`;
    }
}

function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}

clientCode(new ConcreteFactory1());


clientCode(new ConcreteFactory2());
