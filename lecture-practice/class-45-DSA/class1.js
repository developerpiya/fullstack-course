//leatcode
//folder structure in pc is like tree like structure

// Data structure and algo

var twoSum = function(nums,target){
    let n = nums.length;
    for(let i=0; i<= n-2; i++){
        for(let j = i+1 ; j<n; j++){
            if(nums[i] + nums[j] == target){
                return [i,j];
            }
        }
    }
}

console.log(twoSum([2,7,11,15], 9));