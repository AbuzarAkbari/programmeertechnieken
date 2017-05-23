//function showOnce() {
//    console.log("show once");
//}
//var to = setTimeout(showOnce,2000);


var begin = 0;
function showMore(){
    console.log("show more...");
    if(begin == 100){
        clearInterval(int);
        document.body.style.backgroundColor = "black";
    } else {
        begin++;
        document.getElementById("circle").innerHTML = begin;
    }
}
var int = setInterval(showMore,100);


