
# Given the head of a singly linked list, return true if it is a 
import sys
import os

module_path = os.path.abspath('./../0-Collections')
sys.path.append(module_path)

from python_collections import ListNode, create_linked_list, print_linked_list
import math

class Solution:
    def isPalindrome(self, head) -> bool:
        n = self.getLinkedListLen(head)
        stack = []
        for i in range(math.floor(n/2)):
            stack.append(head.val)
            head = head.next
        if(n%2==1):
            head = head.next
        for i in range(math.floor(n/2)):
            if(stack.pop() != head.val):
                return False
            head = head.next
        
        return len(stack) == 0

    def getLinkedListLen(self, head):
        n = 1
        while(head.next):
            head = head.next
            n+=1
        return n

sol = Solution()

dummy_list = create_linked_list([1, 2, 3, 2, 1])

res = sol.isPalindrome(dummy_list)

print("Result:", res)