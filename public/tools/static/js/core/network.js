baidu.namespace.register("baidu.network");baidu.network=(function(){var d=function(f,h){var g=new XMLHttpRequest();g.onreadystatechange=function(){if(g.readyState===4){var i;if(g.status===200&&g.responseText){i={success:true,type:FILE.LINK,path:f,content:g.responseText}}else{i={success:false,type:FILE.LINK,path:f,content:"FcpHelper can't load such file."}}h(i)}};g.open("GET",f,true);g.setRequestHeader("Content-Type","text/plain;charset=UTF-8");g.setRequestHeader("Access-Control-Allow-Origin","*");g.send()};var a=function(f){return"http"+(f.secure?"s":"")+"://"+f.domain+f.path};var c=function(g,h){var f=[];chrome.cookies.getAll({},function(l){for(var k=0,j=l.length;k<j;k++){if(g.url.indexOf(l[k].domain.substring(1))>-1){l[k].url=a(l[k]);f.push(l[k])}}l.sort(function(m,i){return m.domain.localeCompare(i.domain)});h.call(null,{cookie:f})})};var e=function(f,g){chrome.cookies.getAll({},function(m){for(var l=0,k=m.length;l<k;l++){var j=a(m[l]);var h=m[l].name;if(j==f.url&&h==f.name){chrome.cookies.remove({url:j,name:h});if(g&&typeof g=="function"){g.call(null)}return}}})};var b=function(f,g){chrome.cookies.getAll({},function(m){for(var l=0,k=m.length;l<k;l++){var j=a(m[l]);var h=m[l].name;if(j==f.url&&h==f.name){chrome.cookies.set(f);if(g&&typeof g=="function"){g.call(null)}return}}})};return{readFileContent:d,getCookies:c,removeCookie:e,setCookie:b}})();