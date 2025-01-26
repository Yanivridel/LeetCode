
# You are given a sorted unique integer array nums.

# A range [a,b] is the set of all integers from a to b (inclusive).

# Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

# Each range [a,b] in the list should be output as:

# "a->b" if a != b
# "a" if a == b

class Solution(object):
    def summaryRanges(self, nums):
        if(len(nums) == 0):
            return []
        res = []
        begin = nums[0]
        for i in range(len(nums) -1):
            if(nums[i] + 1 != nums[i+1]):
                if(begin == nums[i]):
                    res.append(str(begin))
                else:
                    res.append(f"{begin}->{nums[i]}")
                begin = nums[i+1]
        if(begin == nums[-1]):
            res.append(str(begin))
        else:
            res.append(f"{begin}->{nums[-1]}")
        return res


sol = Solution()

nums = [0,2,3,4,6,8,9]

arr = sol.summaryRanges(nums)
print(arr)