enum ActionType {
    Start,
    Pause,
    Stop,
    Finish
}

interface Observer {
    response(taskId: number): void;
}

abstract class Subject {
    private observers: Observer[] = [];

    public register(observer: Observer): void {
        this.observers.push(observer);
    }

    public unregister(observer: Observer): void {
        this.observers = this.observers.filter(item => item !== observer);
    }

    public notify(taskId: number): void {
        this.observers.forEach(observer => {
            observer.response(taskId);
        });
    }
}

class Task {
    taskId: number;

    private _state: State = new TaskInit();

    constructor(taskId: number) {
        this.taskId = taskId;
    }

    set state(state: State) {
        this._state = state;
    }

    updateState(actionType: ActionType): void {
        this._state.update(this, actionType);
    }
}

interface State {
    update(task: Task, actionType: ActionType):void;
}

class TaskInit implements State {
    update(task: Task, actionType: ActionType): void {
        if(actionType === ActionType.Start){
            const taskGoint = new TaskGoint();
            taskGoint.register(new ActivityObserver());
            taskGoint.register(new TaskManagerObserver());
            task.state = taskGoint;
        }
    }
}

class TaskGoint extends Subject implements State {

    update(task: Task, actionType: ActionType): void {
        if(actionType === ActionType.Stop){
            const taskPause = new TaskPause();
            task.state = taskPause;
        } else if (actionType === ActionType.Finish) {
            task.state = new TaskFinish();
            this.notify(task.taskId);
        }
    }
}

class TaskPause extends Subject implements State {
    update(task: Task, actionType: ActionType): void {
        if(actionType === ActionType.Start){
            task.state = new TaskGoint();
        }
    }
}

class TaskFinish implements State {
    update(task: Task, actionType: ActionType): void {
       
    }
}

class ActivityObserver implements Observer {
    response(taskId: number): void {
        console.log(`ActivityObserver response taskId: ${taskId}`);
    }
}

class TaskManagerObserver implements Observer {
    response(taskId: number): void {
        console.log(`TaskManagerObserver response taskId: ${taskId}`);
    }
}

const task = new Task(1);
task.updateState(ActionType.Start);
task.updateState(ActionType.Finish);
task.updateState(ActionType.Start);
task.updateState(ActionType.Finish);
