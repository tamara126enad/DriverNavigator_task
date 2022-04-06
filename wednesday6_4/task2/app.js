'use strict';

/*************************************reverse*/  
    let newArray=[];
    function reverse(nums) {
        for (let i = nums.length-1; i >= 0; i--){
            newArray.push(nums[i]);
        } 
    }
    reverse([8,3,4,8,4,8]);
    console.log(newArray);
    document.writeln('The old array was: [8,3,4,8,4,8], and the newest one is: <br> <br>')
    document.writeln(newArray);
    document.getElementById('title').innerHTML="Tamara is Driver, Dyar is Navigator"