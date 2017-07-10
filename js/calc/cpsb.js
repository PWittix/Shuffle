// JavaScript Document

//vars

//numbers initialized at 0
var numTotalCoins=0, numTotalRuns=0, numRate=0, numTotalPSB=0, numPFail=0, numP0=0, numP1=0, numP2=0, numP3=0, numFail=0, num0=0, num1=0, num2=0, num3=0;
//doc fields organized by row
//row 1
var totalCoins=document.getElementById("totalCoins"), rate=document.getElementById("rate"), totalPSB=document.getElementById("totalPSB"), totalRuns=document.getElementById("totalRuns");
//row 2
var pFail=document.getElementById("pFail"), p0=document.getElementById("p0"), p1=document.getElementById("p1"), p2=document.getElementById("p2"), p3=document.getElementById("p3");
//row 3
var eleNumFail=document.getElementById("numFail"), eleNum0=document.getElementById("num0"), eleNum1=document.getElementById("num1"), eleNum2=document.getElementById("num2"), eleNum3=document.getElementById("num3");
//buttons - get from doc
var btnFail=document.getElementById("btnFail"), btn0=document.getElementById("btn0"), btn1=document.getElementById("btn1"), btn2=document.getElementById("btn2"), btn3=document.getElementById("btn3"), btnReset=document.getElementById("btnReset");
//buttons "-" get from doc
var btnFailM=document.getElementById("btnFail-"), btn0M=document.getElementById("btn0-"), btn1M=document.getElementById("btn1-"), btn2M=document.getElementById("btn2-"), btn3M=document.getElementById("btn3-");


//radio elements
var c300=document.getElementById("c300"), c400=document.getElementById("c400"), c500=document.getElementById("c500");

var costCoins=0;

var valid=true;


//event listeners
btnFail.addEventListener("click", incFail);
btn0.addEventListener("click", inc0);
btn1.addEventListener("click", inc1);
btn2.addEventListener("click", inc2);
btn3.addEventListener("click", inc3);
//event listener reset
btnReset.addEventListener("click", clear);
//event listeners decrement
btnFailM.addEventListener("click", decFail);
btn0M.addEventListener("click", dec0);
btn1M.addEventListener("click", dec1);
btn2M.addEventListener("click", dec2);
btn3M.addEventListener("click", dec3);

//functions
//calc calculates the percentages, rate, etc. of all values
function calc(){
"use strict";
numPFail = (numFail/numTotalRuns)*100;
numP0 = (num0/numTotalRuns)*100;
numP1 = (num1/numTotalRuns)*100;
numP2 = (num2/numTotalRuns)*100;
numP3 = (num3/numTotalRuns)*100;
numRate = numTotalPSB/numTotalRuns;
}
//update changes all values in document to reflect the changes from pressing the "+" key of any option
function update(){
"use strict";
totalCoins.textContent="Total Coins: " + numTotalCoins;
rate.textContent="PSB Per Run: " + numRate.toFixed(2);
totalPSB.textContent="Total PSB: " + numTotalPSB;
totalRuns.textContent="Total Runs: " + numTotalRuns;
pFail.textContent= numPFail.toFixed(2)+"%";
p0.textContent= numP0.toFixed(2)+"%";
p1.textContent= numP1.toFixed(2)+"%";
p2.textContent= numP2.toFixed(2)+"%";
p3.textContent= numP3.toFixed(2)+"%";
eleNumFail.textContent=numFail;
eleNum0.textContent=num0;
eleNum1.textContent=num1;
eleNum2.textContent=num2;
eleNum3.textContent=num3;
}
//check coin costs
function check(){
"use strict";
//if statements to determine costCoins
if(c300.checked===true){
	costCoins=300;
	valid=true;
}
else if(c400.checked===true){
	costCoins=400;
	valid=true;
}
else if(c500.checked===true){
	costCoins=500;
	valid=true;
}
else{
	alert("Please select cost");
	valid=false;
}
}
//function to calc costs
function costs(){
"use strict";
if (numFail==numTotalRuns)
	{
		numTotalCoins = costCoins * numFail;
	}
	else
	{
		numTotalCoins = costCoins * numTotalRuns - 30 * (numTotalRuns - 1) + 30 * (numFail) - 200;
	}
}
function decCosts(){
"use strict";
if (numFail==numTotalRuns)
	{
		numTotalCoins = costCoins*numFail;
	}
	else
	{
		numTotalCoins = costCoins * numTotalRuns - 30 * (numTotalRuns - 1) + 30 * (numFail) - 200;
	}
}


