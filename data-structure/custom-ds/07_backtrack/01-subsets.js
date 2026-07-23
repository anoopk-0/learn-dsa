/**
 * ============================================
 * BACKTRACKING
 * ============================================
 *
 * Backtracking = Recursion + Undo
 *
 * Think:
 *
 * Choose
 * ↓
 * Explore
 * ↓
 * Undo
 * ↓
 * Try another choice
 *
 * Used for:
 * - Subsets
 * - Permutations
 * - Combination Sum
 * - N Queens
 * - Sudoku
 * - Word Search
 *
 * Interview Hint:
 * Whenever you hear
 *
 * "Generate ALL..."
 * "Find ALL..."
 * "Return EVERY..."
 *
 * Think:
 *
 * BACKTRACKING
 *
 * ============================================
 * Example
 * ============================================
 *
 * nums = [1,2]
 *
 * Result
 *
 * []
 * [1]
 * [2]
 * [1,2]
 *
 * Decision Tree
 *
 *                []
 *               /   \
 *            Take1  Skip1
 *            /         \
 *        [1]           []
 *       /   \         /   \
 * Take2 Skip2    Take2 Skip2
 *
 * [1,2] [1]      [2]    []
 *
 * ============================================
 * Time Complexity
 * ============================================
 *
 * O(2^n)
 *
 * Every element has TWO choices.
 *
 * Take
 * or
 * Don't Take
 *
 * ============================================
 * Space Complexity
 * ============================================
 *
 * O(n)
 *
 * Because recursion depth
 * is at most n.
 */

function subsets(nums) {
  // Stores every subset
  const result = [];

  /**
   * current
   *
   * Current subset being built.
   *
   * Example
   *
   * []
   * [1]
   * [1,2]
   */
  const current = [];

  /**
   * index
   *
   * Current position
   * in the array.
   */
  function backtrack(index) {
    /**
     * ========================
     * BASE CASE
     * ========================
     *
     * We reached the end.
     *
     * Save current subset.
     */
    if (index === nums.length) {
      /**
       * IMPORTANT
       *
       * Copy the array.
       *
       * Never push current directly.
       */
      result.push([...current]);

      return;
    }

    /**
     * ==================================
     * CHOICE 1
     * Take current element
     * ==================================
     */

    current.push(nums[index]);

    /**
     * Explore further.
     */
    backtrack(index + 1);

    /**
     * ==================================
     * UNDO
     * ==================================
     *
     * Remove last choice.
     *
     * This is THE MOST IMPORTANT STEP.
     */
    current.pop();

    /**
     * ==================================
     * CHOICE 2
     * Don't take current element
     * ==================================
     */

    backtrack(index + 1);
  }

  /**
   * Start recursion.
   */
  backtrack(0);

  return result;
}
