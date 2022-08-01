window.addEventListener('load',function(){
    var scarch = this.document.querySelector(".scarch");
    scarch.onmouseover=function(){
        // scarch.querySelector("input").style.border='red';
        var btn = document.querySelector(".btn");
        btn.querySelector(".creater").style.display='none';
        btn.querySelector(".c_down").style.display='none';
        scarch.style.width=394.8+"px";
        scarch.querySelector("input").style.width=340+"px";
        scarch.querySelector("input")[0].border="1.5px solid rgb(30,128,255)";
    }
    scarch.onclick=function(){
        var btn = document.querySelector(".btn");
        btn.querySelector(".creater").style.display='none';
        btn.querySelector(".c_down").style.display='none';
        scarch.style.width=394.8+"px";
        scarch.querySelector("input").style.width=340+"px";
        scarch.querySelector("input")[0].border="1.5px solid rgb(30,128,255)";
    }
    this.document.onclick=function(){
        var btn = document.querySelector(".btn");
        btn.querySelector(".creater").style.display='block';
        btn.querySelector(".c_down").style.display='block';
        scarch.style.width=254+"px";
        scarch.querySelector("input").style.width=200+"px";
        scarch.querySelector("input")[0].border="1.5px solid rgb(30,128,255)";
    }
    // scarch.onmouseout=function(){
        
    // }
    







    //轮播图部分
    var show = document.querySelector(".show");//获取轮播图大盒子
    var imglist = document.querySelector('.imglist');//获取轮播图ul
    var lis = imglist.querySelectorAll('li');
    var imglong = lis.length;//获取图片个数
    var up = document.querySelector(".up");//右滚动按钮
    var down = document.querySelector(".down");//左滚动按钮
    var index=1;//图片下标

    //在imglist末尾添加第一个li//
    var first = imglist.children[0].cloneNode(true);
    imglist.appendChild(first);

    var flag = true;//节流阀标识
    //向右滚动
    up.onclick=function(){
        if(flag)
        {
            flag=false;
            if(imglist.offsetLeft==(165-imglong*755))
            {
                index=1;
                move(imglist,'left',-590,40,function(){
                    flag=true;
                });
                console.log('index='+index);
            }
            else{
                index++;
                var culeft =imglist.offsetLeft;
                console.log(culeft);
                move(imglist,'left',culeft-755,40,function(){
                    flag=true;
                });
                console.log('index='+index);
            }
        }
    };
    //向左滚动
    down.onclick=function(){
        if(flag)
        {
            flag=false;
            if(imglist.offsetLeft==165)
            {
                    index=0;
                    move(imglist,'left',-590,40,function(){
                        flag=true;
                    });
                    console.log('index='+index);
            }else{
                    index--;
                    var culeft =imglist.offsetLeft;
                    console.log(culeft);
                    console.log('index='+index);
                    move(imglist,'left',culeft+755,40,function(){
                        flag=true;
                });
            };
        };   
    };






    
});

