'use strict';

// let array=[2,0,9,4]
// let sortArr=[];
// let max=arr[0];
// let min =arr[0];
// let k;

// function sort=arr (){
// for (let i = 0; i < array.length-1; i ++) {
//   for (let j = 0; j < array.length-1; j++) {
//          if (max < array(j))
//         {max = array[j];
//          k= j;
//       }}
//    }
//    sortArr[i] = max;
//      arr[k] = null;
//       min = max;
//        return sortArr; 
// }
// console.log(sortArr);

let arr1 = [2,0,9,4];
function sort(arr){
    let l= arr.length;
    let array= [];
    let max= arr[0];
    let index= 0;
    for(let j=0; j<l; j++){
    for(let i=0; i<l; i++){
        if(arr[i] >= max){
            max= arr[i];
            index= i;
        }
    }
    array.push(max);
    arr.splice(index,1)
    max= arr[0];
}
return array;
}

document.getElementById('after').innerHTML= array;
