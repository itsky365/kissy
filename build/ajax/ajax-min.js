/*
Copyright 2010, KISSY UI Library v1.1.0
MIT Licensed
build time: Aug 2 23:52
*/
KISSY.add("ajax",function(e){var f=document,g=f.createElement("script").readyState?function(a,b){a.onreadystatechange=function(){var c=a.readyState;if(c==="loaded"||c==="complete"){a.onreadystatechange=null;b.call(this)}}}:function(a,b){a.onload=b};e.mix(e,{getScript:function(a,b,c){var h=e.get("head")||f.documentElement,d=f.createElement("script");d.src=a;if(c)d.charset=c;d.async=true;e.isFunction(b)&&g(d,b);h.appendChild(d)}})});
