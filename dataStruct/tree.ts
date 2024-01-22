class TreeNode<T> {
    element: T;
    left: TreeNode<T> | undefined;
    right: TreeNode<T> | undefined;

    constructor(element: T) {
        this.element = element;
        this.left = undefined;
        this.right = undefined;
    }
}