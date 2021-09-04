console.log("kopf")

var container = document.querySelector("body");
var hit = document.querySelector("div#hit"); //hit area voor de blup
var blup = document.querySelector("div#blup"); //het ronde blup ding
var kopimg = document.querySelector("section#kop img"); //img met de kop
var kop1 ="assets/KOP1.JPG"; //kop mond hap hap
var kop2 ="assets/KOP2.JPG"; //kop mond open
var kop3 ="assets/KOP3.JPG"; //kop
var hap; //timeout voor de hap
var hapsec = 0.160; //haphaphap animatie in seconden
var reset; //timeout na klik
var resetsec = 8; //timeout reset in seconden, hoe lang iss de muis niet zichtbaar
var meer = document.querySelector("img[src*=meer]"); //tooltip plaatje "meer" 
var button = document.querySelector("button"); //button voor meer info
var watisdat = document.querySelector("img[src*=watisdat]"); //tooltip plaatje "watisdat"

function showinfo(){
    button.classList.add("none"); //button weghalen
    meer.classList.add("none"); //tootlip plaatje"meer" weghalen
    container.classList.add("move");
    wegmetwatisdat();
}
function hideinfo(){
    button.classList.remove("none"); //button weghalen
    meer.classList.remove("none"); //tootlip plaatje"meer" weghalen
    container.classList.remove("move");
}
function wegmetwatisdat(){ //tooltip die na een aantal seconden verschijnt weghalen
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

    switch(window.location.hash) {
        case "#info":
            console.log("INFO")
            showinfo();
          break;
        default:
            console.log("ENTREE")
            hideinfo();
      }
}
//hash #info springt naar de info state of entree in setup functie
window.addEventListener("hashchange", function(){ 
    console.log("hashchange !",window.location.hash);
    setup();
});
button.onclick = function() {
    window.location.href='#info';
}
//Lets GO
setup();


/* BRONNEN
https://medium.com/@nagachaitanyakonada/javascript-window-history-pushstate-tutorial-56e2126eaff1
https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent

https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
https://developer.mozilla.org/en-US/docs/web/api/eventlistener
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList





*/