/* Adelson-Velskii and Landi's tree (AVL tree)
   Aka. self-balancing tree

    - Height of the left or right subtree of any node (and any level)
    differs by 1 at most
    - The tree will try to become a complete tree whenever possible while
    adding or removing a node

    - Inserting and removing works the same way as in BST, but
    - we will need to verify its balancing factor first

    - Balance factor = (height right-side subtree) - (height left-side subtree)
*/

function AVLTree() {

    // Tree node
    const Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    const heightNode = (node) => {
      if (node === null) {
        return -1;
      }
      else {
        return Math.max(
          heightNode(node.left), heightNode(node.right)
        ) + 1;
      }
    };

    // Single rotation to the left
    const rotationRR = (node) => {
      const tmp = node.right;
      node.right = tmp.left;
      tmp.left = node;
      return tmp;
    };

    // Single rotation to the right
    const rotationLL = (node) => {
      const tmp = node.left;
      node.left = tmp.right;
      tmp.right = node;
      return tmp;
    };

    // Double rotation to the right
    const rotationLR = (node) => {
      node.left = rotationRR(node.left);
      return rotationLL(node);
    };

    // Double rotation to the left
    const rotationRL = (node) => {
      node.right = rotationLL(node.left);
      return rotationRR(node);
    };

    let root = null; // Root pointer

    // Helper - insert node 
    const insertNode = (node, key) => {
        if (node === null) {
          node = new Node(key);
        } 
        else if (key < node.key) {
          node.left = insertNode(node.left, key); 

          if (node.left !== null) {
            if ((heightNode(node.left) - heightNode(node.right)) > 1) {
              // Do rotations
              if (key < node.left.key) {
                node = rotationLL(node);
              }
              else {
                node = rotationLR(node);
              }
            } 
          }
        }
        else if (key > node.key) {
          node.right = insertNode(node.right, key);

          if (node.right !== null) {
            if ((heightNode(node.right) - heightNode(node.left)) > 1) {
              // Do rotations
              if (key > node.right.key) {
                node = rotationRR(node);
              }
              else {
                node = rotationRL(node);
              }
            }   
          }
        }
        return node;
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
