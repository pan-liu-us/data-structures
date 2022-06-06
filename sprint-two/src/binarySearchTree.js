var BinarySearchTree = function(value) {
  var tree = Object.create(binaryTreeMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(target) {
  var newTree = BinarySearchTree(target);
  if (this.value < target) {
    if (this.right === null) {
      this.right = newTree;
    } else {
      (this.right).insert(target);
    }
  } else {
    if (this.left === null) {
      this.left = newTree;
    } else {
      (this.left).insert(target);
    }
  }
};

binaryTreeMethods.contains = function(target) {
  var doesContain = false;

  if (this.value === target) {
    doesContain = true;
  } else if (this.value < target && this.right !== null) {
    doesContain = this.right.contains(target);
  } else if (this.value > target && this.left !== null) {
    doesContain = this.left.contains(target);
  }

  return doesContain;

};

binaryTreeMethods.depthFirstLog = function(callBack) {
  callBack(this.value);

  if (this.left) {
    this.left.depthFirstLog(callBack);
  }

  if (this.right) {
    this.right.depthFirstLog(callBack);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
