(this["webpackJsonpword-count"]=this["webpackJsonpword-count"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),o=n.n(l),i=(n(13),n(2)),c=n(3),u=n(5),h=n(4),d=n(1);function s(e){return Math.floor(Math.random()*Math.floor(e))}var m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={text:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(c.a)(n,[{key:"handleChange",value:function(e){this.setState({text:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this.state.text,n=(t.replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g,""),function(e){e=e.split(" ");for(var t={},n=[],a=0;a<e.length;a++){var r=e[a].toLowerCase();void 0===t[r]?(t[r]=1,n.push(r)):t[r]++}return n.sort((function(e,n){return t[n]-t[e]})),[n,t]}(t.replace("the","").replace(/\n/g," ").toLocaleLowerCase()));!function(e,t){for(var n=["the","i","to","and","of","my","in","a","is","you","this","it","his","not","but","","be","me","he","your","with","for","let","on","what","are","if","him","from","will","have","by","shall","do","would","thy","our","how","their","they","am","very","so","more","good","come"],a=document.getElementById("#myCanvas").getContext("2d"),r=1,l=0;l<e.length;l++)if(!n.includes(e[l])){var o=3*t[e[l]];r=t[e[l]]/30,a.font="bold ".concat(o,"px Impact"),a.fillStyle="rgb(0,77,154, ".concat(r," )"),a.fillText(e[l],s(960-a.measureText(e[l]).width),s(600))}}(n[0],n[1]),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"vis"},r.a.createElement("canvas",{id:"#myCanvas",width:"960",height:"600",style:{border:"#333 10px solid"}})),r.a.createElement("div",{id:"f"},r.a.createElement("form",{id:"form"},r.a.createElement("label",null,"Paste Your Text",r.a.createElement("br",null),r.a.createElement("textarea",{id:"textArea",value:this.state.text,onChange:this.handleChange,spellCheck:"false",rows:"10",cols:"60"}),r.a.createElement("br",null)),r.a.createElement("button",{id:"count",type:"submit",onClick:this.handleSubmit},"Count!"))))}}]),n}(a.Component),f=(n(14),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"title"},r.a.createElement("h1",null,"Word Count"),r.a.createElement(m,null))}}]),n}(a.Component));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.0ed690c6.chunk.js.map