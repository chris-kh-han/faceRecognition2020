(this["webpackJsonpface-recognition"]=this["webpackJsonpface-recognition"]||[]).push([[0],{33:function(t,e,n){},71:function(t,e,n){},72:function(t,e,n){},73:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(2),a=n(13),s=n.n(a),o=(n(33),n(9)),r=n(14),l=n.n(r);var b=function(){return Object(c.jsx)("nav",{className:"flex justify-end",children:Object(c.jsx)("p",{className:"f3 link dim black underline pa3 pointer tr",children:"Sign out"})})},j=n(27),u=n.n(j);n(71);var d=function(){return Object(c.jsx)("div",{className:"ma4 mt0",children:Object(c.jsx)(u.a,{className:"Tilt shadow-2 br2",options:{max:45},style:{height:150,width:150},children:Object(c.jsx)("div",{className:"Tilt-inner flex justify-center pt3",children:Object(c.jsx)("img",{alt:"brain",src:"https://img.icons8.com/carbon-copy/100/000000/brain.png"})})})})};n(72);var m=function(t){var e=t.inputChange,n=t.submitImg;return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:"f3",children:"PASTE IMG SRC INSIDE OF BOX"}),Object(c.jsx)("div",{className:"flex justify-center",children:Object(c.jsxs)("div",{className:"form pa4 br3 shadow-5",children:[Object(c.jsx)("input",{className:"f5 pa2 w-70 center",type:"text",onChange:e}),Object(c.jsx)("button",{className:"w-30 grow f5 link ph3 pv2 dib white bg-light-purple ",onClick:n,children:"Detect"})]})})]})};n(73);var h=function(t){var e=t.faceBox,n=t.imgSrc;return Object(c.jsx)("div",{className:"flex justify-center ma",children:Object(c.jsxs)("div",{className:"absolute mt2",children:[Object(c.jsx)("img",{id:"img",src:n,alt:"",width:"400px",height:"auto"}),Object(c.jsx)("div",{className:"bounding-box",style:{top:e.topRow,right:e.rightCol,bottom:e.bottomRow,left:e.leftCol}})]})})},f=new l.a.App({apiKey:"".concat("ecbd0f0619bd438bba7ae235b4186a5b")});var p=function(){var t=Object(i.useState)(""),e=Object(o.a)(t,2),n=e[0],a=e[1],s=Object(i.useState)(""),r=Object(o.a)(s,2),j=r[0],u=r[1],p=Object(i.useState)({}),g=Object(o.a)(p,2),x=g[0],O=g[1],v=function(t){var e=document.getElementById("img"),n=Number(e.width),c=Number(e.height);O({topRow:c*t.top_row,bottomRow:c-c*t.bottom_row,leftCol:n*t.left_col,rightCol:n-n*t.right_col})};return Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)(b,{}),Object(c.jsx)(d,{}),Object(c.jsx)(m,{inputChange:function(t){a(t.target.value)},submitImg:function(){f.models.initModel({id:l.a.FACE_DETECT_MODEL}).then((function(t){return t.predict(n)})).then((function(t){var e=t.outputs[0].data.regions[0].region_info.bounding_box;v(e)})),u(n)}}),Object(c.jsx)(h,{faceBox:x,imgSrc:j})]})};s.a.render(Object(c.jsx)(p,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.64d4a685.chunk.js.map