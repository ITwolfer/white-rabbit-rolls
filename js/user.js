
window.onload=function(){
    var act = document.querySelector(".act");
    var art = document.querySelector(".art");
    var frin = document.querySelector(".frin");
    var secn = document.querySelector(".secn");
    frin.onclick=function(){
        art.style.display='none';
        act.style.display='block';
    }
    secn.onclick=function(){
        act.style.display='none';
        art.style.display='block';
    }
}