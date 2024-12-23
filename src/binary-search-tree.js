const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    function addItem(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addItem(node.left, data);
      } else {
        node.right = addItem(node.right, data);
      }
      return node;
    }
    this.rootNode = addItem(this.rootNode, data);
  }

  has(data) {
    function searchItem(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return searchItem(node.left, data);
      } else {
        return searchItem(node.right, data);
      }
    }
    return searchItem(this.rootNode, data);
  }

  find(data) {
    function findItem(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return findItem(node.left, data);
      } else {
        return findItem(node.right, data);
      }
    }
    return findItem(this.rootNode, data);
  }

  remove(data) {
    function removeItem(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeItem(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeItem(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        let maxLeftNode = node.left;
        while (maxLeftNode.right) {
          maxLeftNode = maxLeftNode.right;
        }
        node.data = maxLeftNode.data;
        node.left = removeItem(node.left, maxLeftNode.data);
        return node;
      }
    }
    this.rootNode = removeItem(this.rootNode, data);
  }

  min() {
    if (!this.rootNode) {
      return null;
    }
    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }
    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};