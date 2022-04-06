'use strict';

console.log("[2,9,0,4]");
function sorting(arr){
    for (let i = 0; i < arr.length; i++) 
        for (let j = i + 1; j < arr.length; j++) {  
            let t= 0; 
            if (arr[i] < arr[j]) {     
                t= arr[i];              
                arr[i] = arr[j];            
                arr[j] = t;
            }
        }
        return arr
    }
console.log(sorting( [2,9,0,4]));

document.getElementById('before').innerHTML="[2,9,0,4]";
console.log("Dyar is Driver, Tamara is Navigator");
document.getElementById('title').innerHTML="Dyar is Driver, Tamara is Navigator <br> Sort array decending"
document.getElementById('after').innerHTML="[ "+ sorting( [2,9,0,4]) + " ]" ;