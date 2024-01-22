interface ComponentA {
    accept(visitor: Visitor):void;
}

interface Visitor {
    visitComponentA(element: ConcreteComponentA):void;
    visitComponentB(element: ConcreteComponentB):void;
}

class ConcreteComponentA implements ComponentA {
    public accept(visitor: Visitor): void {
        visitor.visitComponentA(this);
    }

    public doSomething():void {
        console.log('do something');
    }
}

class ConcreteComponentB implements ComponentA {
    public accept(visitor: Visitor): void {
        visitor.visitComponentB(this);
    }

    public doSomethingB():void {
        console.log('do somethingB');
    }
}

class ConcreteVisitorA implements Visitor {
    public visitComponentA(element: ConcreteComponentA): void {
        element.doSomething();
    }
    public visitComponentB(element: ConcreteComponentB): void {
        element.doSomethingB();
    }
}

const component1 = new ConcreteComponentA();

const visitor = new ConcreteVisitorA();
component1.accept(visitor);