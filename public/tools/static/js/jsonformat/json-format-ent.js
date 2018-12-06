var JsonFormatEntrance=(function(){var r,o,n,i,g,k=JsonFormatDealer,l=+(new Date()),q,u,b,v;var j=function(B){switch(B[0]){case"NOT JSON":o.style.display="";r.innerHTML='<span class="x-json-tips">JSON不合法，请检查：</span>';b=+(new Date());break;case"FORMATTING":u=+(new Date());clearTimeout(g);var y=document.getElementById("optionBar");if(y){y.parentNode.removeChild(y)}y=document.createElement("div");y.id="optionBar";var A=document.createElement("button"),x=document.createElement("button");A.id="buttonFormatted";A.innerText="格式化";A.classList.add("selected");x.id="buttonCollapseAll";x.innerText="折叠所有";var z=false;A.addEventListener("click",function(){if(z){z=false;o.style.display="none";r.style.display="";$(this).text("元数据")}else{z=true;o.style.display="";r.style.display="none";$(this).text("格式化")}$(this).parent().find("button").removeClass("selected");$(this).addClass("selected")},false);x.addEventListener("click",function(){if(!z){if(x.innerText=="折叠所有"){x.innerText="展开所有";e(document.getElementsByClassName("objProp"))}else{x.innerText="折叠所有";c(document.getElementsByClassName("objProp"))}$(this).parent().find("button").removeClass("selected");$(this).addClass("selected")}},false);y.appendChild(A);y.appendChild(x);document.addEventListener("click",m,false);r.parentNode.appendChild(y);break;case"FORMATTED":i.style.display="";r.innerHTML=B[1];v=+(new Date());break;default:throw new Error("Message not understood: "+B[0])}};var t=0;function e(B){var z,y,x,A;for(y=B.length-1;y>=0;y--){z=B[y];z.classList.add("collapsed");if(!z.id){z.id="kvov"+(++t);x=z.firstElementChild;while(x&&!x.classList.contains("blockInner")){x=x.nextElementSibling}if(!x){continue}A=x.children.length;var C=A+(A===1?" item":" items");n.insertAdjacentHTML("beforeend","\n#kvov"+t+'.collapsed:after{color: #aaa; content:" // '+C+'"}')}}}function c(y){for(var x=y.length-1;x>=0;x--){y[x].classList.remove("collapsed")}}var h=navigator.platform.indexOf("Mac")!==-1,d;if(h){d=function(x){return x.metaKey}}else{d=function(x){return x.ctrlKey}}function m(A){if(A.which===1){var z=A.target;if(z.className==="e"){A.preventDefault();var y=z.parentNode,E=r,x=document.body.offsetHeight,C=document.body.scrollTop,B;if(y.classList.contains("collapsed")){if(d(A)){c(y.parentNode.children)}else{c([y])}}else{if(d(A)){e(y.parentNode.children)}else{e([y])}}E.style.marginBottom=0;if(document.body.offsetHeight<window.innerHeight){return}if(document.body.scrollTop===C){return}var D=C-document.body.scrollTop+8;E.style.marginBottom=D+"px";document.body.scrollTop=C;return}}}var f=function(x){j(x)};var w=function(){};var s=function(x){r=document.getElementById("jfContent");if(!r){r=document.createElement("div");r.id="jfContent";document.body.appendChild(r)}r.style.display="";o=document.getElementById("jfContent_pre");if(!o){o=document.createElement("pre");o.id="jfContent_pre";document.body.appendChild(o)}o.innerHTML=JSON.stringify(JSON.parse(x),null,4);o.style.display="none";n=document.getElementById("jfStyleEl");if(!n){n=document.createElement("style");document.head.appendChild(n)}i=document.getElementById("formattingMsg");if(!i){i=document.createElement("pre");i.id="formattingMsg";i.innerHTML='<svg id="spinner" width="16" height="16" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M 150,0 a 150,150 0 0,1 106.066,256.066 l -35.355,-35.355 a -100,-100 0 0,0 -70.711,-170.711 z" fill="#3d7fe6"></path></svg> 格式化中...';document.body.appendChild(i)}k.postMessage({type:"SENDING TEXT",text:x,length:x.length});a(JSON.parse(x))};var a=function(x){try{window.webkitRequestFileSystem(window.TEMPORARY,10*1024*1024,function(z){var B=(+new Date).toString(36);var A=+new Date()+".json";z.root.getDirectory(B,{create:true},function(D){var C=B+"/"+A;z.root.getFile(C,{create:true},function(E){E.createWriter(function(G){G.onwriteend=function(){$("#optionBar").prepend('<a href="'+E.toURL()+'" id="btnDownload" target="_blank" title="在新页面Ctrl+S保存到本地">下载JSON数据</a>')};var F=new Blob([JSON.stringify(x,null,4)],{type:"application/octet-stream"});G.write(F)})})})})}catch(y){}};var p=function(){try{r.innerHTML="";o.innerHTML=""}catch(x){}};return{format:s,clear:p,postMessage:f,disconnect:w}})();