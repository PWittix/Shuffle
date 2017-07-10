// JavaScript Document

//vars

//numbers initialized at 0
var numTotalCoins=0, numTotalRuns=0, numRatePSB=0, numRateRML=0, numTotalPSB=0, numTotalRML=0, numPFail=0, numP0=0, numP1=0, numP2=0, numP3=0, numP4=0, numP5=0, numFail=0, num0=0, num1=0, num2=0, num3=0, num4=0, num5=0;
//doc fields organized by row
//row 1
var totalCoins=document.getElementById("totalCoins"), ratePSB=document.getElementById("ratePSB"), rateRML=document.getElementById("rateRML"), totalPSB=document.getElementById("totalPSB"), totalRML=document.getElementById("totalRML"), totalRuns=document.getElementById("totalRuns");
//row 2
var pFail=document.getElementById("pFail"), p0=document.getElementById("p0"), p1=document.getElementById("p1"), p2=document.getElementById("p2"), p3=document.getElementById("p3"), p4=document.getElementById("p4"), p5=document.getElementById("p5");
//row 3
var eleNumFail=document.getElementById("numFail"), eleNum0=document.getElementById("num0"), eleNum1=document.getElementById("num1"), eleNum2=document.getElementById("num2"), eleNum3=document.getElementById("num3"), eleNum4=document.getElementById("num4"), eleNum5=document.getElementById("num5");
//buttons - get from doc
var btnFail=document.getElementById("btnFail"), btn0=document.getElementById("btn0"), btn1=document.getElementById("btn1"), btn2=document.getElementById("btn2"), btn3=document.getElementById("btn3"), btn4=document.getElementById("btn4"), btn5=document.getElementById("btn5"), btnReset=document.getElementById("btnReset");

//buttons "-" get from doc
var btnFailM=document.getElementById("btnFail-"), btn0M=document.getElementById("btn0-"), btn1M=document.getElementById("btn1-"), btn2M=document.getElementById("btn2-"), btn3M=document.getElementById("btn3-"), btn4M=document.getElementById("btn4-"), btn5M=document.getElementById("btn5-"); 


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
btn4.addEventListener("click", inc4);
btn5.addEventListener("click", inc5);
//event listener reset
btnReset.addEventListener("click", clear);
//event listeners decrement
btnFailM.addEventListener("click", decFail);
btn0M.addEventListener("click", dec0);
btn1M.addEventListener("click", dec1);
btn2M.addEventListener("click", dec2);
btn3M.addEventListener("click", dec3);
btn4M.addEventListener("click", dec4);
btn5M.addEventListener("click", dec5);

