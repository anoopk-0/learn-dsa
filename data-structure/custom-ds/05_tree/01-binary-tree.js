/**
 * ============================================================================
 * Binary Search Tree (BST)
 * ============================================================================
 *
 * Binary Tree
 * - Each node has at most two children: left and right.
 *
 * Binary Search Tree (BST)
 * - left.value  < parent.value
 * - right.value > parent.value
 *
 * Core Operations
 * - Insert
 * - Search
 * - Traversals (DFS / BFS)
 * - Delete
 * - Min / Max
 *
 * Common Interview Problems
 * ---------------------------------------------------------------------------
 * Preorder (Root -> Left -> Right)
 *   - Path Sum
 *   - Binary Tree Paths
 *   - Serialize Tree
 *
 * Inorder (Left -> Root -> Right)
 *   - Validate BST
 *   - Kth Smallest
 *   - Sorted Traversal
 *
 * Postorder (Left -> Right -> Root)  // Bottom-up DFS
 *   - Maximum Depth
 *   - Diameter of Binary Tree
 *   - Balanced Binary Tree
 *   - Binary Tree Maximum Path Sum
 *
 * BFS (Level Order)
 *   - Level Order Traversal
 *   - Zigzag Level Order
 *   - Right Side View
 *   - Minimum Depth
 * ============================================================================
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /** Check whether tree is empty */
  isEmpty() {
    return this.root === null;
  }

  /** Internal helper for BST insertion */
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  /**
   * Insert a value into BST.
   *
   * Used:
   * - Insert into BST
   * - Build Tree
   */
  insertion(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  /**
   * Search a value in BST.
   *
   * Used:
   * - Search in BST
   */
  search(root, value) {
    if (!root) return false;

    if (root.value === value) {
      return true;
    } else if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  // ==========================================================================
  // DFS Traversals
  // ==========================================================================

  /**
   * Preorder DFS
   * Root -> Left -> Right
   *
   * Used:
   * - Path Sum
   * - Binary Tree Paths
   * - Serialize Tree
   */
  preOrder(root) {
    if (!root) return;

    console.log(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  /**
   * Inorder DFS
   * Left -> Root -> Right
   *
   * Used:
   * - Validate BST
   * - Kth Smallest
   * - Sorted Traversal
   */
  inOrder(root) {
    if (!root) return;

    this.inOrder(root.left);
    console.log(root.value);
    this.inOrder(root.right);
  }

  /**
   * Postorder DFS (Bottom-up)
   * Left -> Right -> Root
   *
   * Used:
   * - Maximum Depth
   * - Diameter
   * - Balanced Tree
   * - Maximum Path Sum
   */
  postOrder(root) {
    if (!root) return;

    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.value);
  }

  // ==========================================================================
  // BFS
  // ==========================================================================

  /**
   * Level Order Traversal (BFS)
   *
   * Used:
   * - Level Order Traversal
   * - Zigzag Traversal
   * - Right Side View
   * - Minimum Depth
   */
  levelOrder() {
    if (!this.root) return;

    const queue = [this.root];

    while (queue.length) {
      const curr = queue.shift();

      console.log(curr.value);

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }

  /**
   * Find minimum value.
   *
   * Used:
   * - Minimum in BST
   * - Delete (Inorder Successor)
   */
  min(root) {
    return root.left ? this.min(root.left) : root.value;
  }

  /**
   * Find maximum value.
   *
   * Used:
   * - Maximum in BST
   */
  max(root) {
    return root.right ? this.max(root.right) : root.value;
  }

  /**
   * Internal delete helper.
   *
   * Cases:
   * - Leaf
   * - One child
   * - Two children
   */
  deleteNode(root, value) {
    if (!root) return null;

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) return null;
      if (!root.left) return root.right;
      if (!root.right) return root.left;

      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }

    return root;
  }

  /**
   * Delete a node from BST.
   *
   * Used:
   * - Delete Node in BST
   */
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  /**
   * Height / Maximum Depth
   *
   * Bottom-up DFS
   *
   * Used:
   * - Maximum Depth
   * - Diameter
   * - Balanced Tree
   */
  findDepth(node = this.root) {
    if (!node) return 0;

    const left = this.findDepth(node.left);
    const right = this.findDepth(node.right);

    return Math.max(left, right) + 1;
  }

  /**
   * Depth of a specific node
   *
   * Top-down DFS
   *
   * Used:
   * - Find Node Level
   * - Distance Problems
   * - LCA (helper)
   */
  findDepthOfNode(value, node = this.root, depth = 0) {
    if (!node) return -1;

    if (node.value === value) return depth;

    const left = this.findDepthOfNode(value, node.left, depth + 1);
    if (left !== -1) return left;

    return this.findDepthOfNode(value, node.right, depth + 1);
  }
}
