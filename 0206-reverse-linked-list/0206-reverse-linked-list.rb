# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}
def reverse_list(head)
    
    # use three adjacent pointers to traverse list, 
    # connect middle adjacent node's next property to the left adjacent node while
    # using the right adjacent pointer to ensure links stay connected. 
 
    return head if not head
    
    right = head.next
    mid = head
    left = nil
    
    until right == nil do
        mid.next = left
        left = mid
        mid = right
        right = right.next 
    end
    
    # the right most adjacent pointer will be nil before done reversing
    # this could be replaced during the loop, but I think this is more clean.
    mid.next = left
    left = mid
    
    left
end