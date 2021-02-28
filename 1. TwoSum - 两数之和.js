ENUM - For loops
/* 循环嵌套，寻找target-X，返回[]
	已循环过的不用再次遍历
*/
var twoSum = function(nums,target){
	for(let i=0;i<nums.length;i++){
		for(let j=0;j<nums.length-i;j++){ 
			if(nums[j]==target-nums[i])
				return [i,j];
	    }
    }
};

HASH MAP - SET \ GET \ NEW MAP \ HAS
/* 第一位数可以直接放入map中*/
var twoSum = function (nums , target ){
	let len = nums.length;
	let map = new Map();  
	map.set(nums[0],0);
	for(let i= 1; i < len; i++){
        let X = target-nums[i];
		if( map.get(X)!==undefined) // if(map.has(X))
			return [map.get(X),i];
		map.set(nums[i],i);
	}
};