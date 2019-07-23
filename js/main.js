function banner(){
    var container =document.getElementById("banner");
    var img =container.getElementsByTagName("img")[0];
    var spans=container.getElementsByTagName("span");
    var bannerBg=document.getElementById("banner-bg");
    var timer;
    animate();
    move();
   

    function animate(i){//图片地址改变
        i?i=i:i=1;
       
        timer= window.setInterval(function(){
            img.src="img/"+i+".png"
            for(let j=0;j<spans.length;j++){//小方块颜色对应变化
                if(j+1==i){
                    spans[j].className ="spans";
                    bannerBg.className ="banner-bg"+j;
                }else{
                    spans[j].className="";
                  
                }
            }
                i++;
                if(i>=7){
                    i=1;
                }
        },2000);
    } 
    function move(){ //点击小方块时的事件
        for(let n=0;n<spans.length;n++){//循环给每个小方块绑定事件
            spans[n].onclick =function(){//事件触发
                window.clearInterval(timer);//清除原有的定时器；
                window.setTimeout(function(){//设置一个一次定时器让图片马上移动到目标位置
                    img.src="img/"+(n+1)+".png"
                    for(let j=0;j<spans.length;j++){//小方块颜色对应变化
                        if(j==n){
                            spans[j].className ="spans";
                            bannerBg.className ="banner-bg"+j;
                        }else{
                            spans[j].className="";
                        }
                    }
                },10)
                 animate(n+1)//让图片再次动起来；
            }
        }
    }
}

function createList(){
   
    var array =[["女装","内衣"],["男装","运动户外"],["女鞋","男鞋","箱包"],
    ["美妆","个人护理"],["腕表","眼镜","珠宝饰品"],["手机","数码","电脑办公"],
    ["母婴玩具"],["零食","茶酒","进口食品"],["生鲜水果"],["大家电","生活电器"],
    ["家具建材"],["汽车","配件","用品"],["家纺","家饰","鲜花"],["医药保健"],
    ["厨具","收纳","宠物"],["图书音像"]]
    var list = document.getElementById("list");
    for(var i=0;i<array.length;i++){
        var ul=document.createElement("ul");
        for(var j=0;j<array[i].length;j++){
          var li=document.createElement("li");
          if(j>0&&j<array[i].length){//判断“/”的插入位置0和最后一个位置不可以有“/”
			var _li1 =document.createElement("li")
				_li1.innerText ="/"
				ul.appendChild(_li1)
			}
          li.innerHTML='<a href="#">'+array[i][j]+'</a>' ;
          ul.appendChild(li);
        }
        list.appendChild(ul);
    }
}





document.addEventListener('DOMContentLoaded',function(){
    banner();
    createList();
},false)