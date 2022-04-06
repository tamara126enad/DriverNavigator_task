'use strict';

/*************************************reverse*/  
function uppercase(str)
{
  let array1 = str.split(' ');
  let newarray1 = [];
    
  for(let x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("tamara"));
console.log("Tamara is Driver, Dyar is Navigator");
document.getElementById('title').innerHTML="Tamara is Driver, Dyar is Navigator <br> Uppercase First letter"
document.getElementById('before').innerHTML=" tamara ";
document.getElementById('after').innerHTML=uppercase("tamara");
