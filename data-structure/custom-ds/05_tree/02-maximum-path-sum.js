/**
 * Binary Tree Maximum Path Sum
 *
 * Path:
 * - Can start and end at any node.
 * - Must be connected.
 * - Cannot visit a node more than once.
 *
 * Time : O(n)
 * Space: O(h)
 *
 *        -10
      /   \
     9     20
          /  \
        15    7
 */
function maxPathSum(root) {
  let maxSum = -Infinity;

  function dfs(node) {
    if (!node) return 0;

    // Maximum gain from left/right subtree
    const leftGain = Math.max(dfs(node.left), 0);
    const rightGain = Math.max(dfs(node.right), 0);

    // Best path passing through current node
    const currentPath = node.value + leftGain + rightGain;

    // Update global answer
    maxSum = Math.max(maxSum, currentPath);

    // Return best single path to parent
    return node.value + Math.max(leftGain, rightGain);
  }

  dfs(root);

  return maxSum;
}
