function add() {
    a=document.getElementById("ainput").value;
    b=document.getElementById("binput").value;
    c=parseInt(a)+parseInt(b);
    document.getElementById("answer").innerText=c;
}
function sub() {
    a=document.getElementById("ainput").value;
    b=document.getElementById("binput").value;
    c=parseInt(a)-parseInt(b);
    document.getElementById("answer").innerText=c;
}
function multi() {
    a=document.getElementById("ainput").value;
    b=document.getElementById("binput").value;
    c=parseInt(a)*parseInt(b);
    document.getElementById("answer").innerText=c;
}
function divi() {
    a=document.getElementById("ainput").value;
    b=document.getElementById("binput").value;
    c=parseInt(a)/parseInt(b);
    document.getElementById("answer").innerText=c;
}