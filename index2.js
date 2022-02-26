var imglist=document.getElementsByClassName("imglist");
var imgarr=document.getElementsByClassName("on");
imglist.style.width =1320*imgarr.length+"px";
var index=0;
imgarr[index].style.backgroundcolor="black";
for(var i=0;i<imgarr.length;i++){
    imgarr[i].num=i;
    imgarr[i].oneclick = function(){
        index = this.num;
        imglist.style.left=-1320*index+"px";
        setA();
    }
}
function  setA(){
    for(var i=0;i<imgarr.length;i++){
        imgarr[i].style.backgroundcolor=" ";

    }
    imgarr[i].style.backgroundcolor="black";

}
move(imglist,"left",-1320*index,10,function(){

});