//functions for each specific button
//Fail Button
function incFail(){
"use strict";
check();
if(valid==true){
	numFail++;
	numTotalRuns++;
	calc();
	costs();
	update();
	}
}
//0 PSB Button
function inc0(){
"use strict";
check();
if(valid==true){
	num0++;
	numTotalRuns++;
	calc();
	costs();
	update();
	}	
}
//1 PSB Button
function inc1(){
"use strict";
check();
if(valid==true){
	num1++;
	numTotalRuns++;
	numTotalPSB++;
	calc();
	costs();
	update();
	}
}
//2 PSB Button
function inc2(){
"use strict";
check();
if(valid==true){
	num2++;
	numTotalRuns++;
	numTotalPSB+=2;
	calc();
	costs();
	update();
	}	
}
//3 PSB Button
function inc3(){
"use strict";
check();
if(valid==true){
	num3++;
	numTotalRuns++;
	numTotalPSB+=3;
	calc();
	costs();
	update();
	}	
}
//reset
function clear(){
"use strict";
numTotalCoins=0;
numTotalRuns=0;
numRate=0;
numTotalPSB=0;
numPFail=0;
numP0=0;
numP1=0;
numP2=0;
numP3=0;
numFail=0;
num0=0;
num1=0;
num2=0;
num3=0;
c300.checked=false;
c400.checked=false;
c500.checked=false;
valid=true;
update();
}

//decrement clear
function decClear(){
"use strict";
numTotalCoins=0;
numTotalRuns=0;
numRate=0;
numTotalPSB=0;
numPFail=0;
numP0=0;
numP1=0;
numP2=0;
numP3=0;
numFail=0;
num0=0;
num1=0;
num2=0;
num3=0;
valid=true;
update();
}
//decrements

function decFail(){
"use strict";
check();
if(valid==true && numTotalRuns>0 && numTotalRuns!=1 && numFail>0){
	numFail--;
	numTotalRuns--;
	calc();
	decCosts();
	update();
	}
else if(valid==true && numTotalRuns==1 && numFail>0){
	decClear();
	}
else{
	alert("Cannot decrement if runs is less than 0");
	}
}

function dec0(){
"use strict";
check();
if(valid==true && numTotalRuns>0 && numTotalRuns!=1 && num0>0){
	num0--;
	numTotalRuns--;
	calc();
	decCosts();
	update();
	}
else if(valid==true && numTotalRuns==1 && num0>0){
	decClear();
	}
else{
	alert("Cannot decrement if runs is less than 0");
	}
}

function dec1(){
"use strict";
check();
if(valid==true && numTotalRuns>0 && numTotalRuns!=1 && num1>0){
	num1--;
	numTotalRuns--;
	numTotalPSB--;
	calc();
	decCosts();
	update();
	}
else if(valid==true && numTotalRuns==1 && num1>0){
	decClear();
	}
else{
	alert("Cannot decrement if runs is less than 0");
	}
}

function dec2(){
"use strict";
check();
if(valid==true && numTotalRuns>0 && numTotalRuns!=1 && num2>0){
	num2--;
	numTotalRuns--;
	numTotalPSB-=2;
	calc();
	decCosts();
	update();
	}
else if(valid==true && numTotalRuns==1 && num2>0){
	decClear();
	}
else{
	alert("Cannot decrement if runs is less than 0");
	}
}

