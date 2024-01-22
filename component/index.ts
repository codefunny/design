abstract class Component {
    protected parent: Component | null;

    public setParent(parent: Component|null) {
        this.parent = parent;
    }

    public getParent():Component|null {
        return this.parent;
    }

    public add(component: Component):void {}

    public remove(component: Component):void {}

    public isComposite(): boolean {
        return false;
    }

    public abstract operation():string;
}

class Leaf extends Component {
    public operation(): string {
        return "Leaf"
    }
}

class Composite extends Component {
    protected children: Component[] = [];

    public add(component: Component): void {
        this.children.push(component);
        component.setParent(this);
    }
    public remove(component: Component): void {
        const index = this.children.indexOf(component);

        this.children.splice(index,1);

        component.setParent(null);
    }

    public isComposite(): boolean {
        return true;
    }

    public operation(): string {
        const results = [];

        for (const child of this.children) {
            results.push(child.operation());
        }

        return `results ${results.join("+")}`
    }
}