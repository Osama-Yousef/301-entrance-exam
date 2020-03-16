var input;
var arrayOfNumbers=[];
var counter=0;

function greaterThan (arrayOfNumbers,input){
for ( var i=0 ;i< arrayOfNumbers.length ; i++){

if (input < arrayOfNumbers[i]){

    counter++;
}

}
console.log(counter);
return counter;

}
 //greaterThan([4,2,3,1],3) ; // the result will be 1 in the console
greaterThan([2,8,-1],8) ; // the result is 0 in the console 
//so if you change the number and the numbers in array we will have a different result
//so its dynamic ,try it !
