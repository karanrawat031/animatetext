/*var fac=document.getElementById("face");
onmouseover="mouseover(this)" onmouseout="mouseout(this)" to be written on the element*/
 function mouseover (x){
    x.style.color="#ff0000";
 }
 function mouseout (x){
    x.style.color="";

 }
 
/*alert("h");
var snet=document.getElementById("social");
 var snetitems=snet.getElementsByTagname('li');
for(i=0;i<snetitems.length;i++)
 {
snetitems[i].style.color="#ff0000";
 }*/
 function $(x){
 	return document.getElementById(x);
 }
 function lettersonly(input){
   var regex;
   regex=/[^a-z]/gi;
   input.value=input.value.replace(regex,"");
 }
 function string(input){
 	var regex=/[^a-zA-Z" "]/gi;
    input.value=input.value.replace(regex,"");
 }
function pay (payment) {
  var result=document.getElementById("result");
  result.innerHTML="$" + payment;
}
 function Mortgage (p,r,n) {
  r=pertodec(r);
  n=yeartomonth(n);
  var pmt=(r*p)/(1-(Math.pow((1+r),(-n))));
  return parseFloat(pmt.toFixed(2));  
}
function pertodec(per){
  return (per/12)/100;
}
function yeartomonth (year) {
  return year*12;
}
var btn=document.getElementById("enter");
btn.onclick=function() {
 var cost=document.getElementById("costofhouse").value;
  var down=document.getElementById("downpayment").value;
  var p=cost-down;
  var r=document.getElementById("interest").value;
  var n=document.getElementById("time").value;
  var pmt=Mortgage(p,r,n);
  pay(pmt);
};




























