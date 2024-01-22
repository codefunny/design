var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var StrategyContext = /** @class */ (function () {
    function StrategyContext() {
    }
    StrategyContext.register = function (name, strategy) {
        this.registerMap.set(name, strategy);
    };
    StrategyContext.getStrategy = function (name) {
        return this.registerMap.get(name);
    };
    StrategyContext.registerMap = new Map();
    return StrategyContext;
}());
var AbstractStrategy = /** @class */ (function () {
    function AbstractStrategy() {
    }
    AbstractStrategy.prototype.register = function (name) {
        var key = name !== null && name !== void 0 ? name : this.constructor.name;
        StrategyContext.register(key, this);
    };
    return AbstractStrategy;
}());
var StrategyA = /** @class */ (function (_super) {
    __extends(StrategyA, _super);
    function StrategyA() {
        var _this = _super.call(this) || this;
        _this.register();
        return _this;
    }
    StrategyA.getInstance = function () {
        return this.instance;
    };
    StrategyA.prototype.execute = function () {
        console.log('StrategyA execute');
    };
    StrategyA.instance = new StrategyA();
    return StrategyA;
}(AbstractStrategy));
var StrategyB = /** @class */ (function (_super) {
    __extends(StrategyB, _super);
    function StrategyB() {
        var _this = _super.call(this) || this;
        _this.register();
        return _this;
    }
    StrategyB.getInstance = function () {
        return this.instance;
    };
    StrategyB.prototype.execute = function () {
        console.log('StrategyB execute');
    };
    StrategyB.instance = new StrategyB();
    return StrategyB;
}(AbstractStrategy));
var TestStrategy = /** @class */ (function () {
    function TestStrategy() {
    }
    TestStrategy.test = function () {
        var strategyA = StrategyContext.getStrategy('StrategyA');
        strategyA === null || strategyA === void 0 ? void 0 : strategyA.execute();
        var strategyB = StrategyContext.getStrategy('StrategyB');
        strategyB === null || strategyB === void 0 ? void 0 : strategyB.execute();
    };
    return TestStrategy;
}());
TestStrategy.test();
