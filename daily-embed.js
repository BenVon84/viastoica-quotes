(function(){
var DATA="https://cdn.jsdelivr.net/gh/BenVon84/viastoica-quotes@main/daily-quotes.js";
function run(){
var items=window.VS_DAILY.map(function(r){return {q:r[0],a:r[1],s:r[2],t:r[3]};}),N=items.length;
function rng(seed){return function(){var t=seed+=0x6D2B79F5;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};}
var r=rng(2026),o=items.map(function(_,i){return i;});
for(var i=N-1;i>0;i--){var j=Math.floor(r()*(i+1));var x=o[i];o[i]=o[j];o[j]=x;}
var d=new Date(),n=Math.floor((Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())-Date.UTC(2026,0,1))/864e5);
var el=document.querySelectorAll(".vs-daily");
Array.prototype.forEach.call(el,function(e){
var th=e.getAttribute("data-theme")||"";
var pool=th?items.filter(function(it){return it.t.indexOf(th)>-1;}):null;
var it=pool&&pool.length?pool[((n%pool.length)+pool.length)%pool.length]:items[o[((n%N)+N)%N]];
e.innerHTML="";
var b=document.createElement("div");
b.style.cssText="font-family:Georgia,serif;max-width:420px;padding:1.2em;border-radius:12px;background:#2c3e48;color:#fff";
var q=document.createElement("p");q.style.cssText="margin:0 0 .8em;font-style:italic;font-size:1.1em;line-height:1.45";q.textContent="“"+it.q+"”";
var a=document.createElement("p");a.style.cssText="margin:0;font-weight:bold";a.textContent=it.a;
var s=document.createElement("p");s.style.cssText="margin:.2em 0 0;font-size:.85em;color:#b8c4cc";s.textContent=it.s;
var l=document.createElement("p");l.style.cssText="margin:1em 0 0;font-size:.75em;text-align:right";
var k=document.createElement("a");k.href="https://viastoica.com/daily-stoic-quotes/";k.target="_blank";k.rel="noopener";k.style.color="#d8bf3a";k.textContent="Daily Stoic Quotes by Via Stoica";
l.appendChild(k);b.appendChild(q);b.appendChild(a);b.appendChild(s);b.appendChild(l);e.appendChild(b);
});
}
if(window.VS_DAILY){run();}else{var sc=document.createElement("script");sc.src=DATA;sc.onload=run;document.head.appendChild(sc);}
})();
