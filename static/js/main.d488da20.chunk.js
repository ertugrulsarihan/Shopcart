(this.webpackJsonpnewwork=this.webpackJsonpnewwork||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(3),r=c(2),a=c.n(r),i=c(28),s=c.n(i),o=(c(40),c(25)),d=c(24),l=c(12),j=c(13),u=c(15),b=c(14),h={product:[{id:1,productid:0,productname:"3 x Cola 330ml",seourl:"Cola",img:"https://www.coca-coladukkani.com/images/thumbs/0000993_coca-cola-nostaljik-sise-seti.jpeg",price:2,count:1,info:"Coca-Cola, or Coke, is a carbonated soft drink manufactured by The Coca-Cola Company. Originally marketed as a temperance drink and intended as a patent medicine, it was invented in the late 19th century by John Stith Pemberton."},{id:2,productid:0,productname:"1 x Cola 330ml",seourl:"Cola",img:"https://centaavm.com/upload/urunler/86903400.jpg",price:2,count:1,info:"Pepsi, or Coke, is a carbonated soft drink manufactured by The Pepsi Company. Originally marketed as a temperance drink and intended as a patent medicine, it was invented in the late 19th century by John Stith Pemberton."},{id:3,productid:0,productname:"1 x Beer 500ml",seourl:"Efes",img:"https://st3.myideasoft.com/idea/fx/15/myassets/products/144/1.jpg?revision=1587479381",price:4,count:1,info:"\u0130ts just a beer."}],cart:[]},O=a.a.createContext(),x=function(e){Object(u.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(l.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={items:h.items,product:h.product,cart:h.cart,prices:0},e.deleteMe=function(t){if(window.confirm("Are you sure?")){var c=e.state.cart;c.forEach((function(e,n){e.id===t.id&&c.splice(n,1)})),e.setState({cart:c}),e.getTotal()}},e.reduction=function(t){var c=e.state.cart;c.forEach((function(e){e.id===t.id&&(1===e.count?e.count=1:e.count-=1)})),e.setState({cart:c}),e.getTotal()},e.increment=function(t){var c=e.state.cart;c.forEach((function(e){e.id===t.id&&e.count++})),e.setState({cart:c}),e.getTotal()},e.getTotal=function(){var t=e.state.cart.reduce((function(e,t){return e+t.price*t.count}),0);e.setState({prices:t})},e.addMe=function(t){var c=e.state,n=c.product,r=c.cart,a=c.prices+t.price;if(r.every((function(e){return e.id!==t.id}))){var i=n.filter((function(e){return e.id===t.id}));e.setState({cart:[].concat(Object(d.a)(r),Object(d.a)(i))}),e.setState({prices:a})}else alert("The product has been added to cart.")},e}return Object(j.a)(c,[{key:"render",value:function(){return Object(n.jsx)(O.Provider,{value:Object(o.a)(Object(o.a)({},this.state),{},{deleteMe:this.deleteMe,addMe:this.addMe,increment:this.increment,reduction:this.reduction}),children:this.props.children})}}]),c}(r.Component),p=O.Consumer,m=c(48),f=c(49),v=c(32),g=c(16),y=c(30),k=c(31),C=c(50),w=c(51),N=c(52),P=c(53),S=function(e){Object(u.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(n.jsx)(m.a,{children:Object(n.jsx)(f.a,{children:Object(n.jsx)("div",{className:"col-12",children:Object(n.jsxs)(C.a,{color:"light",light:!0,expand:"md",children:[Object(n.jsx)(g.b,{to:"/",children:Object(n.jsx)(y.a,{color:"green",size:"30px"})}),Object(n.jsx)(w.a,{className:"mr-auto",navbar:!0,children:Object(n.jsx)(N.a,{children:Object(n.jsx)(P.a,{href:"https://github.com/ertugrulsarihan",children:Object(n.jsx)(k.a,{style:{position:"relative",left:"33px"},color:"green",size:"33px"})})})}),Object(n.jsx)(p,{children:function(e){var t=e.cart.length;return Object(n.jsxs)(g.b,{to:"/cart",children:[Object(n.jsx)(v.a,{style:{position:"relative"},color:"green",size:"30px"}),t]})}}),Object(n.jsx)("p",{className:"success",children:this.props.count})]})})})})}}]),c}(r.Component),T=c(58),M=c(33),E=c(54),z=c(55),F=c(56),J=c(57),B=function(e){Object(u.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(n.jsx)(p,{children:function(e){var t=e.product;return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(f.a,{children:t.map((function(t){return Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsxs)(E.a,{children:[Object(n.jsx)(z.a,{children:Object(n.jsx)(F.a,{tag:"h5",children:t.productname})}),Object(n.jsx)("img",{src:t.img,className:"img-fluid",alt:"..."}),Object(n.jsxs)(z.a,{children:[Object(n.jsx)(J.a,{children:t.seourl}),Object(n.jsxs)(T.a,{block:!0,color:"danger",children:[t.price,"$"]}),Object(n.jsx)(T.a,{block:!0,onClick:function(){return e.addMe(t)},color:"success",children:Object(n.jsx)(M.a,{size:"25px"})})]})]},t.id)})}))})})}})}}]),c}(r.Component),L=c(60),A=c(34),I=c(59),$=function(e){Object(u.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(n.jsx)(p,{children:function(e){var t=e.cart;return Object(n.jsxs)(I.a,{children:[Object(n.jsx)(L.a,{children:Object(n.jsxs)("div",{class:"d-flex justify-content-end",children:[Object(n.jsxs)("button",{className:"btn btn-primary",children:["Price =",e.prices,"$"]}),Object(n.jsx)("button",{className:"btn btn-success",children:"Payment"})]})}),Object(n.jsx)(L.a,{children:Object(n.jsx)("div",{className:"col-12",children:t.map((function(t){return Object(n.jsx)("div",{class:"card mb-3",style:{maxWidth:"540px"},children:Object(n.jsxs)("div",{class:"row g-0",children:[Object(n.jsx)("div",{class:"col-md-4",children:Object(n.jsx)("img",{style:{height:"280px",width:"200px"},className:"",src:t.img,alt:"..."})}),Object(n.jsx)("div",{class:"col-md-8",children:Object(n.jsxs)("div",{class:"card-body",children:[Object(n.jsx)("h5",{class:"card-text",children:t.productname}),Object(n.jsx)("p",{class:"card-text",children:t.info}),Object(n.jsx)(L.a,{children:Object(n.jsxs)("div",{className:"d-flex justify-content-end btn-inc",children:[Object(n.jsx)(T.a,{onClick:function(){return e.deleteMe(t)},color:"danger",children:Object(n.jsx)(A.a,{})}),Object(n.jsx)("button",{onClick:function(){return e.reduction(t)},className:"btn btn-primary",children:"-"}),Object(n.jsx)("div",{style:{width:"100px"},className:"text-center",children:Object(n.jsx)("h4",{children:t.count})}),Object(n.jsx)("button",{onClick:function(){return e.increment(t)},className:"btn btn-primary",children:"+"})]})})]})})]})},t.id)}))})})]})}})}}]),c}(r.Component),D=c(8),W=(c(46),function(e){Object(u.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(n.jsx)(x,{children:Object(n.jsx)(g.a,{children:Object(n.jsx)(D.c,{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(S,{}),Object(n.jsx)(f.a,{children:Object(n.jsx)(D.a,{path:"/cart",children:Object(n.jsx)($,{})})}),Object(n.jsxs)(D.a,{exact:!0,path:"/",children:[Object(n.jsx)("div",{className:"row w-100"}),Object(n.jsx)(f.a,{children:Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)(B,{title:"ProductList"})})})]})]})})})})}}]),c}(r.Component)),_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))};s.a.render(Object(n.jsx)(x,{children:Object(n.jsx)(W,{})}),document.getElementById("root")),_()}},[[47,1,2]]]);
//# sourceMappingURL=main.d488da20.chunk.js.map