//functions
//calc calculates the percentages, rate, etc. of all values
function calc(){
"use strict";
numPFail = (numFail/numTotalRuns)*100;
numP0 = (num0/numTotalRuns)*100;
numP1 = (num1/numTotalRuns)*100;
numP2 = (num2/numTotalRuns)*100;
numP3 = (num3/numTotalRuns)*100;
numP4 = (num4/numTotalRuns)*100;
numP5 = (num5/numTotalRuns)*100;
numRatePSB = numTotalPSB/numTotalRuns;
numRateRML = numTotalRML/numTotalRuns;
}
//update changes all values in document to reflect the changes from pressing the "+" key of any option
function update(){
"use strict";
totalCoins.textContent="Total Coins: " + numTotalCoins;
totalPSB.textContent="Total PSB: " + numTotalPSB;
totalRML.textContent="Total RML: " + numTotalRML;
ratePSB.textContent="PSB per Run: " + numRatePSB.toFixed(2);
rateRML.textContent="RML per Run: " + numRateRML.toFixed(2);
totalRuns.textContent="Total Runs: " + numTotalRuns;
pFail.textContent= numPFail.toFixed(2)+"%";
p0.textContent= numP0.toFixed(2)+"%";
p1.textContent= numP1.toFixed(2)+"%";
p2.textContent= numP2.toFixed(2)+"%";
p3.textContent= numP3.toFixed(2)+"%";
p4.textContent= numP4.toFixed(2)+"%";
p5.textContent= numP5.toFixed(2)+"%";
eleNumFail.textContent=numFail;
eleNum0.textContent=num0;
eleNum1.textContent=num1;
eleNum2.textContent=num2;
eleNum3.textContent=num3;
eleNum4.textContent=num4;
eleNum5.textContent=num5;
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
//0 PSB Button 1 RML
function inc3(){
"use strict";
check();
if(valid==true){
	num3++;
	numTotalRuns++;
	numTotalRML++;
	calc();
	costs();
	update();
	}	
}
//1 PSB Button 1 RML
function inc4(){
"use strict";
check();
if(valid==true){
	num4++;
	numTotalRuns++;
	numTotalPSB++;
	numTotalRML++;
	calc();
	costs();
	update();
	}	
}
//2 PSB Button 1 RML
function inc5(){
"use strict";
check();
if(valid==true){
	num5++;
	numTotalRuns++;
	numTotalPSB+=2;
	numTotalRML++;
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
numRatePSB=0;
numRateRML=0;
numTotalPSB=0;
numTotalRML=0;
numPFail=0;
numP0=0;
numP1=0;
numP2=0;
numP3=0;
numP4=0;
numP5=0;
numFail=0;
num0=0;
num1=0;
num2=0;
num3=0;
num4=0;
num5=0;
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
numRatePSB=0;
numRateRML=0;
numTotalPSB=0;
numTotalRML=0;
numPFail=0;
numP0=0;
numP1=0;
numP2=0;
numP3=0;
numP4=0;
numP5=0;
numFail=0;
num0=0;
num1=0;
num2=0;
num3=0;
num4=0;
num5=0;
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
	numTotalRML--;
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
function dec4(){
"use strict";
check();
if(valid==true && numTotalRuns>0 && numTotalRuns!=1 && num4>0){
	num4--;
	numTotalRuns--;
	numTotalPSB--;
	numTotalRML--;
	calc();
	decCosts();
	update();
	}
else if(valid==true && numTotalRuns==1 && num4>0){
	decClear();
	}
else{
	alert("Cannot decrement if runs is less than 0");
	}
}

function dec5(){
"use strict";
check();
if(valid==true && numTotalRuns>0 && numTotalRuns!=1 && num5>0){
	num5--;
	numTotalRuns--;
	numTotalPSB-=2;
	numTotalRML--;
	calc();
	decCosts();
	update();
	}
else if(valid==true && numTotalRuns==1 && num5>0){
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
	var dlText = "Fails, " + numFail + ", " + numPFail.toFixed(2) + "%" + ",\n0 PSB 0 RML, " + num0 + ", " + numP0.toFixed(2) + "%" + ",\n1 PSB 0 RML, " + num1 + ", " + numP1.toFixed(2) + "%" + ",\n2 PSB 0 RML, " + num2 + ", " + numP2.toFixed(2) + "%" + ",\n0 PSB 1 RML, " + num3 + ", " + numP3.toFixed(2) +"%" + ",\n1 PSB 1 RML, " + num4 + ", " + numP4.toFixed(2) + "%"+ ",\n2 PSB 1 RML, " + num5 + ", " + numP5.toFixed(2) + "%" + ",\nTotal Runs, " + numTotalRuns + ",\nTotal PSB, " + numTotalPSB + ",\nTotal RML, " + numTotalRML + ",\nCost, " + costCoins + ",\nTotal Coins, " + numTotalCoins;
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

	
	if (arr[1]==arr[22])
	{
		tempCost = arr[28] * arr[1];
	}
	else
	{
		tempCost = arr[28] * arr[22] - 30 * (arr[22] - 1) + 30 * (arr[1]) - 200;
	}
	
	if (arr[1]<0 || arr[4]<0 || arr[7]<0 || arr[10]<0 || arr[13]<0 || arr[16]<0 || arr[19]<0 || arr[22]<0 || arr[24]<0 || arr[26]<0 || arr[30]<0){
		alert("Error: At least one value is negative");
	}
	else if ((arr[1]*1+arr[4]*1+arr[7]*1+arr[10]*1+arr[13]*1+arr[16]*1+arr[19]*1)*1 != arr[22]*1){
		alert("Error: The number of runs fails to add up");
	}
	else if ((arr[7]*1 + (2*arr[10])*1 + (1*arr[16])*1 + (2*arr[19])*1)*1 != arr[24]*1){
		alert("Error: The number of PSB's fails to add up");
	}
	else if ((arr[13]*1 + arr[16]*1 + arr[19]*1)*1 != arr[26]*1){
		alert("Error: The number of RML's fails to add up");
	}
	else if (tempCost != arr[30]){
		alert("Error: The number of coins fails to add up");
	}
	else{
		numFail=arr[1];
		num0=arr[4];
		num1=arr[7];
		num2=arr[10];
		num3=arr[13];
		num4=arr[16];
		num5=arr[19]
		numTotalRuns=arr[22];
		numTotalPSB=arr[24];
		numTotalRML=arr[26];
		numTotalCoins=arr[30];
		
		//select cost value
		if(arr[28]==300){
			c300.checked=true;
		}
		else if(arr[28]==400){
			c400.checked=true;
		}
		else if(arr[28] == 500){
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
var btnSetFail=document.getElementById("btnSetFail"), btnSet0=document.getElementById("btnSet0"), btnSet1=document.getElementById("btnSet1"), btnSet2=document.getElementById("btnSet2"), btnSet3=document.getElementById("btnSet3"), btnSet4=document.getElementById("btnSet4"), btnSet5=document.getElementById("btnSet5");
//event listeners sets
btnSetFail.addEventListener("click", setFail);
btnSet0.addEventListener("click", set0);
btnSet1.addEventListener("click", set1);
btnSet2.addEventListener("click", set2);
btnSet3.addEventListener("click", set3);
btnSet4.addEventListener("click", set4);
btnSet5.addEventListener("click", set5);

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
	//need to cancel a space character as it gets parsed as "0" unless paired with other numbers
	//cancel
	else if (number===null){
		//do nothing
numTotalCoins=numTotalCoins;
numTotalRuns = numTotalRuns;
numRatePSB=numRatePSB;
numRateRML=numRateRML;
numTotalPSB=numTotalPSB;
numTotalRML=numTotalRML;
numPFail=numPFail;
numP0=numP0;
numP1=numP1;
numP2=numP2;
numP3=numP3;
numP4=numP4;
numP5=numP5;
numFail=numFail;
num0=num0;
num1=num1;
num2=num2;
num3=num3;
num4=num4;
num5=num5;
valid=false;
	}
	//valid input so far...maybe has a decimal
	else{
	//set number to int (truncate decimal), rounding down
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
		var num=prompt("Enter value for 0 PSB 0 RML");
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
		var num=prompt("Enter value for 1 PSB 0 RML");
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
		var num=prompt("Enter value for 2 PSB 0 RML");
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
		var num=prompt("Enter value for 0 PSB 1 RML");
		validate(num);
		if (valid===true){
			num = validate(num);
			numTotalRuns-=num3;
			numTotalRML-=(1*num3);
			numTotalRuns = (numTotalRuns + num * 1);
			num3 = num*1;
			numTotalRML += (1 * num);
			costs();
			calc();
			update();
		}
		else{}
	}
	else{}
}

function set4(){
		"use strict";
	check();
	if(valid===true){
		var num=prompt("Enter value for 1 PSB 1 RML");
		validate(num);
		if (valid===true){
			num = validate(num);
			numTotalRuns-=num4;
			numTotalPSB-=(1*num4);
			numTotalRML-=(1*num4);
			numTotalRuns = (numTotalRuns + num * 1);
			num4 = num*1;
			numTotalPSB+=(1*num);
			numTotalRML += (1 * num);
			costs();
			calc();
			update();
		}
		else{}
	}
	else{}
}

function set5(){
		"use strict";
	check();
	if(valid===true){
		var num=prompt("Enter value for 2 PSB 1 RML");
		validate(num);
		if (valid===true){
			num = validate(num);
			numTotalRuns-=num5;
			numTotalPSB-=(2*num5);
			numTotalRML-=(1*num5);
			numTotalRuns = (numTotalRuns + num * 1);
			num5 = num*1;
			numTotalPSB += (2*num);
			numTotalRML += (1 * num);
			costs();
			calc();
			update();
		}
		else{}
	}
	else{}
}