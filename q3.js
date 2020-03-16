'use strict';

var dateAndActivity.all=[];

var listing =function(activity,date){

    this.activity=activity;
    this.date=date;
dateAndActivity.all.push(this);
});

for (var i=0;i<dateAndActivity.all.length ;i++){
    
    new listing(dateAndActivity[i]);
}
function setItem(){

    var input= json.stringify(dateAndActivity.all);
    localStorage.setItem('dateAndActivity.all'  , input );
    
}
function getItem(){

    var yourlist=localStorage.getItem(dateAndActivity.all);
    if(yourlist){
        dateAndActivity.all=json.parse(yourlist);

    }
}


function render(){
var container = document.getElementById('TODOLIST');
var ol = document.createElement('ol');
container.appendChild(ol);
for( var i=0 ; i<dateAndActivity.all.length ;i++){
var liel =document.createElement('li');
liel.textContent= ` ${dateAndActivity[i]} `;
ol.appendChild(liel);
}


}
render();


container.addEventListener('submit',adding);
function adding(e){
    e.preventDefault();
    for(var i=0 ; i<dateAndActivity.all ;i++){
        setItem();
        render();

    }
}
getItem();