'use strict'

  /******************************   round two   ***************************************/
    let str = "ABCDCBA";
    let str2 = str.split("").reverse().join("");
    console.log(str2);
    if (str === str2) {
      console.log("true");
      document.getElementById('before').innerHTML=str + '<br>    is palindrome';
    } else {
      console.log("flase");
      console.log("Dyar is Driver, Tamara is Navigator");
      document.getElementById('title').innerHTML="Dyar is Driver, Tamara is Navigator"
      document.getElementById('after').innerHTML=str + '<br>   not palindrome';
    }
    document.getElementById('title').innerHTML="Dyar is Driver, Tamara is Navigator"

 /***************************************/
