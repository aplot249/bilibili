(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8ed04e68"],{"21b6":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[r("div",{staticClass:"navbar-wrapper"},[r("NavBar",{attrs:{userInfo:e.userInfo}})],1),r("div",{staticClass:"edit-category"},[r("p",{staticClass:"title"},[e._v("自定义首页栏目")]),r("van-divider",[e._v("现有栏目")]),r("div",{staticClass:"selected-list category-list"},e._l(e.category,(function(t,a){return r("span",{key:a,on:{click:function(t){return e.selectedItemClick(a)}}},[e._v(e._s(t.title))])})),0),r("van-divider",[e._v("未选择栏目")]),r("div",{staticClass:"remove-list category-list"},e._l(e.removedList,(function(t,a){return r("span",{key:a,on:{click:function(t){return e.removedItemClick(a)}}},[e._v(e._s(t.title))])})),0)],1),r("div",{staticClass:"back-btn",on:{click:e.onBackClick}},[e._v("返回")])])},i=[],n=(r("a434"),r("96cf"),r("1da1")),o=r("2909"),c=r("0790"),s={data:function(){return{category:[],removedList:[],userInfo:null}},components:{NavBar:c["a"]},methods:{onBackClick:function(){console.log("back"),this.$router.back()},removedItemClick:function(e){var t,r=this.removedList.splice(e,1);(t=this.category).push.apply(t,Object(o["a"])(r))},selectedItemClick:function(e){var t;if(this.category.length<2)this.$toast.fail("请至少保留一个栏目");else{var r=this.category.splice(e,1);(t=this.removedList).push.apply(t,Object(o["a"])(r))}},initCategory:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/category");case 2:r=t.sent,e.category=r.data;case 4:case"end":return t.stop()}}),t)})))()},getCategory:function(){if(localStorage.getItem("category")&&localStorage.getItem("removedList"))return this.category=JSON.parse(localStorage.getItem("category")),void(this.removedList=JSON.parse(localStorage.getItem("removedList")));this.initCategory()},getUserInfo:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/user/"+localStorage.getItem("id"));case 2:r=t.sent,e.userInfo=r.data[0];case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.getCategory(),localStorage.getItem("token")&&localStorage.getItem("id")&&this.getUserInfo()},watch:{category:function(){localStorage.setItem("category",JSON.stringify(this.category))},removedList:function(){localStorage.setItem("removedList",JSON.stringify(this.removedList))}}},l=s,u=(r("e23d"),r("2877")),g=Object(u["a"])(l,a,i,!1,null,"a7f8ba10",null);t["default"]=g.exports},a434:function(e,t,r){"use strict";var a=r("23e7"),i=r("23cb"),n=r("a691"),o=r("50c4"),c=r("7b0b"),s=r("65f0"),l=r("8418"),u=r("1dde"),g=r("ae40"),d=u("splice"),f=g("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,h=Math.min,m=9007199254740991,p="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d||!f},{splice:function(e,t){var r,a,u,g,d,f,y=c(this),k=o(y.length),C=i(e,k),I=arguments.length;if(0===I?r=a=0:1===I?(r=0,a=k-C):(r=I-2,a=h(v(n(t),0),k-C)),k+r-a>m)throw TypeError(p);for(u=s(y,a),g=0;g<a;g++)d=C+g,d in y&&l(u,g,y[d]);if(u.length=a,r<a){for(g=C;g<k-a;g++)d=g+a,f=g+r,d in y?y[f]=y[d]:delete y[f];for(g=k;g>k-a+r;g--)delete y[g-1]}else if(r>a)for(g=k-a;g>C;g--)d=g+a-1,f=g+r-1,d in y?y[f]=y[d]:delete y[f];for(g=0;g<r;g++)y[g+C]=arguments[g+2];return y.length=k-a+r,u}})},c437:function(e,t,r){},e23d:function(e,t,r){"use strict";r("c437")}}]);
//# sourceMappingURL=chunk-8ed04e68.111bce3b.js.map