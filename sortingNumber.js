function solution(nums){
    if(!nums || nums.length === 0){
        return [];
    }
    else {
        return nums.sort((a,b)=> a-b);
    }
}
console.log(solution([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));