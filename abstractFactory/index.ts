abstract class Creator {
    public abstract factoryMethod(): Product;
    public someOperation() : string {
        const product = this.factoryMethod();

        return `result operation ${product.operation()}`
    }
}

interface Product {
    operation(): string;
}

class ConcreteProduct1 implements Product {
    public operation(): string {
        return "result of ConcreteProduct1";
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return "result of ConcreteProduct2";
    }
}

class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}