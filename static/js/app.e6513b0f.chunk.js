(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var r=n(3),o=n.n(r),i=n(4),a=n.n(i),c=n(39),u=n.n(c),l=n(100),s=n(43),d=n(10),f=n(8),j=n(26),b=n(14),y=n(41),p=n(88),O=n(62),h=n(101),g=n(74),x="black",v="#3a3d40",m=n(0),w=n(145),S=n(5);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(){var e=Object(m.useState)(!0),t=u()(e,2),n=t[0],r=t[1],i=Object(m.useState)(""),c=u()(i,2),f=c[0],x=c[1],P=Object(m.useState)({}),k=u()(P,2),z=k[0],C=k[1],E=function(){var e=a()((function*(){try{yield s.default.setItem("@domain",JSON.stringify(!n))}catch(e){alert("Saving Error...")}r(!1),O.default.dismiss(),x("")}));return function(){return e.apply(this,arguments)}}(),I=function(){var e=a()((function*(){try{yield s.default.setItem("@domain",JSON.stringify(!n))}catch(e){alert("Saving Error...")}r(!0),O.default.dismiss(),x("")}));return function(){return e.apply(this,arguments)}}(),J=function(){var e=a()((function*(e){try{var t=JSON.stringify(e);yield s.default.setItem("@todos",t)}catch(n){alert("Saving Error...")}}));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=a()((function*(){var e=yield s.default.getItem("@todos");e&&C(JSON.parse(e));var t=yield s.default.getItem("@domain");t&&r(JSON.parse(t))}));return function(){return e.apply(this,arguments)}}();Object(m.useEffect)((function(){N()}),[]);var W=function(){var e=a()((function*(){if(""!==f){var e=T(T({},z),{},o()({},Date.now(),{text:f,working:n,done:!1}));C(e),yield J(e),x("")}}));return function(){return e.apply(this,arguments)}}(),H=function(){var e=a()((function*(e){if("web"===d.default.OS){if(confirm("Do you want to delete this To Do?")){var t=T({},z);delete t[e],C(t),J(t)}}else g.default.alert("Delete To Do","Are you sure?",[{text:"Cancel"},{text:"I'm sure",style:"destructive",onPress:function(){var t=T({},z);delete t[e],C(t),J(t)}}])}));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)(b.default,{style:D.container,children:[Object(S.jsx)(l.StatusBar,{style:"auto"}),Object(S.jsxs)(b.default,{style:D.header,children:[Object(S.jsx)(y.default,{onPress:I,children:Object(S.jsx)(j.default,{style:T(T({},D.btnText),{},{color:n?"white":v}),children:"Work"})}),Object(S.jsx)(y.default,{onPress:E,children:Object(S.jsx)(j.default,{style:T(T({},D.btnText),{},{color:n?v:"white"}),children:"Travel"})})]}),Object(S.jsxs)(b.default,{children:[Object(S.jsx)(p.default,{onSubmitEditing:W,onChangeText:function(e){return x(e)},returnKeyType:"done",value:f,placeholderTextColor:"grey",placeholder:n?"Add a To Do":"Where do you wanna go?",style:D.input}),Object(S.jsx)(h.default,{children:z&&Object.keys(z).map((function(e){return z[e].working===n?Object(S.jsxs)(b.default,{style:D.todo,children:[Object(S.jsx)(j.default,{style:D.todoText,children:z[e].text}),Object(S.jsx)(y.default,{onPress:function(){return function(e){var t=z[e].done,n=T({},z);n[e]=T(T({},n[e]),{},{done:!t}),C(n),J(n)}(e)},children:Object(S.jsx)(w.default,{name:"check",size:18,color:z[e].done?"green":"gray"})}),Object(S.jsx)(y.default,{onPress:function(){},children:Object(S.jsx)(w.default,{name:"eraser",size:18,color:"gray"})}),Object(S.jsx)(y.default,{onPress:function(){return H(e)},children:Object(S.jsx)(w.default,{name:"trash",size:18,color:"gray"})})]},e):null}))})]})]})}var D=f.default.create({container:{flex:1,backgroundColor:x,paddingHorizontal:20},header:{justifyContent:"space-between",flexDirection:"row",marginTop:100},btnText:{fontSize:"40%",fontWeight:"600"},input:{backgroundColor:"white",paddingVertical:15,paddingHorizontal:20,borderRadius:30,marginVertical:"5%",fontSize:15},todo:{backgroundColor:v,marginBottom:10,paddingVertical:20,paddingHorizontal:20,borderRadius:15,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},todoText:{color:"white",fontSize:16,fontWeight:"500"}})},104:function(e,t,n){e.exports=n(137)}},[[104,1,2]]]);
//# sourceMappingURL=app.e6513b0f.chunk.js.map