/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    
    const map = new Map();
    const node = head;
    const p = new Program(head, node, map);
    
    return p.copy();
};


class Program {
    
    constructor(head, node, hashmap) {
        this.head = head;
        this.node = node;
        this.hashmap = hashmap;
    }
    
    getNodeFromMap(node) {
        if (node === null) 
            return null;
        
        const oldNode = node;
        const newNode = new Node(oldNode.val);
        
        if (this.hashmap.get(oldNode) == null) {
            this.hashmap.set(oldNode, newNode);
            return this.hashmap.get(oldNode);
        } else {
            return this.hashmap.get(oldNode);
        }
    }
    
    copy() {
        
        if (this.node === null) {
            return null;
        }
        
        let newNode = new Node(this.node.val);
        
        this.hashmap.set(this.node, newNode);
        
        while (this.node != null) {
            
            newNode.random = this.getNodeFromMap(this.node?.random);
            
            newNode.next = this.getNodeFromMap(this.node.next);
            
            this.node = this.node.next;
            newNode = newNode.next;
        }
        
        return this.hashmap.get(this.head);
    }
    
    
}