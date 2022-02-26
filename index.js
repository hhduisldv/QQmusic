
var things = document.querySelector(.imglist);
next.oneclick =function(){
    next_pic();
}
prev.oneclick =function(){
    prev_pic( );
}
function next_pic(){
    index++;
    if(index>1){
        index=0;
    }
    showCurrentDot();
    var newleft;
    if(imglist.style.left === "-2640px")
        newleft = 0;
        else{
            newleft = parseInt(imglist.style.left) -1320;
        }
        imglist.style.left =newleft + "px";
function prev_pic(){
    index--;
    if(index<0){
        index=1;
    }
    showCurrentDot();
    var newLeft;
    if(imglist.style.left === "0px"){
        newLeft = -1320;
    else{
        newLeft = parseInt(imglist.style.left)+1320;
    }
    imglist.style.left =newLeft + "px";

var index=0;
var dots = document.getElementsByClassName(".on");
function showCurrentDot(){
    for(var i=0,len = dots.length; i< len;i++)
    var dis= index-i;
    warp.style.left = (parseInt(wrap.style.left) + dis*1320)+"px";
    index=i;
    showCurrentDot();
}


}
