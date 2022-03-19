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
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    //2 array, queue, result
    let queue = [],
      result = [];
    //start from root, push into queue
    queue.push(this.root);

    //while queue not empty
    while (queue.length > 0) {
      //get currNode from queue head
      let currNode = queue.shift();
      //push into result []
      result.push(currNode.value);

      //push L into result if L != null
      if (currNode.left) queue.push(currNode.left);
      //push R into result if R != null
      if (currNode.right) queue.push(currNode.right);
    }

    console.log(...result);
    return result;
  }

  BFS2() {
    let queue = [this.root];
    let str = "";

    while (queue.length > 0) {
      let node = queue.shift();
      str += node.value + ", ";

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    console.log(str);
    return str;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.BFS();
tree.BFS2();
