
class Solution(object):
    def removeElement(self, nums, val):
        while(val in nums):
            nums.remove(val)
        return len(nums)

sol = Solution()

nums = [0,1,2,2,3,0,4,2]
sum = sol.removeElement(nums, 2)
print(sum, nums)