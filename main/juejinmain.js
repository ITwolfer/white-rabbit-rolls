window.addEventListener('load',function(){
    var show = document.querySelector(".show");
    var imglist = document.querySelector('.imglist');
    var lis = imglist.querySelectorAll('li');
    var imglong = lis.length;
    var up = document.querySelector(".up");
    var down = document.querySelector(".down");
    // console.log(imglong);
    var index=1;
    var timer;


    //在imglist末尾添加第一个li//
    // console.log(window.getComputedStyle(imglist).width+'qian');
    var first = imglist.children[0].cloneNode(true);
    imglist.appendChild(first);
    // console.log(window.getComputedStyle(imglist).width+'hou');

    var index=1;
    var count = 1;
    function autochange(){
        timer=setInterval(function(){
            count++;

        })
    }


    
    up.onclick=function(){
        if(imglist.offsetLeft==(165-imglong*755))
        {
            index=1;
            move(imglist,'left',-590,40);
            console.log('index='+index);
        }
        else{
            index++;
            var culeft =imglist.offsetLeft;
            console.log(culeft);
            console.log('index='+index);
            move(imglist,'left',culeft-755,40);
        }
        
    };
    down.onclick=function(){
       if(imglist.offsetLeft==165)
       {
            index=0;
            move(imglist,'left',-590,40);
            console.log('index='+index);
       }
       else{
            index--;
            var culeft =imglist.offsetLeft;
            console.log(culeft);
            console.log('index='+index);
            move(imglist,'left',culeft+755,40);

       }
    };
    
});

