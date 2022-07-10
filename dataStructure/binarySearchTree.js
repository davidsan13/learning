// Depth first Search

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
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
      if(root == null || root.value == key)
        return root;

      if(root.value > key){
        return(root.right, key)
      }else {
        return(root.left, key)
      }
    };
  }
// }

let p1 = new bst();
console.log(p1);
p1.insert(4)
p1.insert(3)
p1.insert(8)
console.log(p1)

console.log(p1.search(4, 8));
