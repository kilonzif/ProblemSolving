function searchItem(arr, target){

	for(let i=0; i<arr.length; i++){
  
  	if (arr[i]==target){
    	return i;
    }
  }
  return -1

}


function binarySearch(arr,target){

    let sortedArr= arr.sort((a,b)=>{return a-b})
    let start = 0;
    let mid = 0;
    let stop = sortedArr.length - 1;
    while(stop >= start){
        mid = start + Math.floor((stop - start ) / 2) ;
        if(sortedArr[mid] < target){
        start = mid + 1;
        }else if(sortedArr[mid] > target){
            stop = mid - 1;
        }else{
        return mid
        }
    }
    return -1;
 

}





const nums = [2, 3, 5, 7, 9];
const target = 7;

console.log("hello");

console.log(searchItem(nums,target));


console.log("--- Binary Search ---")

console.log(binarySearch(nums,target));

