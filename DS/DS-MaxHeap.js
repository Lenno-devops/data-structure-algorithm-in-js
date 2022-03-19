class MaxHeap {
  constructor() {
    // this is where the array that represents our heap will be stored
    this.values = []; //[parent, left, right, parent2, left2, right2]
  }
  parent(index) {
    return Math.floor((index - 1) / 2); //index 3 or 4 elements' parent = index 2
  }

  leftChild(index) {
    return index * 2 + 1; //parent node's left child
  }

  rightChild(index) {
    return index * 2 + 2; //parent node's right child
  }

  peek() {
    return this.values[0];
  }

  // returns true if index is of a node that has no children
  isLeaf(index) {
    return (
      index >= Math.floor(this.values.length / 2) && //tree charactistic, leaf nodes start on 1/2 index
      index <= this.values.length - 1
    );
  }
  // swap using ES6 destructuring
  swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ];
  }

  add(element) {
    this.values.push(element);
    // move element up until it's in the correct position
    this.heapifyUp(this.values.length - 1);
  }

  heapifyUp(index) {
    let currentIndex = index;
    let parentIndex = this.parent(currentIndex);

    // while we haven't reached the root node and the current element is greater than its parent node
    while (
      currentIndex > 0 &&
      this.values[currentIndex] > this.values[parentIndex]
    ) {
      // keep swapping if needed
      this.swap(currentIndex, parentIndex);
      // move up to further check
      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
    }
  }
  // removes and returns max element
  extractMax() {
    if (this.values.length < 1) return "heap is empty";

    // get max and last element
    const max = this.values[0];
    const end = this.values.pop();

    // put right est node (end) to first node
    this.values[0] = end;
    // heapify down until element is back in its correct position
    this.heapifyDown(0);

    // return the max
    return max;
  }
  heapifyDown(index) {
    // if the node at index has children
    if (!this.isLeaf(index)) {
      // get indices of children
      let leftChildIndex = this.leftChild(index);
      let rightChildIndex = this.rightChild(index);

      //swap parent with max(left / right) node

      // start out largest index at parent index
      let largestIndex = index;

      // if the left child > parent
      if (this.values[leftChildIndex] > this.values[largestIndex]) {
        // reassign largest index to left child index
        largestIndex = leftChildIndex;
      }

      // if the right child > element at largest index (either parent or left child)
      if (this.values[rightChildIndex] >= this.values[largestIndex]) {
        // reassign largest index to right child index
        largestIndex = rightChildIndex;
      }

      // if the largest index is not the parent index
      if (largestIndex !== index) {
        // swap
        this.swap(index, largestIndex);
        // recursively move down the heap
        this.heapifyDown(largestIndex);
      }
    }
  }

  buildHeap(array) {
    this.values = array;
    // since leaves start at floor(nodes / 2) index, we work from the leaves up the heap
    for (let i = Math.floor(this.values.length / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  print() {
    let i = 0;
    while (!this.isLeaf(i)) {
      console.log("PARENT:", this.values[i]);
      console.log("LEFT CHILD:", this.values[this.leftChild(i)]);
      console.log("RIGHT CHILD:", this.values[this.rightChild(i)]);
      i++;
    }
  }
}
