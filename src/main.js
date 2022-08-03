let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string = `/*你好，我是christina
* 接下来我演示一下我的前端技能
* 首先我要准备一个div
**/
#div1{
    width: 200px;
    height: 200px;
}
/*
* 接下来我要把div变成一个八卦图
* 注意看好了
* 首先，把div变成一个圆
**/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(12,2,2,1) 100%);
}

/* 八卦是阴阳形成的
* 一黑一白
**/
/*
接下来加两个神秘的图形 **/
#div1::before{
    width:100px;
    height:100px;
    left:50%;
    top:0%;
    border-radius:50%;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    background:radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(12,2,2,1) 25%);
    
}
#div1::after{
    width:100px;
    height:100px;
    left:50%;
    bottom:0%;
    border-radius:50%;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    background:radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(12,2,2,1) 24%, rgba(255,255,255,1) 24%);
}
`;
let string2 = '';
// string = string.replace(/\n/g,'<br>'),正则表达式替换所有空格换行
//string = string.replace(/\n/g,'<br>'),弊端是会出现一个<.
let n = 0;
let step = () => {
    setTimeout(() => {
   
        // 用string2 函数来解决多出的 < 括号。
        if (string[n] === '\n'){
            string2 += '<br>';//如果是回车就改为<br>；
        } else if(string[n]=== ' '){
            string2 += '&nbsp;' // html空格改为&nbsp;
        }else {
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
          string2 += string[n];//如果不是，就照搬。
        }
        if(n <= string.length-1){
        n += 1;
        step();
        }
    },10);
};
step();





