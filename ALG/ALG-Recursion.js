function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var helperFn = function (node, min, max) {
  //base: return true if null
  if (node === null) return true;

  //base: out of range, return false
  if ((min !== null && node.val <= min) || (max !== null && node.val >= max))
    return false;

  //continue checking with new range
  return (
    helperFn(node.left, min, node.val) && helperFn(node.right, node.val, max)
  );
  //left, min, node.val
  //right, node.val, max
};

var isValidBST = function (root) {
  return helperFn(root, null, null);
};
