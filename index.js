
         let num1, num2, result;
  
function plus () {
    
         num1 = document.getElementById("n1").value;
         num1 = parseFloat(num1);
     
         num2 = document.getElementById("n2").value;
         num2 = parseFloat(num2);
    
    result = num1+num2;
    document.getElementById("out").innerHTML = result;
}
function minus () {
    
         num1 = document.getElementById("n1").value;
         num1 = parseFloat(num1);
    
         num2 = document.getElementById("n2").value;
         num2 = parseFloat(num2);
   
     result = num1-num2;
     document.getElementById("out").innerHTML = result;
}
 function mult () {
  
          num1 = document.getElementById("n1").value;
          num1 = parseFloat(num1);
    
          num2 = document.getElementById("n2").value;
          num2 = parseFloat(num2);
    
      result = num1*num2;
      document.getElementById("out").innerHTML = result;
  }
 function div () {

          num1 = document.getElementById("n1").value;
          num1 = parseFloat(num1);
    
          num2 = document.getElementById("n2").value;
          num2 = parseFloat(num2);
          num2!=0;
     result = num1/num2;
     document.getElementById("out").innerHTML = result;
 }


 function perc () {

          num1 = document.getElementById("n1").value;
          num1 = parseFloat(num1);
    
          num2 = document.getElementById("n2").value;
          num2 = parseFloat(num2);
     result = (num1/100)*num2;
     document.getElementById("out").innerHTML = result;
 }
  function pow () {

          num1 = document.getElementById("n1").value;
          num1 = parseFloat(num1);
    
          num2 = document.getElementById("n2").value;
          num2 = parseFloat(num2);
     result = num1**(1/num2);
     document.getElementById("out").innerHTML = result;
 }