# @param {Integer[]} nums
# @param {Integer} pivot
# @return {Integer[]}
def pivot_array(nums, pivot)
    
    new_array = []
    
    a = 0
    until a === nums.length
        if nums[a] < pivot
            new_array.push(nums[a])
        end
        a+=1
    end
    
    b = 0
    until b >= nums.length
        if nums[b] === pivot
            new_array.push(nums[b])
        end
        b+=1
    end
    
    c = 0
    until c >= nums.length
        if nums[c] > pivot
            new_array.push(nums[c])
        end
        c+=1
    end
    
    new_array
end