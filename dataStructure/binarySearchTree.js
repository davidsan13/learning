// Depth first Search

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = null;
  }
}

class bst {
  constructor() {
    this.root = null;
  }
    insert(data) {
      let newNode = new Node(data);
      if(this.root === null) {
        this.root = newNode
      } else {
        this.insertNode(this.root, newNode);
      }
    };

    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null)
          node.left = newNode;

        else
          this.insertNode(node.left, newNode);
      }
      else {
        if (node.right === null) {
          node.right = newNode;
        }

        else
          this.insertNode(node.right, newNode);
      }
    };

    search(root, key){
      if(root == null || root.value == key) {
        return root;
      }

      if(root.value < key){
        return this.search(root.right, key)
      }else {
        return this.search(root.left, key)
      }
    };

    getRootNode() {
      return this.root
    }

    countNode(root) {
      if(root == null)
        return 0
      
      return 1 + this.countNode(root.left) + this.countNode(root.right)
    }

    getMax(root) {
      if(root.right === null)
        return root
      return this.getMax(root.right)
    };

    findHeight(root) {
      if (root === null)
        return -1

      let leftHeight = this.findHeight(root.left)
      let rightHeight = this.findHeight(root.right)
      root.height = Math.max(leftHeight, rightHeight) + 1;
      return Math.max(leftHeight, rightHeight) + 1
    };
  }
// }

let p1 = new bst();

p1.insert(4)
p1.insert(3)
p1.insert(8)
p1.insert(6)
p1.insert(7)
// p1.insert(10)
// p1.insert(15)
// p1.insert(20)
let root = p1.getRootNode()
let root2 = p1.search(root, 8)
console.log(p1.findHeight(root))
console.log(root)

