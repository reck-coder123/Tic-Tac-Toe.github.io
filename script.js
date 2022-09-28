let i=1;
let btn=document.getElementsByTagName("button");
var sound = new Audio("./music/TB7L64W-winning.mp3");
		sound.loop = true;
var sound1 = new Audio("./music/new.mp3");
	sound1.loop = true;

function tic()

{document.getElementById("mybutton1").addEventListener("click",function(){
    if(i==1){document.getElementById("cr1").style.display="block";
                i=0;
                btn[0].disabled=true;
            }
    else if(i==0){
        document.getElementById("co2").style.display="block";
        i=1;
        btn[0].disabled=true;
    }
    setTimeout(() => {
        if(window.getComputedStyle(cr3, null).display=="block"&&window.getComputedStyle(cr2, null).display=="block" && window.getComputedStyle(cr1, null).display=="block"){
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(cr4, null).display=="block"&&window.getComputedStyle(cr7, null).display=="block" && window.getComputedStyle(cr1, null).display=="block"){
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(cr1, null).display=="block"&&window.getComputedStyle(cr5, null).display=="block" && window.getComputedStyle(cr9, null).display=="block"){
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(co6, null).display=="block"&&window.getComputedStyle(co4, null).display=="block" && window.getComputedStyle(co2, null).display=="block"){
            document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(co8, null).display=="block"&&window.getComputedStyle(co14, null).display=="block" && window.getComputedStyle(co2, null).display=="block"){
            document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(co2, null).display=="block"&&window.getComputedStyle(co10, null).display=="block" && window.getComputedStyle(co18, null).display=="block"){
            document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if((window.getComputedStyle(cr1,null).display=="block"||window.getComputedStyle(co2,null).display=="block")&&(window.getComputedStyle(cr2,null).display=="block"||window.getComputedStyle(co4,null).display=="block")&&
(window.getComputedStyle(cr3,null).display=="block"||window.getComputedStyle(co6,null).display=="block")&&(window.getComputedStyle(cr4,null).display=="block"||window.getComputedStyle(co8,null).display=="block")&&
(window.getComputedStyle(cr5,null).display=="block"||window.getComputedStyle(co10,null).display=="block")&&(window.getComputedStyle(cr6,null).display=="block"||window.getComputedStyle(co12,null).display=="block")&&
(window.getComputedStyle(cr7,null).display=="block"||window.getComputedStyle(co14,null).display=="block")&&(window.getComputedStyle(cr8,null).display=="block"||window.getComputedStyle(co16,null).display=="block")&&
(window.getComputedStyle(cr9,null).display=="block"||window.getComputedStyle(co18,null).display=="block")){
    document.getElementById("win").innerHTML="Match drawn";
    document.getElementById("reset").style.display="block";
}
document.getElementById("res").addEventListener("click",function(){
    location.reload();

})

    }, 200);
})

document.getElementById("mybutton2").addEventListener("click",function(){
    if(i==1){document.getElementById("cr2").style.display="block";
                i=0;
            btn[1].disabled=true;}
    else if(i==0){
        document.getElementById("co4").style.display="block";
        i=1;
        btn[1].disabled=true;
    }
    setTimeout(() => {
        if(window.getComputedStyle(cr3, null).display=="block"&&window.getComputedStyle(cr2, null).display=="block" && window.getComputedStyle(cr1, null).display=="block"){
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(cr2, null).display=="block"&&window.getComputedStyle(cr5, null).display=="block" && window.getComputedStyle(cr8, null).display=="block"){
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(co6, null).display=="block"&&window.getComputedStyle(co4, null).display=="block" && window.getComputedStyle(co2, null).display=="block"){
            document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(co4, null).display=="block"&&window.getComputedStyle(co10, null).display=="block" && window.getComputedStyle(co16, null).display=="block"){
            document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if((window.getComputedStyle(cr1,null).display=="block"||window.getComputedStyle(co2,null).display=="block")&&(window.getComputedStyle(cr2,null).display=="block"||window.getComputedStyle(co4,null).display=="block")&&
(window.getComputedStyle(cr3,null).display=="block"||window.getComputedStyle(co6,null).display=="block")&&(window.getComputedStyle(cr4,null).display=="block"||window.getComputedStyle(co8,null).display=="block")&&
(window.getComputedStyle(cr5,null).display=="block"||window.getComputedStyle(co10,null).display=="block")&&(window.getComputedStyle(cr6,null).display=="block"||window.getComputedStyle(co12,null).display=="block")&&
(window.getComputedStyle(cr7,null).display=="block"||window.getComputedStyle(co14,null).display=="block")&&(window.getComputedStyle(cr8,null).display=="block"||window.getComputedStyle(co16,null).display=="block")&&
(window.getComputedStyle(cr9,null).display=="block"||window.getComputedStyle(co18,null).display=="block")){
    document.getElementById("win").innerHTML="Match drawn";
    document.getElementById("reset").style.display="block";
}
document.getElementById("res").addEventListener("click",function(){
    location.reload();

})
    }, 200);
   
})
document.getElementById("mybutton3").addEventListener("click",function(){
    if(i==1){document.getElementById("cr3").style.display="block";
    i=0;
    btn[2].disabled=true;}
else if(i==0){
document.getElementById("co6").style.display="block";
i=1;
btn[2].disabled=true;
}
setTimeout(() => {
    if(window.getComputedStyle(cr3, null).display=="block"&&window.getComputedStyle(cr2, null).display=="block" && window.getComputedStyle(cr1, null).display=="block"){
        document.getElementById("reset").style.display="block";
        sound.play();
    }
    else if(window.getComputedStyle(cr3, null).display=="block"&&window.getComputedStyle(cr6, null).display=="block" && window.getComputedStyle(cr9, null).display=="block"){
        document.getElementById("reset").style.display="block";
        sound.play();
    }
    else if(window.getComputedStyle(cr3, null).display=="block"&&window.getComputedStyle(cr5, null).display=="block" && window.getComputedStyle(cr7, null).display=="block"){
        document.getElementById("reset").style.display="block";
        sound.play();
    }
    else if(window.getComputedStyle(co6, null).display=="block"&&window.getComputedStyle(co4, null).display=="block" && window.getComputedStyle(co2, null).display=="block"){
        document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
    }
    else if(window.getComputedStyle(co6, null).display=="block"&&window.getComputedStyle(co12, null).display=="block" && window.getComputedStyle(co18, null).display=="block"){
        document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
    }
    else if(window.getComputedStyle(co6, null).display=="block"&&window.getComputedStyle(co10, null).display=="block" && window.getComputedStyle(co14, null).display=="block"){
        document.getElementById("win").innerHTML="Player O Won";
        document.getElementById("reset").style.display="block";
        sound.play();
    }
    else if((window.getComputedStyle(cr1,null).display=="block"||window.getComputedStyle(co2,null).display=="block")&&(window.getComputedStyle(cr2,null).display=="block"||window.getComputedStyle(co4,null).display=="block")&&
(window.getComputedStyle(cr3,null).display=="block"||window.getComputedStyle(co6,null).display=="block")&&(window.getComputedStyle(cr4,null).display=="block"||window.getComputedStyle(co8,null).display=="block")&&
(window.getComputedStyle(cr5,null).display=="block"||window.getComputedStyle(co10,null).display=="block")&&(window.getComputedStyle(cr6,null).display=="block"||window.getComputedStyle(co12,null).display=="block")&&
(window.getComputedStyle(cr7,null).display=="block"||window.getComputedStyle(co14,null).display=="block")&&(window.getComputedStyle(cr8,null).display=="block"||window.getComputedStyle(co16,null).display=="block")&&
(window.getComputedStyle(cr9,null).display=="block"||window.getComputedStyle(co18,null).display=="block")){
    document.getElementById("win").innerHTML="Match drawn";
    document.getElementById("reset").style.display="block";
}
document.getElementById("res").addEventListener("click",function(){
    location.reload();

})
}, 200);
})

document.getElementById("mybutton4").addEventListener("click",function(){
    if(i==1){document.getElementById("cr4").style.display="block";
                i=0;
                btn[3].disabled=true;}
    else if(i==0){
        document.getElementById("co8").style.display="block";
        i=1;
        btn[3].disabled=true;
    }
    setTimeout(() => {
        if(window.getComputedStyle(cr4, null).display=="block"&&window.getComputedStyle(cr5, null).display=="block" && window.getComputedStyle(cr6, null).display=="block"){
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(cr4, null).display=="block"&&window.getComputedStyle(cr7, null).display=="block" && window.getComputedStyle(cr1, null).display=="block"){
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(co8, null).display=="block"&&window.getComputedStyle(co10, null).display=="block" && window.getComputedStyle(co12, null).display=="block"){
            document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(co8, null).display=="block"&&window.getComputedStyle(co14, null).display=="block" && window.getComputedStyle(co2, null).display=="block"){
            document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if((window.getComputedStyle(cr1,null).display=="block"||window.getComputedStyle(co2,null).display=="block")&&(window.getComputedStyle(cr2,null).display=="block"||window.getComputedStyle(co4,null).display=="block")&&
(window.getComputedStyle(cr3,null).display=="block"||window.getComputedStyle(co6,null).display=="block")&&(window.getComputedStyle(cr4,null).display=="block"||window.getComputedStyle(co8,null).display=="block")&&
(window.getComputedStyle(cr5,null).display=="block"||window.getComputedStyle(co10,null).display=="block")&&(window.getComputedStyle(cr6,null).display=="block"||window.getComputedStyle(co12,null).display=="block")&&
(window.getComputedStyle(cr7,null).display=="block"||window.getComputedStyle(co14,null).display=="block")&&(window.getComputedStyle(cr8,null).display=="block"||window.getComputedStyle(co16,null).display=="block")&&
(window.getComputedStyle(cr9,null).display=="block"||window.getComputedStyle(co18,null).display=="block")){
    document.getElementById("win").innerHTML="Match drawn";
    document.getElementById("reset").style.display="block";
}
document.getElementById("res").addEventListener("click",function(){
    location.reload();

})
    }, 200);
})

document.getElementById("mybutton5").addEventListener("click",function(){
    if(i==1){document.getElementById("cr5").style.display="block";
                i=0;
            btn[4].disabled=true;}
    else if(i==0){
        document.getElementById("co10").style.display="block";
        i=1;
        btn[4].disabled=true;
    }
    setTimeout(() => {
        if(window.getComputedStyle(cr4, null).display=="block"&&window.getComputedStyle(cr5, null).display=="block" && window.getComputedStyle(cr6, null).display=="block"){
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(cr2, null).display=="block"&&window.getComputedStyle(cr5, null).display=="block" && window.getComputedStyle(cr8, null).display=="block"){
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(cr1, null).display=="block"&&window.getComputedStyle(cr5, null).display=="block" && window.getComputedStyle(cr9, null).display=="block"){
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(cr3, null).display=="block"&&window.getComputedStyle(cr5, null).display=="block" && window.getComputedStyle(cr7, null).display=="block"){
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(co8, null).display=="block"&&window.getComputedStyle(co10, null).display=="block" && window.getComputedStyle(co12, null).display=="block"){
            document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(co4, null).display=="block"&&window.getComputedStyle(co10, null).display=="block" && window.getComputedStyle(co16, null).display=="block"){
            document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(co2, null).display=="block"&&window.getComputedStyle(co10, null).display=="block" && window.getComputedStyle(co18, null).display=="block"){
            document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(co6, null).display=="block"&&window.getComputedStyle(co10, null).display=="block" && window.getComputedStyle(co14, null).display=="block"){
            document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if((window.getComputedStyle(cr1,null).display=="block"||window.getComputedStyle(co2,null).display=="block")&&(window.getComputedStyle(cr2,null).display=="block"||window.getComputedStyle(co4,null).display=="block")&&
(window.getComputedStyle(cr3,null).display=="block"||window.getComputedStyle(co6,null).display=="block")&&(window.getComputedStyle(cr4,null).display=="block"||window.getComputedStyle(co8,null).display=="block")&&
(window.getComputedStyle(cr5,null).display=="block"||window.getComputedStyle(co10,null).display=="block")&&(window.getComputedStyle(cr6,null).display=="block"||window.getComputedStyle(co12,null).display=="block")&&
(window.getComputedStyle(cr7,null).display=="block"||window.getComputedStyle(co14,null).display=="block")&&(window.getComputedStyle(cr8,null).display=="block"||window.getComputedStyle(co16,null).display=="block")&&
(window.getComputedStyle(cr9,null).display=="block"||window.getComputedStyle(co18,null).display=="block")){
    document.getElementById("win").innerHTML="Match drawn";
    document.getElementById("reset").style.display="block";
}
document.getElementById("res").addEventListener("click",function(){
    location.reload();

})
    }, 200);
})

document.getElementById("mybutton6").addEventListener("click",function(){
    if(i==1){document.getElementById("cr6").style.display="block";
                i=0;
                btn[5].disabled=true;}
    else if(i==0){
        document.getElementById("co12").style.display="block";
        i=1;
        btn[5].disabled=true;
    }
    setTimeout(() => {
        if(window.getComputedStyle(cr4, null).display=="block"&&window.getComputedStyle(cr5, null).display=="block" && window.getComputedStyle(cr6, null).display=="block"){
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(cr3, null).display=="block"&&window.getComputedStyle(cr6, null).display=="block" && window.getComputedStyle(cr9, null).display=="block"){
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(co8, null).display=="block"&&window.getComputedStyle(co10, null).display=="block" && window.getComputedStyle(co12, null).display=="block"){
            document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(co6, null).display=="block"&&window.getComputedStyle(co12, null).display=="block" && window.getComputedStyle(co18, null).display=="block"){
            document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if((window.getComputedStyle(cr1,null).display=="block"||window.getComputedStyle(co2,null).display=="block")&&(window.getComputedStyle(cr2,null).display=="block"||window.getComputedStyle(co4,null).display=="block")&&
(window.getComputedStyle(cr3,null).display=="block"||window.getComputedStyle(co6,null).display=="block")&&(window.getComputedStyle(cr4,null).display=="block"||window.getComputedStyle(co8,null).display=="block")&&
(window.getComputedStyle(cr5,null).display=="block"||window.getComputedStyle(co10,null).display=="block")&&(window.getComputedStyle(cr6,null).display=="block"||window.getComputedStyle(co12,null).display=="block")&&
(window.getComputedStyle(cr7,null).display=="block"||window.getComputedStyle(co14,null).display=="block")&&(window.getComputedStyle(cr8,null).display=="block"||window.getComputedStyle(co16,null).display=="block")&&
(window.getComputedStyle(cr9,null).display=="block"||window.getComputedStyle(co18,null).display=="block")){
    document.getElementById("win").innerHTML="Match drawn";
    document.getElementById("reset").style.display="block";
}
document.getElementById("res").addEventListener("click",function(){
    location.reload();

})
    }, 200);
})

document.getElementById("mybutton7").addEventListener("click",function(){
    if(i==1){document.getElementById("cr7").style.display="block";
                i=0;
                btn[6].disabled=true;}
    else if(i==0){
        document.getElementById("co14").style.display="block";
        i=1;
        btn[6].disabled=true;
    }
    setTimeout(() => {
        if(window.getComputedStyle(cr7, null).display=="block"&&window.getComputedStyle(cr8, null).display=="block" && window.getComputedStyle(cr9, null).display=="block"){
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(cr4, null).display=="block"&&window.getComputedStyle(cr7, null).display=="block" && window.getComputedStyle(cr1, null).display=="block"){
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(cr3, null).display=="block"&&window.getComputedStyle(cr5, null).display=="block" && window.getComputedStyle(cr7, null).display=="block"){
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(co14, null).display=="block"&&window.getComputedStyle(co16, null).display=="block" && window.getComputedStyle(co18, null).display=="block"){
            document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(co8, null).display=="block"&&window.getComputedStyle(co14, null).display=="block" && window.getComputedStyle(co2, null).display=="block"){
            document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(co6, null).display=="block"&&window.getComputedStyle(co10, null).display=="block" && window.getComputedStyle(co14, null).display=="block"){
            document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if((window.getComputedStyle(cr1,null).display=="block"||window.getComputedStyle(co2,null).display=="block")&&(window.getComputedStyle(cr2,null).display=="block"||window.getComputedStyle(co4,null).display=="block")&&
(window.getComputedStyle(cr3,null).display=="block"||window.getComputedStyle(co6,null).display=="block")&&(window.getComputedStyle(cr4,null).display=="block"||window.getComputedStyle(co8,null).display=="block")&&
(window.getComputedStyle(cr5,null).display=="block"||window.getComputedStyle(co10,null).display=="block")&&(window.getComputedStyle(cr6,null).display=="block"||window.getComputedStyle(co12,null).display=="block")&&
(window.getComputedStyle(cr7,null).display=="block"||window.getComputedStyle(co14,null).display=="block")&&(window.getComputedStyle(cr8,null).display=="block"||window.getComputedStyle(co16,null).display=="block")&&
(window.getComputedStyle(cr9,null).display=="block"||window.getComputedStyle(co18,null).display=="block")){
    document.getElementById("win").innerHTML="Match drawn";
    document.getElementById("reset").style.display="block";
}
document.getElementById("res").addEventListener("click",function(){
    location.reload();

})
    }, 200);
})

document.getElementById("mybutton8").addEventListener("click",function(){
    if(i==1){document.getElementById("cr8").style.display="block";
                i=0;
                btn[7].disabled=true;}
    else if(i==0){
        document.getElementById("co16").style.display="block";
        i=1;
        btn[7].disabled=true;
    }
    setTimeout(() => {
        if(window.getComputedStyle(cr7, null).display=="block"&&window.getComputedStyle(cr8, null).display=="block" && window.getComputedStyle(cr9, null).display=="block"){
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(cr2, null).display=="block"&&window.getComputedStyle(cr5, null).display=="block" && window.getComputedStyle(cr8, null).display=="block"){
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        if(window.getComputedStyle(co14, null).display=="block"&&window.getComputedStyle(co16, null).display=="block" && window.getComputedStyle(co18, null).display=="block"){
            document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(co4, null).display=="block"&&window.getComputedStyle(co10, null).display=="block" && window.getComputedStyle(co16, null).display=="block"){
            document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if((window.getComputedStyle(cr1,null).display=="block"||window.getComputedStyle(co2,null).display=="block")&&(window.getComputedStyle(cr2,null).display=="block"||window.getComputedStyle(co4,null).display=="block")&&
(window.getComputedStyle(cr3,null).display=="block"||window.getComputedStyle(co6,null).display=="block")&&(window.getComputedStyle(cr4,null).display=="block"||window.getComputedStyle(co8,null).display=="block")&&
(window.getComputedStyle(cr5,null).display=="block"||window.getComputedStyle(co10,null).display=="block")&&(window.getComputedStyle(cr6,null).display=="block"||window.getComputedStyle(co12,null).display=="block")&&
(window.getComputedStyle(cr7,null).display=="block"||window.getComputedStyle(co14,null).display=="block")&&(window.getComputedStyle(cr8,null).display=="block"||window.getComputedStyle(co16,null).display=="block")&&
(window.getComputedStyle(cr9,null).display=="block"||window.getComputedStyle(co18,null).display=="block")){
    document.getElementById("win").innerHTML="Match drawn";
    document.getElementById("reset").style.display="block";
}
document.getElementById("res").addEventListener("click",function(){
    location.reload();

})
    }, 200);
})

document.getElementById("mybutton9").addEventListener("click",function(){
    if(i==1){document.getElementById("cr9").style.display="block";
                i=0;
                btn[8].disabled=true;}
    else if(i==0){
        document.getElementById("co18").style.display="block";
        i=1;
        btn[8].disabled=true;
        
    }
    setTimeout(() => {
        if(window.getComputedStyle(cr7, null).display=="block"&&window.getComputedStyle(cr8, null).display=="block" && window.getComputedStyle(cr9, null).display=="block"){
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(cr3, null).display=="block"&&window.getComputedStyle(cr6, null).display=="block" && window.getComputedStyle(cr9, null).display=="block"){
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(cr1, null).display=="block"&&window.getComputedStyle(cr5, null).display=="block" && window.getComputedStyle(cr9, null).display=="block"){
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        if(window.getComputedStyle(co14, null).display=="block"&&window.getComputedStyle(co16, null).display=="block" && window.getComputedStyle(co18, null).display=="block"){
            document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(co6, null).display=="block"&&window.getComputedStyle(co12, null).display=="block" && window.getComputedStyle(co18, null).display=="block"){
            document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if(window.getComputedStyle(co2, null).display=="block"&&window.getComputedStyle(co10, null).display=="block" && window.getComputedStyle(co18, null).display=="block"){
            document.getElementById("win").innerHTML="Player O Won";
            document.getElementById("reset").style.display="block";
            sound.play();
        }
        else if((window.getComputedStyle(cr1,null).display=="block"||window.getComputedStyle(co2,null).display=="block")&&(window.getComputedStyle(cr2,null).display=="block"||window.getComputedStyle(co4,null).display=="block")&&
(window.getComputedStyle(cr3,null).display=="block"||window.getComputedStyle(co6,null).display=="block")&&(window.getComputedStyle(cr4,null).display=="block"||window.getComputedStyle(co8,null).display=="block")&&
(window.getComputedStyle(cr5,null).display=="block"||window.getComputedStyle(co10,null).display=="block")&&(window.getComputedStyle(cr6,null).display=="block"||window.getComputedStyle(co12,null).display=="block")&&
(window.getComputedStyle(cr7,null).display=="block"||window.getComputedStyle(co14,null).display=="block")&&(window.getComputedStyle(cr8,null).display=="block"||window.getComputedStyle(co16,null).display=="block")&&
(window.getComputedStyle(cr9,null).display=="block"||window.getComputedStyle(co18,null).display=="block")){
    document.getElementById("win").innerHTML="Match drawn";
    document.getElementById("reset").style.display="block";
}

document.getElementById("res").addEventListener("click",function(){
    location.reload();
    sound.pause();

})
    }, 200);
})
sound1.play();
setTimeout(() => {
    sound1.pause();
}, 2000);

}

tic();

