console.log("kopf")

var container = document.querySelector("body");
var hit = document.querySelector("div#hit"); //hit area voor de blup
var blup = document.querySelector("div#blup"); //het ronde blup ding
var kopimg = document.querySelector("section#kop img"); //img met de kop
var kop1 ="assets/KOP1.JPG"; //mond hap hap
var kop2 ="assets/KOP2.JPG"; //mond open
var kop3 ="assets/KOP3.JPG"; //mond
var hap; //timeout voor de hap
var hapsec = 0.160; //haphaphap animatie in seconden
var reset; //timeout na klik
var resetsec = 8; //timeout reset in seconden, hoe lang iss de muis niet zichtbaar

//onclick meer informatie
var meer = document.querySelector("button+img");
document.querySelector("button").onclick = function() {
    console.log("click click click");
    this.classList.add("none");
    meer.classList.add("none");
    container.classList.add("move");
    wegmetwatisdat();
}

function wegmetwatisdat(){
    var watisdat = document.querySelector("img[src*=watisdat]"); //tooltip die na een aantal seconden verschijnt
    watisdat.classList.add("none"); //tooltip op display none zetten na een een mousover of klik op info
}

function haphaphap() { //muis wordt opgegeten met een hap
    kopimg.src = kop1 //mond hap hap
    hit.removeEventListener("mouseover", happer); //onmouseover weghalen
    blup.classList.replace("rollover","hide"); //blup ding onzichtbaar maken
    container.classList.replace("cursorpointer","cursornone"); //cursor niet zichtbaar maken
}
function happer(){ //mouseover functie
    kopimg.src=kop2; //mond open
    blup.classList.add("rollover"); //blup ding wit maken met rollover
    container.classList.add("cursorpointer"); //cursor wordt handje
    hap = setTimeout(haphaphap, hapsec*1000); //timeout voor de hap
    reset = setTimeout(setup, resetsec*1000); //timeout in miliseconden voor reset
    wegmetwatisdat();
}
function setup(){
    kopimg.src = kop3; //mond
    hit.addEventListener("mouseover", happer); //onmouseover 'aan' zetten
    blup.classList.remove("hide"); //blup ding weer zichtbaar maken
    container.classList.remove("cursornone");
    clearTimeout(hap);
    clearTimeout(reset);
}
setup();

// var my_image2 = new Image();
// // notify the user that the image has been preloaded, and reveal the
// // button to use the preloaded image
// function notify()  {
//     document.getElementById('preloadbutton2').style.display = 'none';
//     document.getElementById('after_preload').style.display = 'block';
// }
// function preload() {
//     my_image2.onload = notify;
//     my_image2.src = 'bigsaturn.jpg';
// }
// // using only the file name, we can take advantage of the preloaded image
// function use_preloaded_image() {
//     document.getElementById('saturnplaceholder').src = 'bigsaturn.jpg';
// }
