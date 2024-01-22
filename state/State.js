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
var ActionType;
(function (ActionType) {
    ActionType[ActionType["Start"] = 0] = "Start";
    ActionType[ActionType["Pause"] = 1] = "Pause";
    ActionType[ActionType["Stop"] = 2] = "Stop";
    ActionType[ActionType["Finish"] = 3] = "Finish";
})(ActionType || (ActionType = {}));
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.register = function (observer) {
        this.observers.push(observer);
    };
    Subject.prototype.unregister = function (observer) {
        this.observers = this.observers.filter(function (item) { return item !== observer; });
    };
    Subject.prototype.notify = function (taskId) {
        this.observers.forEach(function (observer) {
            observer.response(taskId);
        });
    };
    return Subject;
}());
var Task = /** @class */ (function () {
    function Task(taskId) {
        this._state = new TaskInit();
        this.taskId = taskId;
    }
    Object.defineProperty(Task.prototype, "state", {
        set: function (state) {
            this._state = state;
        },
        enumerable: false,
        configurable: true
    });
    Task.prototype.updateState = function (actionType) {
        this._state.update(this, actionType);
    };
    return Task;
}());
var TaskInit = /** @class */ (function () {
    function TaskInit() {
    }
    TaskInit.prototype.update = function (task, actionType) {
        if (actionType === ActionType.Start) {
            var taskGoint = new TaskGoint();
            taskGoint.register(new ActivityObserver());
            taskGoint.register(new TaskManagerObserver());
            task.state = taskGoint;
        }
    };
    return TaskInit;
}());
var TaskGoint = /** @class */ (function (_super) {
    __extends(TaskGoint, _super);
    function TaskGoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskGoint.prototype.update = function (task, actionType) {
        if (actionType === ActionType.Stop) {
            var taskPause = new TaskPause();
            task.state = taskPause;
        }
        else if (actionType === ActionType.Finish) {
            task.state = new TaskFinish();
            this.notify(task.taskId);
        }
    };
    return TaskGoint;
}(Subject));
var TaskPause = /** @class */ (function (_super) {
    __extends(TaskPause, _super);
    function TaskPause() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskPause.prototype.update = function (task, actionType) {
        if (actionType === ActionType.Start) {
            task.state = new TaskGoint();
        }
    };
    return TaskPause;
}(Subject));
var TaskFinish = /** @class */ (function () {
    function TaskFinish() {
    }
    TaskFinish.prototype.update = function (task, actionType) {
    };
    return TaskFinish;
}());
var ActivityObserver = /** @class */ (function () {
    function ActivityObserver() {
    }
    ActivityObserver.prototype.response = function (taskId) {
        console.log("ActivityObserver response taskId: ".concat(taskId));
    };
    return ActivityObserver;
}());
var TaskManagerObserver = /** @class */ (function () {
    function TaskManagerObserver() {
    }
    TaskManagerObserver.prototype.response = function (taskId) {
        console.log("TaskManagerObserver response taskId: ".concat(taskId));
    };
    return TaskManagerObserver;
}());
var task = new Task(1);
task.updateState(ActionType.Start);
task.updateState(ActionType.Finish);
task.updateState(ActionType.Start);
task.updateState(ActionType.Finish);
