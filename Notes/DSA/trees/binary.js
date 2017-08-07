// Binary tree
// Binary search tree is a binary tree but only allows storage of nodes
// with lesser values on left side, and nodes with greater values on right

function BinarySearchTree() {

    // Tree node
    const Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    let root = null; // Root pointer

    // Helper - insert node
    const insertNode = (node, newNode) => {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                insertNode(node.right, newNode);
            }
        }
    };

    // Helper - in-order traversal
    const inOrderTraverseNode = (node, callback) => {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    };

    // Helper - pre-order traversal
    const preOrderTraverseNode = (node, callback) => {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    };

    const postOrderTraverseNode = (node, callback) => {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    };

    const minNode = (node) => {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    };

    const maxNode = (node) => {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    };

    const searchNode = (node, key) => {
        if (node === null) {
            return false;
        }

        if (key < node.key) {
            return searchNode(node.left, key);
        }
        else if (key > node.key) {
            return searchNode(node.right, key);
        }
        else {
            return true;
        }
    };

    const removeNode = (node, key) => {

        const findMinNode = (node) => {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node;
        };

        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        }
        else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        }
        
        // Key is equal to node.key
        else {  
            
            // Case 1 - a leaf node
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            // Case 2 - a node with only 1 child
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            }

            // Case 3 - a node with 2 children

            // 1. Find min node right right-hand side subtree
            const aux = findMinNode(node.right);
            // 2. Update value of node with key from step 1
            node.key = aux.key;
            // 3. Remove min node from right subtree
            // (The original node found using findMinMode)
            node.right = removeNode(node.right, aux.key);
            // Return updated node reference to its parent
            return node;
        }
    };

    this.insert = function(key) {
        
        const newNode = new Node(key);

        if (root === null) {
            root = newNode;
        }
        else {
            insertNode(root, newNode);
        }
    };

    this.search = function(key) {
        return searchNode(root, key);
    };

    // In-order traversal - in ascending order
    this.inOrderTraverse = function(callback) {
        // Callback function to call on each visited node (Visitor pattern)
        inOrderTraverseNode(root, callback);
    };

    // Pre-order traversal - visits the node prior to its descendants
    this.preOrderTraverse = function(callback) {
        preOrderTraverseNode(root, callback);
    };

    // Post-order traversal - vists node after vising descendants
    // Ex: Computing the space used by a file in a directory and sub-dirs
    this.postOrderTraverse = function(callback) {
        postOrderTraverseNode(root, callback);
    }

    // Minimum value/key in tree
    this.min = function() {
        return minNode(root);
    };

    // Maximum value/key in tree
    this.max = function() {
        return maxNode(root);
    };

    this.remove = function(key) {
        root = removeNode(root, key);
    };
}

const tree = new BinarySearchTree();

tree.insert(11);
tree.insert(8);
tree.insert(7);
tree.insert(6);
tree.insert(12);
tree.insert(13);
tree.insert(3);
tree.insert(10);
tree.insert(9);
tree.insert(18);
tree.insert(15);
tree.insert(20);

console.log("in-order traversal");
tree.inOrderTraverse((value) => console.log(value));
console.log("pre-order traversal");
tree.preOrderTraverse(v => console.log(v));
console.log("post-order traversal");
tree.postOrderTraverse(v => console.log(v));
