function star(numberOfStars){

var star = "";
for ( var i=0 ; i<numberOfStars ; i++){

star=star+'*';
console.log (star);

}

}
star(5);/* so i made it dynamic so each time when you input a number of stars ,this number will
be the numbers of stars in the last row with the same pattern */
//so here we called the function with number of 5 because the quesion want that
//it is dynamic , try it !