/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    // use two pointers and traverse both lists simultaneously and use the merge 
    // technique to merge lists a and b 
    
    const newList = new ListNode();
    const p = new Program(list1, list2, newList);
    
    return p.merge();
};

class Program {
    
    constructor(list1, list2, newList) {
        this.a = list1;
        this.b = list2;
        this.newList = newList;
    }
    
    merge() {
        
        let a = this.a;
        let b = this.b;
        const head = this.newList;
    
        while (a != null && b != null) {
            
            const valueA = a.val;
            const valueB = b.val;
            const next = new ListNode();
            const nextB = b.next;
            const nextA = a.next;
            
            this.newList.next = next;
            this.newList = next;
            
            if (valueA < valueB) {
                this.newList.val = valueA;
                a = nextA;
            } else {
                this.newList.val = valueB;
                b = nextB;
            }
       }
        
        while (a != null) {
            
            const next = new ListNode();
            
            this.newList.next = next;
            this.newList = next;
            
            this.newList.val = a.val;
            
            a = a.next;
        }
        
        while (b != null) {
            
            const next = new ListNode();
            
            this.newList.next = next;
            this.newList = next;
            
            this.newList.val = b.val;
            
            b = b.next;
        }
        
        return head.next;
     }
}