(this.webpackJsonpteddy=this.webpackJsonpteddy||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/item1.a6b4aa8a.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/item2.92d9f7cb.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/item3.6c1e99df.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/item4.aa6a89ac.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/item5.b48f4c36.jpg"},44:function(e,t,a){e.exports=a.p+"static/media/item6.24176575.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/item7.958927fb.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/item8.31cb7c8e.jpg"},49:function(e,t,a){e.exports=a(65)},61:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(24),r=a.n(c),l=a(11),o=a(12),s=a(15),m=a(14),u=a(16),d=a(3),p=a(35),h=a.n(p),f=function(){return i.a.createElement("nav",{className:"nav-wrapper"},i.a.createElement("div",{className:"container"},i.a.createElement(u.b,{to:"/",className:"brand-logo"},"Delivered"),i.a.createElement("ul",{className:"right"},i.a.createElement("li",null,i.a.createElement(u.b,{to:"/about"},"About")),i.a.createElement("li",null,i.a.createElement(u.b,{to:"/sweets"},"Sweets")),i.a.createElement("li",null,i.a.createElement(u.b,{to:"/cart"},"Shopping Cart ",i.a.createElement(h.a,null))))))},b=a(36),g=a(20),E=a(19),v=a(17),y=a(28),k=function(e){return i.a.createElement(g.a,{fluid:!0,className:"copy"},i.a.createElement(E.a,null,i.a.createElement(v.a,{sm:{span:6,offset:3}},i.a.createElement("h3",null," ",e.title," "),i.a.createElement("p",null," ",e.content," "),i.a.createElement(y.a,{variant:"outline-primary"},e.buttonText)," ")))},j=function(e){return i.a.createElement(g.a,{fluid:!0,className:"copyimg"},i.a.createElement(E.a,null,i.a.createElement(v.a,{sm:{span:4,offset:1}}," ",i.a.createElement("h4",null," ",e.heading," ")," ",i.a.createElement("br",null),i.a.createElement("p",null," ",e.copy," "),i.a.createElement(y.a,{variant:"dark"},e.buttonText)," "),i.a.createElement(v.a,{sm:6},i.a.createElement("img",{className:"cinnamon",src:e.img}))))},O=function(e){return i.a.createElement(g.a,{fluid:!0},i.a.createElement("img",{className:"bigimg",src:e.img,alt:"cookies"}))},N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{fluid:!0,className:"about"},i.a.createElement(g.a,null,i.a.createElement(E.a,null,i.a.createElement(v.a,{sm:4}," ",i.a.createElement("h3",{className:"link"}," About "),"  ")),i.a.createElement(E.a,null,i.a.createElement(v.a,{sm:4}," ",i.a.createElement("h3",{className:"link"}," Order ")," ")),i.a.createElement(E.a,null,i.a.createElement(v.a,{sm:4}," ",i.a.createElement("h3",{className:"link"}," About "),"  ")),i.a.createElement(E.a,null,i.a.createElement(v.a,{sm:4}," ",i.a.createElement("h3",{className:"link"}," Order ")," ")))),i.a.createElement(k,{title:"Super-moist and packed with flavor",content:"Whenever we have a company gathering, this pumpkin bread is one of the first things to disappear. Super-moist and packed with flavor, it can be made into a simple pumpkin loaf; or enhanced with chocolate chips and/or nuts. Or raisins",buttonText:"lets go"}),i.a.createElement(j,{heading:"Chocolate Fudge Bundt Cake",copy:"This moist, nicely dense fudge cake has an ultra-fine grain: think pound cake. Topped with a thick layer of rich ganache, it's a chocolate lover's dream come true.",buttonText:"lets go",img:"https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/recipe_legacy/9013-3-large.jpg?itok=dB2j5_Nf"}),i.a.createElement(O,{img:"https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/recipe_legacy/1070-3-large.jpg?itok=DEoaSMRA"}),i.a.createElement(k,{title:"Original Cake Pan Cake",content:"Now we're proud to name this our 225th Anniversary Recipe of the Centuries. Dark, moist, delicious, and CHOCOLATE, this is truly a cake for all reasons, all seasons \u2014 and for bakers (and their family and friends) everywhere.",buttonText:"lets go"}))}}]),a}(n.Component),w=a(21),C=a(38),T=a.n(C),I=a(27),A=a.n(I),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).handleChecked=function(t){t.target.checked?e.props.addShipping():e.props.substractShipping()},e}return Object(o.a)(a,[{key:"componentWillUnmount",value:function(){this.refs.shipping.checked&&this.props.substractShipping()}},{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"collection"},i.a.createElement("li",{className:"collection-item"},i.a.createElement("label",null,i.a.createElement("input",{type:"checkbox",ref:"shipping",onChange:this.handleChecked}),i.a.createElement("span",null,"Shipping(+6$)"))),i.a.createElement("li",{className:"collection-item"},i.a.createElement("b",null,"Total: ",this.props.total," $"))),i.a.createElement("div",{className:"checkout"},i.a.createElement("button",{className:"waves-effect waves-light btn"},"Checkout")))}}]),a}(n.Component),_=Object(w.b)((function(e){return{addedItems:e.addedItems,total:e.total}}),(function(e){return{addShipping:function(){e({type:"ADD_SHIPPING"})},substractShipping:function(){e({type:"SUB_SHIPPING"})}}}))(S),x=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).handleRemove=function(t){e.props.removeItem(t)},e.handleAddQuantity=function(t){e.props.addQuantity(t)},e.handleSubtractQuantity=function(t){e.props.subtractQuantity(t)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.items.length?this.props.items.map((function(t){return i.a.createElement("li",{className:"collection-item avatar",key:t.id},i.a.createElement("div",{className:"item-img"},i.a.createElement("img",{src:t.img,alt:t.img,className:""})),i.a.createElement("div",{className:"item-desc"},i.a.createElement("span",{className:"title"},t.title),i.a.createElement("p",null,t.desc),i.a.createElement("p",null,i.a.createElement("b",null,"Price: ",t.price,"$")),i.a.createElement("p",null,i.a.createElement("b",null,"Quantity: ",t.quantity)),i.a.createElement("div",{className:"add-remove"},i.a.createElement(u.b,{to:"/cart"},i.a.createElement("i",{className:"material-icons",onClick:function(){e.handleAddQuantity(t.id)}}," ",i.a.createElement(A.a,null))),i.a.createElement(u.b,{to:"/cart"},i.a.createElement("i",{className:"material-icons",onClick:function(){e.handleSubtractQuantity(t.id)}},i.a.createElement(T.a,null),"  "))),i.a.createElement("button",{className:"waves-effect waves-light btn pink remove",onClick:function(){e.handleRemove(t.id)}},"Remove")))})):i.a.createElement("p",null,"Nothing.");return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"cart"},i.a.createElement("h5",null,"You have ordered:"),i.a.createElement("ul",{className:"collection"},t)),i.a.createElement(_,null))}}]),a}(n.Component),B=Object(w.b)((function(e){return{items:e.addedItems}}),(function(e){return{removeItem:function(t){e(function(e){return{type:"REMOVE_ITEM",id:e}}(t))},addQuantity:function(t){e(function(e){return{type:"ADD_QUANTITY",id:e}}(t))},subtractQuantity:function(t){e(function(e){return{type:"SUB_QUANTITY",id:e}}(t))}}}))(x),D=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).handleClick=function(t){e.props.addToCart(t)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.items.map((function(t){return i.a.createElement("div",{class:"row"},i.a.createElement("div",{className:"card",key:t.id},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{src:t.img,alt:t.title}),i.a.createElement("span",{to:"/",className:"btn-floating halfway-fab waves-effect waves-light",onClick:function(){e.handleClick(t.id)}},i.a.createElement(A.a,null))),i.a.createElement("div",{className:"card-content"},i.a.createElement("span",{className:"card-title"},t.title),i.a.createElement("p",null,t.desc),i.a.createElement("p",null,i.a.createElement("b",null,"Price: ",t.price,"$")))))}));return i.a.createElement("div",{className:"container"},i.a.createElement("h3",{className:"center"},"Our items"),i.a.createElement("div",{className:"box"},t))}}]),a}(n.Component),P=Object(w.b)((function(e){return{items:e.items}}),(function(e){return{addToCart:function(t){e(function(e){return{type:"ADD_TO_CART",id:e}}(t))}}}))(D),Q=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(j,{heading:"Chocolate Fudge Bundt Cake",copy:"This moist, nicely dense fudge cake has an ultra-fine grain: think pound cake. Topped with a thick layer of rich ganache, it's a chocolate lover's dream come true.",buttonText:"lets go",img:"https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/recipe_legacy/9013-3-large.jpg?itok=dB2j5_Nf"}))},R=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement(u.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(f,null),i.a.createElement(d.c,null,i.a.createElement(d.a,{exact:!0,path:"/",component:N}),i.a.createElement(d.a,{path:"/sweets",component:P}),i.a.createElement(d.a,{path:"/cart",component:B}),i.a.createElement(d.a,{path:"/about",component:Q}))))}}]),a}(n.Component),U=(a(60),a(61),a(62),a(63),a(47)),q=a(4),M=a(39),F=a.n(M),G=a(40),H=a.n(G),Y=a(41),$=a.n(Y),J=a(42),L=a.n(J),V=a(43),W=a.n(V),z=a(44),K=a.n(z),X=a(45),Z=a.n(X),ee=a(46),te=a.n(ee),ae={items:[{id:1,title:"Orange Sunshine Coffeecake",desc:"As the days grow longer and we turn toward springtime, this tender coffeecake, with its orange-cinnamon filling, is a great way to celebrate.",price:110,img:F.a},{id:2,title:"Cinnamon Babka",desc:"Tender and high-rising, with subtle sweetness and a hint of vanilla, these biscuits are perfect as the base for shortcake \u2014 or all on their own.",price:80,img:H.a},{id:3,title:"Peachberry Buckle",desc:"Tender and high-rising, with subtle sweetness and a hint of vanilla, these biscuits are perfect as the base for shortcake \u2014 or all on their own.",price:120,img:$.a},{id:4,title:"Pumpkin Streusel Coffeecake",desc:"If you\u2019ve got a lot on your plate these days but still want to be your family\u2019s dinner hero, you\u2019ve come to the right place.",price:260,img:L.a},{id:5,title:"Gluten-Free Cream Tea Scones",desc:"This recipe is quick to assemble, and parts of it can even be done in advance.",price:160,img:W.a},{id:6,title:"Baking Powder Biscuits",desc:" If you bought an extra-big bird for your holiday feast to cover some extra meals, you've come to the right place.",price:90,img:K.a},{id:7,title:"Savory Cheddar Cheese Biscuits",desc:"Dark chocolate cake with a molten fudge center-heaven! This rich, moist chocolate cake makes its own hot fudge sauce. Just cut it open, and enjoy the molten treasure inside.",price:90,img:Z.a},{id:8,title:"Biscuits for Breakfast",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img:te.a}],addedItems:[],total:0},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;if("ADD_TO_CART"===t.type){var a=e.items.find((function(e){return e.id===t.id})),n=e.addedItems.find((function(e){return t.id===e.id}));if(n)return a.quantity+=1,Object(q.a)(Object(q.a)({},e),{},{total:e.total+a.price});a.quantity=1;var i=e.total+a.price;return Object(q.a)(Object(q.a)({},e),{},{addedItems:[].concat(Object(U.a)(e.addedItems),[a]),total:i})}if("REMOVE_ITEM"===t.type){var c=e.addedItems.find((function(e){return t.id===e.id})),r=e.addedItems.filter((function(e){return t.id!==e.id})),l=e.total-c.price*c.quantity;return console.log(c),Object(q.a)(Object(q.a)({},e),{},{addedItems:r,total:l})}if("ADD_QUANTITY"===t.type){var o=e.items.find((function(e){return e.id===t.id}));o.quantity+=1;var s=e.total+o.price;return Object(q.a)(Object(q.a)({},e),{},{total:s})}if("SUB_QUANTITY"===t.type){var m=e.items.find((function(e){return e.id===t.id}));if(1===m.quantity){var u=e.addedItems.filter((function(e){return e.id!==t.id})),d=e.total-m.price;return Object(q.a)(Object(q.a)({},e),{},{addedItems:u,total:d})}m.quantity-=1;var p=e.total-m.price;return Object(q.a)(Object(q.a)({},e),{},{total:p})}return"ADD_SHIPPING"===t.type?Object(q.a)(Object(q.a)({},e),{},{total:e.total+6}):"SUB_SHIPPING"===t.type?Object(q.a)(Object(q.a)({},e),{},{total:e.total-6}):e},ie=a(26),ce=Object(ie.b)(ne);r.a.render(i.a.createElement(w.a,{store:ce},i.a.createElement(R,null)),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.72f224b5.chunk.js.map