function dec3(){
"use strict";
check();
if(valid==true && numTotalRuns>0 && numTotalRuns!=1 && num3>0){
	num3--;
	numTotalRuns--;
	numTotalPSB-=3;
	calc();
	decCosts();
	update();
	}
else if(valid==true && numTotalRuns==1 && num3>0){
	decClear();
	}
else{
	alert("Cannot decrement if runs is less than 0");
	}
}


var btnDownload = document.getElementById("btnDl");

btnDownload.addEventListener("click",download);

function download(){
	"use strict";
	var dlText = "Fails, " + numFail + ", " + numPFail.toFixed(2) + "%" + ",\n0 PSB, " + num0 + ", " + numP0.toFixed(2) + "%" + ",\n1 PSB, " + num1 + ", " + numP1.toFixed(2) + "%" + ",\n2 PSB, " + num2 + ", " + numP2.toFixed(2) + "%" + ",\n3 PSB, " + num3 + ", " + numP3.toFixed(2) +"%" + ",\nTotal Runs, " + numTotalRuns + ",\nTotal PSB, " + numTotalPSB + ",\nCost, " + costCoins + ",\nTotal Coins, " + numTotalCoins;
	var input = prompt("Enter a file name to save (extension will be added automatically)");
	while(input===""){
		input = prompt("Enter a file name to save (extension will be added automatically)");
	}
	if(input===null){
		//don't save
	}
	else{
		//save 
		var output = window.document.createElement('a');
		output.href = window.URL.createObjectURL(new Blob([dlText], {type: 'text/csv'}));
		output.download = input + '.csv';
		document.body.appendChild(output);
		output.click();
		document.body.removeChild(output);
	}	
}


//upload
var btnUpload = document.getElementById("btnUl");


	btnUpload.addEventListener("click", upload);
	

function validateUpload(ulInput){
	"use strict";
	
	var arr;
	arr = ulInput.split(",");	
	
	
		var tempCost;

	if (arr[1]==arr[16])
	{
		tempCost = arr[20] * arr[1];
	}
	else
	{
		tempCost = arr[20] * arr[16] - 30 * (arr[16] - 1) + 30 * (arr[1]) - 200;
	}
		
	//indices 1,4,7,10,13,16,18 must be positive
	//index 16 must equal the sum of indices 1,4,7,10,13
	//index 18 must be equal to ((index 7 * 1) + (index 10 * 2) + (index 13 * 3) )
	//coins......need to make sure they add up somehow
	
	if (arr[1]<0 || arr[4]<0 || arr[7]<0 || arr[10]<0 || arr[13]<0 || arr[16]<0 || arr[18]<0){
		alert("Error: At least one value is negative");
	}
	else if ((arr[1]*1+arr[4]*1+arr[7]*1+arr[10]*1+arr[13]*1)*1 != arr[16]*1){
		alert("Error: The number of runs fails to add up");
	}
	else if ((arr[7]*1 + (2*arr[10])*1 + (3*arr[13])*1)*1 != arr[18]*1){
		alert("Error: The number of PSB's fails to add up");
	}
	else if (tempCost != arr[22]){
		alert("Error: The number of coins fails to add up");
	}
	else{
		numFail=arr[1];
		num0=arr[4];
		num1=arr[7];
		num2=arr[10];
		num3=arr[13];
		numTotalRuns=arr[16];
		numTotalPSB=arr[18];
		numTotalCoins=arr[22];
		calc();
		update();
		if(arr[20]==300){
			c300.checked=true;
		}
		else if(arr[20]==400){
			c400.checked=true;
		}
		else if(arr[20] == 500){
			c500.checked=true;
		}
		else{
			//should not get here, but just in case
			alert("Invalid Cost. Defaulting to 300.");
			c300.checked=true;
		}
		calc();
		update();
	}
}
function upload(){
	"use strict";
	//input text
	var input = prompt("Enter CSV Data");
	//if nothing inputted
	while(input===""){
		input = prompt("Enter CSV Data");
	}
	//if cancel
	if(input===null){
		//don't save
	}
	//otherwise
	else{
		validateUpload(input);
		
}
}

