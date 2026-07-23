//  A → B → D → E → C → F → G

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.rigth = null;
  }
}

class BTS {
  constructor() {
    this.root = null;
  }

  insertNode(root, node) {
    if (root.value > node.value) {
      if (!root.left) {
        root.left = node;
      } else {
        this.insertNode(node.left, node);
      }
    } else {
      if (!root.rigth) {
        root.rigth = node;
      } else {
        this.insertNode(node.rigth, node);
      }
    }
  }

  insertion(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
}

const bts = BTS();

bst.insertion(10);
bst.insertion(5);
bst.insertion(15);
bst.insertion(3);
bst.insertion(7);
bst.insertion(12);
bst.insertion(18);
