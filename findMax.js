// Write a JavaScript function called findMax 
// that takes an array of numbers as an argument and 
// returns the maximum number in the array.
function findMax(arr)
{
    let max = 0;
  for(let ind=0;ind<arr.length;ind++)
  {
    if(arr[ind]>max) // if(arr[ind]>arr[ind+1])
    {
      max = arr[ind];
    }
  }
  return max;
}
var arr = [50,30,89,39,45];
console.log(findMax(arr));