//sets
var btnSetFail=document.getElementById("btnSetFail"), btnSet0=document.getElementById("btnSet0"), btnSet1=document.getElementById("btnSet1"), btnSet2=document.getElementById("btnSet2"), btnSet3=document.getElementById("btnSet3");
//event listeners sets
btnSetFail.addEventListener("click", setFail);
btnSet0.addEventListener("click", set0);
btnSet1.addEventListener("click", set1);
btnSet2.addEventListener("click", set2);
btnSet3.addEventListener("click", set3);

// ***IMPORTANT ***  input validation

function validate(number){
	//check negative number
	"use strict";
	if(number<0){
		alert("Enter a Positive Number");
		valid=false;
	}
	//check non number
	else if (isNaN(number)===true){
		alert("Enter a Number");
		valid=false;
	}
	//no input
	else if (number==""){
		alert("Enter a number");
		valid=false;
	}
	//cancel
	else if (number===null){
		//do nothing
numTotalCoins=numTotalCoins;
numTotalRuns = numTotalRuns;
numRate=numRate;
numTotalPSB=numTotalPSB;
numPFail=numPFail;
numP0=numP0;
numP1=numP1;
numP2=numP2;
numP3=numP3;
numFail=numFail;
num0=num0;
num1=num1;
num2=num2;
num3=num3;
valid=false;
	}
	//valid input so far...maybe has a decimal
	else{
	//set number to int, rounding down
	valid=true;
	var output = number.split(".");
	return output[0];
	}
}

function setFail(){
	"use strict";
	check();
	if(valid===true){
		var num=prompt("Enter value for Fails");
		validate(num);
		if (valid===true){
			num = validate(num);
			numTotalRuns-=numFail;
			numTotalRuns = (numTotalRuns + num * 1);
			numFail = num*1;
			costs();
			calc();
			update();
		}
		else{}
	}
	else{}
}
function set0(){
	"use strict";
	check();
	if(valid===true){
		var num=prompt("Enter value for 0 PSB");
		validate(num);
		if (valid===true){
			num = validate(num);
			numTotalRuns-=num0;
			numTotalRuns = (numTotalRuns + num * 1);
			num0 = num*1;
			costs();
			calc();
			update();
		}
		else{}
	}
	else{}
}

function set1(){
	"use strict";
	check();
	if(valid===true){
		var num=prompt("Enter value for 1 PSB");
		validate(num);
		if (valid===true){
			num = validate(num);
			numTotalRuns-=num1;
			numTotalPSB-=(1*num1);
			numTotalRuns = (numTotalRuns + num * 1);
			num1 = num*1;
			numTotalPSB += (1 * num);
			costs();
			calc();
			update();
		}
		else{}
	}
	else{}
}

function set2(){
		"use strict";
	check();
	if(valid===true){
		var num=prompt("Enter value for 2 PSB");
		validate(num);
		if (valid===true){
			num = validate(num);
			numTotalRuns-=num2;
			numTotalPSB-=(2*num2);
			numTotalRuns = (numTotalRuns + num * 1);
			num2 = num*1;
			numTotalPSB += (2 * num);
			costs();
			calc();
			update();
		}
		else{}
	}
	else{}
}
function set3(){
		"use strict";
	check();
	if(valid===true){
		var num=prompt("Enter value for 3 PSB");
		validate(num);
		if (valid===true){
			num = validate(num);
			numTotalRuns-=num3;
			numTotalPSB-=(3*num3);
			numTotalRuns = (numTotalRuns + num * 1);
			num3 = num*1;
			numTotalPSB += (3 * num);
			costs();
			calc();
			update();
		}
		else{}
	}
	else{}
}