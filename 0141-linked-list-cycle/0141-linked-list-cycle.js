/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    
    // use one loop and a set to track duplicate nodes in linked list
    
    const set = new Set();
   
    return myHasCycle(head, set);
};


var myHasCycle = function(head, set) {
          
    while (head) {
            
        const node = head;
        const next = head.next;
        
        if(set.has(node))
        return true;
        
        set.add(node);
            
        head = next;
    }
        
    return false;
};
    

    