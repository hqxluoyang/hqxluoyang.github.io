webpackJsonp([30],{"1rDT":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("7t+N");var i=a("XLwt"),o=a.n(i),r=a("RaUT"),s=a("cQKb"),n=a("accY"),c={data:function(){return{form:{cabinet_num:0,equipment_sum:0},echartData:[{value:2154,name:"未放置",color:"#52ABE7"},{value:3854,name:"未使用",color:"#F7E995"},{value:3515,name:"启用",color:"#FBC197"},{value:3515,name:"预占",color:"#52EBAD"}],echartData1:[{id:"capacity1",value1:6642,value2:14760,text:"U位",name:"已用",name1:"未用",color:"#876CF7",unit:"个",fontSize:10,color1:"#F7E995"},{id:"capacity3",value1:3515,value2:14760,text:"电力",name:"已用",name1:"未用",unit:"KW",fontSize:10,color:"#D36CF4",color1:"#F7E995"},{id:"capacity2",value1:3854,value2:14760,text:"承重",name:"已用",name1:"未用",color:"#F26D6D",unit:"KG",fontSize:10,color1:"#F7E995"}]}},mounted:function(){this.getinit()},methods:{getinit:function(){var t=this,e=(n.a.parseQueryString().serial,this);s.a.axiosGet({callback:function(a){1==a.code&&(e.form=a.data.summary,t.echartData[0].value=a.data.cabinet_status.free_sum.toFixed(2),t.echartData[1].value=a.data.cabinet_status.disabled_sum.toFixed(2),t.echartData[2].value=a.data.cabinet_status.using_sum.toFixed(2),t.echartData[3].value=a.data.cabinet_status.presell_sum.toFixed(2),t.getCabinet(),e.echartData1.forEach(function(t){switch(t.id){case"capacity1":t.value1=a.data.cabinet_status.using_sum.toFixed(2),t.value2=a.data.cabinet_status.free_sum+a.data.cabinet_status.presell_sum+a.data.cabinet_status.disabled_sum.toFixed(2);break;case"capacity3":t.value1=a.data.weightpower.roomusepower.toFixed(2),t.value2=(a.data.weightpower.roompower-a.data.weightpower.roomusepower).toFixed(2);break;case"capacity2":t.value1=a.data.weightpower.roomuseweight.toFixed(2),t.value2=(a.data.weightpower.roomweight-a.data.weightpower.roomuseweight).toFixed(2)}r.a.getCapacity(t)}))},url:"/room/room_baseinfo/?room_serial=信息机房"})},getCabinet:function(){var t=o.a.init(document.getElementById("cabinetMap")),e={yellow:{fontSize:30,padding:[5,4],align:"center"},total:{fontSize:40,align:"center"},white:{align:"center",fontSize:14,padding:[21,0]},blue:{fontSize:16,align:"center"}},a={tooltip:{trigger:"item",formatter:"{b}:{d}% ({c}台)"},graphic:{type:"text",left:"center",top:"45%",style:{text:"状态",textAlign:"center",fill:"#fff",fontSize:20,fontWeight:700}},series:[{name:"机柜数量",type:"pie",radius:["42%","70%"],hoverAnimation:!1,color:["#52ABE7","#F7E995","#FBC197","#52EBAD"],label:{normal:{formatter:["{b}","{d}%"].join("\n"),rich:e}},data:this.echartData}]};t.setOption(a),window.addEventListener("resize",function(){t.resize()})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"room"},[a("div",{staticClass:"room-left animated rotateInDownRight"},[t._m(0),t._v(" "),a("div",{staticClass:"room-conter"},[a("div",{staticStyle:{padding:"0px 40px"}},[a("p",{staticStyle:{display:"flex","justify-content":"space-around",margin:"0"}},[a("span",{staticStyle:{color:"#72A8CC"}},[t._v("机柜总数:"+t._s(t.form.cabinet_num))]),t._v(" "),a("span",{staticStyle:{color:"#72A8CC"}},[t._v("设备总数:"+t._s(t.form.equipment_sum))])])]),t._v(" "),t._m(1),t._v(" "),t._l(t.echartData1,function(e){return a("div",{staticClass:"room-1 room-2",staticStyle:{height:"23%"}},[t._m(2,!0),t._v(" "),a("div",{staticStyle:{width:"300px",height:"100%"},attrs:{id:e.id}})])})],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-bar"},[e("img",{attrs:{src:a("YoSM")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"room-1",staticStyle:{height:"25%","margin-top":"10px"}},[a("ul",[a("li",{staticClass:"room-yy"},[t._v("已用")]),t._v(" "),a("li",{staticClass:"room-wy"},[t._v("未用")]),t._v(" "),a("li",{staticClass:"room-yz"},[t._v("预占")]),t._v(" "),a("li",{staticClass:"room-kx"},[t._v("空闲")])]),t._v(" "),a("div",{staticStyle:{width:"300px",height:"100%"},attrs:{id:"cabinetMap"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",{staticClass:"room-yy"},[this._v("已用")]),this._v(" "),e("li",{staticClass:"room-wy"},[this._v("未用")])])}]};var u=a("VU/8")(c,l,!1,function(t){a("CXf0")},"data-v-be64ae4c",null);e.default=u.exports},CXf0:function(t,e){},YoSM:function(t,e,a){t.exports=a.p+"static/img/roomtitle.edb34ec.png"}});