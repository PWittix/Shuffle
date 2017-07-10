// JavaScript Document
//vars
var motd =document.getElementById("motd");
//array containing all messages
//to display an image/other html <> elements that require ", use '
var motd_text = new Array();
//populate array indices with motd's
motd_text[0]="May RNG be in your favor.";
motd_text[1]="Praise Helix";
motd_text[2]="Why is Angry Pikachu angry? <img src='assets/Icons/0%20PSB.png' width='50' height='51' alt=''/>";
motd_text[3]="Got RML's?";
motd_text[4]="Much PSB. Such luck.";
motd_text[5]="2 PSB's <em>AND</em> an RML?! <img src='assets/Icons/bigBox.png' width='51' height='51' alt=''/>    <img src='assets/Icons/smallBox.png' width='30' height='30' alt=''/>  <img src='assets/Icons/smallBox.png' width='30' height='30' alt=''/>";
motd_text[6]="COINS!!!!";

//"randomly" pick an element of the array
//by using [array].length, we make sure to stay within array's bounds
var rng = Math.floor(motd_text.length * Math.random(Math.random())); 

//display motd
motd.innerHTML=motd_text[rng];
