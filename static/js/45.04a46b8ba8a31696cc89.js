webpackJsonp([45],{AMvz:function(t,e){},Jn9B:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADcElEQVRoQ+2ZzWoUQRDHq2Zy1xcwgp78PijoQUEvATEek0dQjOgluzWslyQXl+ndXBQV8wjJ0QQhFwN6MKAHo9GTgusL6D29JR0yS+/sfFTPzm4YcWBZmKmu/v+6unq6axAqfmHF9cN/gCiCy8vLx/b29m4j4llmnkTESQAwP3N1mLmDiOb/y8TExKv5+flfZUR/qAi02+2LWuspRJwCgOuOgraYedP3/c1arfbRsW3PvBCAEd7tdu8AgPmVca14nrdSBMQZQCn1skThcfgVIrrrMiJOAK1W6y0zX3XpwNUWEd/V6/Vr0nZiAKXUTysppf6L2nWI6LiksQhAKcUSZ2XbEFGuvlwDpdQnADhftjihvx0iupBlmwmglFoFgBlhZ6MyWyOi2TTnqQAjXm1cYVNXp0SAg3X+g2svo7T3PO9S0nsiEcBx9HcB4ExB8S5tE6MwAOA4+rue581qrWcRccEFgpmXfN9f7Xa7Js9EA5AUhQGAVqu1wMyLAjH74mu12ldjG4bhohTCiA+CYL+Pdrt9WgqBiIv1en3J1jYAoJR6DwCXBQBgC5FCFGljadkmoiupAM1m84Tv+98l4iMbF0EutmkatNYnG43Gj+h5XwSUUg8A4IkLgLGVCJPYCPt9SERP0wCeA8A9oaM+syyBJYo3fb4gorlEgDAM1xHxVhGAtEiY+1HCSvMkq39m3giCYDotAjsAcK4oQBKE7ctlpcrQ8JmIenuzeA78BoAjwwCYtknLXUnijfs/RHQ0LQKlAMTnfBlTxxrUTIBqT6F/IYkrv4zOIeIz1ySOJ21Swpb1LmDm+0EQmIHev/pWIVNd01p3XAAk4iN/ZUD4vj9pV/WSNnNvpFW2uHjJTtYFOGEgt4john1/ACAMwwYiPhZEoW87LRHfC7u1LXbZTjPzoyAImpkARQ40zDwjPEP0+jaRQMQ16VnANBQdaIxhpY+UBsAxCoLZNryJ06G+QBSGV5jtwa2sEvkaRzE3jzyv2CspLY6zqBvnyS3y5gIcTKfqFnejIRlzkTe3qJu4lcibj2Mq9mYWc+MaRVPIbuT4jsgbk/jz0X5iinqr9Ec+e8gMCDNPM/NNaTXPar+NiK8Rcb3I18lCOZA1Hw6qeqYkcyrrQzcAfNNab9jVNdd5lrmZG8bZYbR1TuLDEJnVZ+UB/gLfhRhPpZ21agAAAABJRU5ErkJggg=="},Okca:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("mtWM");var a=i("accY"),s=i("AEPM"),n={name:"right",data:function(){return{flag:!1,height:0,url:"",time:"",timeHour:"",week:"",width:"",right:"",top:"",left:"",flagTop:"",navArry:[{id:1,name:"场景树"},{id:2,name:"环境监控"},{id:3,name:"动画视点"},{id:4,name:"漫游"},{id:5,name:"全屏"},{id:6,name:"多屏"},{id:7,name:"统计"},{id:8,name:"告警信息"}],navArryTwo:null,activeIndex:-1,activeTwoIndex:-1,showAll:!0}},mounted:function(){this.time=a.a.getTime("YYYY-mm-dd",new Date),this.timeHour=a.a.getTime("HH:MM:SS",new Date);var t=(new Date).getDay();this.week=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur"][t]},watch:{},methods:{closeBnt:function(){this.flag=!1},tabFun:function(t){switch(this.activeIndex=t,this.navArryTwo=1==t?[{pid:1,name:"空调"},{pid:1,name:"UPS"},{pid:1,name:"配电柜"},{pid:1,name:"视频监控"},{pid:1,name:"温湿度"},{pid:1,name:"漏水"},{pid:1,name:"电量仪"},{pid:1,name:"电池"}]:null,t){case 0:this.flag=!0,this.top="-20px",this.left="380px",this.flagTop="0",this.height=document.documentElement.clientHeight-85+"px",this.url=s.a.baseUrl+"/3dweb/index.html#/main/tree/index";break;case 2:this.flag=!0,this.flagTop="0px",this.top="-20px",this.left="410px",this.height=document.documentElement.clientHeight-85+"px",this.url=s.a.baseUrl+"/3dweb/index.html#/main/videoanimation/index";break;case 7:this.flag=!0,this.width="100%",this.flagTop="-85px",this.top="0px",this.left="",this.right="1px",this.height=document.documentElement.clientHeight+"px",this.url=s.a.baseUrl+"/3dweb/index.html#/main/alarm/index"}},tabTwoFun:function(t){this.activeTwoIndex=t},btn:function(){}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav"},[a("nav",{directives:[{name:"show",rawName:"v-show",value:t.showAll,expression:"showAll"}],staticClass:"nav-header"},[t._m(0),t._v(" "),a("div",{staticClass:"header-c"},[a("ul",{staticClass:"nav-default"},t._l(t.navArry,function(e,i){return a("li",{key:i,class:{active:t.activeIndex==i,navtitle:!0},on:{click:function(e){return t.tabFun(i)}}},[a("a",{class:{navtitle:!0,headertitle:t.activeIndex==i},staticStyle:{"font-size":"1vw"}},[t._v(t._s(e.name))])])}),0)]),t._v(" "),a("div",{staticClass:"header-r"},[a("div",[a("label",{staticClass:"header-r-address",staticStyle:{"font-size":"1.6vw","font-weight":"800"}},[t._v("北京")]),t._v(" "),a("span",{staticClass:"header-r-time"},[a("span",{staticClass:"sepecial",staticStyle:{"font-size":"18px"}},[t._v(t._s(t.time))]),t._v(" "),a("span",[t._v(t._s(t.week))]),t._v(" "),a("span",{staticClass:"sepecial",staticStyle:{"font-size":"18px"}},[t._v(t._s(t.timeHour))])])])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showAll&&null!=t.navArryTwo,expression:"showAll&&navArryTwo!=null"}],staticClass:"nav-two"},[a("div",{staticClass:"nav-two-c"},[a("ul",{staticClass:"nav-default-c"},t._l(t.navArryTwo,function(e,i){return a("li",{key:i,class:{activeTwo:t.activeTwoIndex==i},on:{click:function(e){return t.tabTwoFun(i)}}},[a("a",{class:{navtitle:!0,headertitletitle:t.activeTwoIndex==i},staticStyle:{"font-size":"1vw"}},[t._v(t._s(e.name))])])}),0)])]),t._v(" "),a("div",{staticStyle:{display:"flex","justify-content":"center"}},[a("i",{class:[t.showAll?"el-icon-caret-top":"el-icon-caret-bottom"],staticStyle:{color:"white","font-size":"20px",cursor:"pointer"},attrs:{circle:""},on:{click:function(e){t.showAll=!t.showAll}}})]),t._v(" "),t.flag?a("div",{staticClass:"equipemntPanel",style:{top:t.flagTop}},[a("div",{staticClass:"panel-close",style:{top:t.top,left:t.left,right:t.right},on:{click:t.closeBnt}},[a("img",{staticClass:"closeBnt",attrs:{src:i("Jn9B")},on:{click:t.closeBnt}})]),t._v(" "),a("div",{staticClass:"info-list"},[a("iframe",{staticClass:"iframebody",style:{height:t.height,width:t.width},attrs:{src:t.url}})])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-l"},[e("label",[this._v("数据中心基础设施可视化管理平台")])])}]};var c=i("VU/8")(n,l,!1,function(t){i("AMvz")},"data-v-20404e05",null);e.default=c.exports}});