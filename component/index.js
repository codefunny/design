"use strict";
class Component {
    parent;
    setParent(parent) {
        this.parent = parent;
    }
    getParent() {
        return this.parent;
    }
    add(component) { }
    remove(component) { }
    isComposite() {
        return false;
    }
}
class Leaf extends Component {
    operation() {
        return "Leaf";
    }
}
class Composite extends Component {
    children = [];
    add(component) {
        this.children.push(component);
        component.setParent(this);
    }
    remove(component) {
        const index = this.children.indexOf(component);
        this.children.splice(index, 1);
        component.setParent(null);
    }
    isComposite() {
        return true;
    }
    operation() {
        const results = [];
        for (const child of this.children) {
            results.push(child.operation());
        }
        return `results ${results.join("+")}`;
    }
}
