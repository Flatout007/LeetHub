/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    // create new list, traverse linked list,
    // if node doesn't equal value to delete, 
    // append node to new list.
    
    const newList = new ListNode();
    const p = new Program(head, val, newList);
    
    return p.remove();
};


class Program {
    
    constructor(head, val, newList) {
        
        this.head = head;
        this.val = val;
        this.newList = newList;
    }
    
   
    remove() {
        
        let a = this.head;
        let newList = this.newList;
        
        while (a != null) {
            
            const value = a.val;
            
            if (value !== this.val) {
                
                const node = new ListNode();
                
                this.newList.next = node;
                this.newList = node;
                
                this.newList.val = value;
            }
                
            a = a.next;
        }
            
        return newList.next;
    }
}