
# Given a positive integer n, write a function that returns the number of 
# set bits
#  in its binary representation (also known as the Hamming weight).

import math

class Solution(object):
    def hammingWeight(self, n):
        ones = 0
        while(n != 0):
            if(n%2 == 1):
                ones+=1
            n= math.floor(n/2) 
        return ones

sol = Solution()

n = 11

sol = sol.hammingWeight(n)
print(sol)