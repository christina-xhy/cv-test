parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),a="/*你好，我是christina\n* 接下来我演示一下我的前端技能\n* 首先我要准备一个div\n**/\n#div1{\n    width: 200px;\n    height: 200px;\n}\n/*\n* 接下来我要把div变成一个八卦图\n* 注意看好了\n* 首先，把div变成一个圆\n**/\n#div1{\n    border-radius:50%;\n    box-shadow:0 0 3px rgba(0,0,0,0.5);\n    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(12,2,2,1) 100%);\n}\n\n/* 八卦是阴阳形成的\n* 一黑一白\n**/\n/*\n接下来加两个神秘的图形 **/\n#div1::before{\n    width:100px;\n    height:100px;\n    left:50%;\n    top:0%;\n    border-radius:50%;\n    left:50%;\n    transform:translateX(-50%);\n    background:#000;\n    background:radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(12,2,2,1) 25%);\n    \n}\n#div1::after{\n    width:100px;\n    height:100px;\n    left:50%;\n    bottom:0%;\n    border-radius:50%;\n    left:50%;\n    transform:translateX(-50%);\n    background:#fff;\n    background:radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(12,2,2,1) 24%, rgba(255,255,255,1) 24%);\n}\n",e="",t=0,i=function i(){setTimeout(function(){"\n"===a[t]?e+="<br>":" "===a[t]?e+="&nbsp;":(n.innerHTML=e,r.innerHTML=a.substring(0,t),window.scrollTo(0,99999),n.scrollTo(0,99999),e+=a[t]),t<=a.length-1&&(t+=1,i())},10)};i();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.ada29723.map