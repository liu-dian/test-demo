(function(){
    // 得到元素
    var carousel_list=document.getElementById('carousel_list');
    var leftbtn=document.getElementById('leftbtn');
    var rightbtn=document.getElementById('rightbtn');
    // 克隆第一张li
    var clone_li=carousel_list.firstElementChild.cloneNode(true);
    // 上树
    carousel_list.appendChild(clone_li)
    // 当前图片序号
    var idx=0;
    // 右按钮事件监听
    rightbtn.onclick=function(){
        idx++;
        carousel_list.style.transition='transform .5s ease 0s';
        carousel_list.style.transform='translateX('+-16.66*idx+'%)';
        if(idx>4){
            setTimeout(function(){
                // 去掉过渡
                carousel_list.style.transition='none';
                // 删除transform属性
                carousel_list.style.transform="none";
                idx=0;
            },500)
        }
    }
    // 左按钮事件监听
    leftbtn.onclick=function(){
        if(idx==0){
            carousel_list.style.transition='none';
            carousel_list.style.transform='translateX('+-16.66*5+'%)';
            idx=4;
        }
    }
})();