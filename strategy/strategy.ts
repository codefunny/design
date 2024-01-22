interface Strategy {
    execute(): void;
}

class StrategyContext {
    private static registerMap: Map<string, Strategy> = new Map<string, Strategy>();

    public static register(name: string, strategy: Strategy): void {
        this.registerMap.set(name, strategy);
    }

    public static getStrategy(name: string): Strategy | undefined {
        return this.registerMap.get(name);
    }
}

abstract class AbstractStrategy implements Strategy {

    public register(name?: string): void {
        const key = name ?? this.constructor.name;
        StrategyContext.register(key, this);
    }

    public abstract execute(): void;
}

class StrategyA extends AbstractStrategy {

    private static instance: StrategyA = new StrategyA();

    constructor() {
        super();
        this.register();
    }

    public static getInstance(): StrategyA {
        return this.instance;
    }

    public execute(): void {
        console.log('StrategyA execute');
    }
}

class StrategyB extends AbstractStrategy {

    private static instance: StrategyB = new StrategyB();

    constructor() {
        super();
        this.register();
    }

    public static getInstance(): StrategyB {
        return this.instance;
    }

    public execute(): void {
        console.log('StrategyB execute');
    }
}

class TestStrategy {
    public static test(): void {
        const strategyA = StrategyContext.getStrategy('StrategyA');
        strategyA?.execute();

        const strategyB = StrategyContext.getStrategy('StrategyB');
        strategyB?.execute();
    }
}

TestStrategy.test();