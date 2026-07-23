/**
 * ==========================
 * CIRCULAR QUEUE (FIFO)
 * ==========================
 *
 * Queue follows FIFO (First In First Out).
 *
 * Unlike a normal queue, a circular queue reuses empty spaces.
 *
 * Example:
 * Capacity = 5
 *
 * Index:
 * 0   1   2   3   4
 *
 * After inserting:
 * [10,20,30,40,50]
 *
 * Remove 10 and 20
 *
 * [_, _,30,40,50]
 *
 * In a NORMAL queue:
 * ❌ You cannot insert more because rear is already at index 4.
 *
 * In a CIRCULAR queue:
 * ✅ rear wraps to index 0 and inserts there.
 *
 * Formula:
 * rear = (rear + 1) % capacity
 * front = (front + 1) % capacity
 *
 * Why % ?
 * It wraps the pointer back to index 0.
 *
 * 4 -> 0 -> 1 -> 2 -> ...
 */

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;

    // Number of elements currently in queue
    this.currentLength = 0;

    // First element index
    this.front = -1;

    // Last element index
    this.rear = -1;
  }

  /**
   * Queue is empty?
   */
  isEmpty() {
    return this.currentLength === 0;
  }

  /**
   * Queue is full?
   */
  isFull() {
    return this.currentLength === this.capacity;
  }

  /*
   * Time Complexity : O(1)
   */
  enqueue(element) {
    if (this.isFull()) {
      console.log('Queue Overflow');
      return;
    }

    if (this.isEmpty()) {
      this.front = 0;
    }

    /**
     * Move rear forward.
     *
     * % makes it circular.
     */
    this.rear = (this.rear + 1) % this.capacity;

    this.items[this.rear] = element;

    this.currentLength++;
  }

  /**
   * Remove front element
   *
   * Time Complexity : O(1)
   */
  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue Underflow');
      return null;
    }

    const item = this.items[this.front];

    // Optional (for visualization)
    this.items[this.front] = null;

    /**
     * Only one element?
     *
     * Reset queue.
     */
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      /**
       * Move front forward.
       */
      this.front = (this.front + 1) % this.capacity;
    }

    this.currentLength--;

    return item;
  }

  /**
   * Return first element
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[this.front];
  }

  /**
   * Print queue
   */
  print() {
    if (this.isEmpty()) {
      console.log('Queue Empty');
      return;
    }

    let result = '';
    let i = this.front;

    while (true) {
      result += this.items[i] + ' ';

      if (i === this.rear) break;

      i = (i + 1) % this.capacity;
    }

    console.log(result);
  }
}
