webpackJsonp([50],{"38WW":function(e,t){},bFJ1:function(e,t,a){e.exports=a.p+"static/img/wtitle.046e220.png"},qOGw:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("mvHQ"),o=a.n(i),n=a("accY"),s=a("mtWM"),r=a.n(s),l={name:"index",data:function(){return{colors5:{r:255,g:0,b:0},chooseValue:-1,chooseValueBar:0,minTemperature:20,maxTemperature:80,minTemperature1:0,maxTemperature1:100,ismin:!1,ismax:!1,flag:!0}},watch:{chooseValue:function(e){window.scene3D.SetMicroEnvAnalysis(e)},minTemperature:function(e,t){e>=this.maxTemperature&&(this.minTemperature=t)},maxTemperature:function(e,t){e<=this.minTemperature&&(this.maxTemperature=t)}},mounted:function(){n.a.parseQueryString().flag&&(this.flag=!1),this.getconfig3d(),new QWebChannel(qt.webChannelTransport,function(e){window.scene3D=e.objects.viewerAPI})},methods:{btnFun:function(){var e=this,t=[];t.push({name:"CloudAtlasLowThreshold",value:this.minTemperature}),t.push({name:"CloudAtlasHighThreshold",value:this.maxTemperature});var a="vlist="+o()(t);r.a.post("/config3d/update_config/",a).then(function(t){1==t.data.code||e.$message.error(t.data.message)})},setTemperature:function(){window.scene3D.SetMicroEnvAnaliysisAlarm(_this.minTemperature1,_this.maxTemperature1)},getconfig3d:function(){var e=this,t=this;r.a.get("/config3d/get_info/").then(function(a){e.formLabelAlign=a.data.data;for(var i=0;i<e.formLabelAlign.length;i++)switch(e.formLabelAlign[i].name){case"CloudAtlasType":t.chooseValueBar=parseInt(e.formLabelAlign[i].value);break;case"CloudAtlasLowThreshold":t.minTemperature=parseInt(e.formLabelAlign[i].value);break;case"CloudAtlasHighThreshold":t.maxTemperature=parseInt(e.formLabelAlign[i].value)}})},setconfig3d:function(e){var t=this,a=[];a.push(e);e="vlist="+o()(a);r.a.post("/config3d/update_config/",e).then(function(e){1==e.data.code||t.$message.error(e.data.message)}),console.log("MicroEnvAnalysisType:",e.value),window.scene3D.MicroEnvAnalysisType(e.value)}}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"equipments-horse-lamp animated flipInX"},[e._m(0),e._v(" "),a("div",{staticClass:"equipments-horse-lamp-choose"},[a("div",[a("div",{staticStyle:{"margin-left":"19px",color:"#8DC0E2","margin-top":"10px","margin-bottom":"20px"}},[e._v(e._s(e.$t("message.CloudSet")))]),e._v(" "),a("div",{staticStyle:{display:"flex","margin-bottom":"20px","align-items":"center"}},[a("div",{staticClass:"slider",staticStyle:{"margin-right":"10px"}}),a("button",{staticStyle:{border:"1px solid rgb(162, 174, 189)",height:"30px","line-height":"20px",color:"white",width:"100px"},on:{click:e.btnFun}},[e._v("确定")])]),e._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.minTemperature,expression:"minTemperature"}],staticStyle:{width:"50px",height:"20px"},attrs:{type:"number",name:"points",min:"0",max:"maxTemperature"},domProps:{value:e.minTemperature},on:{input:function(t){t.target.composing||(e.minTemperature=t.target.value)}}}),e._v(" "),a("span",{staticStyle:{color:"#8DC0E2"}},[e._v("℃")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.maxTemperature,expression:"maxTemperature"}],staticStyle:{width:"50px",height:"20px","margin-left":"50px"},attrs:{type:"number",name:"points",min:"minTemperature",max:"80"},domProps:{value:e.maxTemperature},on:{input:function(t){t.target.composing||(e.maxTemperature=t.target.value)}}}),e._v(" "),a("span",{staticStyle:{color:"#8DC0E2"}},[e._v("℃")])]),e._v(" "),e.flag?a("div",{staticStyle:{display:"flex",width:"100%","margin-top":"10px","align-items":"center","justify-content":"center"}}):e._e()]),e._v(" "),a("div",[a("div",{staticStyle:{"margin-left":"19px",color:"#8DC0E2","margin-top":"10px","margin-bottom":"20px"}},[e._v("云图层级显示")]),e._v(" "),a("div",{staticStyle:{display:"flex"}},[a("div",{staticClass:"equipments-horse-lamp-top"},[a("label",[e._v(e._s(e.$t("message.top")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.chooseValue,expression:"chooseValue"}],attrs:{type:"radio",id:"checkbox1",name:"regular-checkbox",value:"0"},domProps:{checked:e._q(e.chooseValue,"0")},on:{change:function(t){e.chooseValue="0"}}})]),e._v(" "),a("div",{staticClass:"equipments-horse-lamp-top"},[a("label",[e._v(e._s(e.$t("message.center")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.chooseValue,expression:"chooseValue"}],staticStyle:{"margin-left":"8px"},attrs:{type:"radio",id:"checkbox2",name:"regular-checkbox",value:"1"},domProps:{checked:e._q(e.chooseValue,"1")},on:{change:function(t){e.chooseValue="1"}}})]),e._v(" "),a("div",{staticClass:"equipments-horse-lamp-top"},[a("label",[e._v(e._s(e.$t("message.down")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.chooseValue,expression:"chooseValue"}],staticStyle:{"margin-left":"8px"},attrs:{type:"radio",id:"checkbox3",name:"regular-checkbox",value:"2"},domProps:{checked:e._q(e.chooseValue,"2")},on:{change:function(t){e.chooseValue="2"}}})]),e._v(" "),a("div",{staticClass:"equipments-horse-lamp-top"},[a("label",[e._v(e._s(e.$t("message.longitudinal")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.chooseValue,expression:"chooseValue"}],staticStyle:{"margin-left":"8px"},attrs:{type:"radio",id:"checkbox4",name:"regular-checkbox",value:"3"},domProps:{checked:e._q(e.chooseValue,"3")},on:{change:function(t){e.chooseValue="3"}}})]),e._v(" "),a("div",{staticClass:"equipments-horse-lamp-top"},[a("label",[e._v(e._s(e.$t("message.close")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.chooseValue,expression:"chooseValue"}],staticStyle:{"margin-left":"8px"},attrs:{type:"radio",id:"checkbox5",name:"regular-checkbox",value:"4"},domProps:{checked:e._q(e.chooseValue,"4")},on:{change:function(t){e.chooseValue="4"}}})])])]),e._v(" "),a("div",[a("div",{staticStyle:{"margin-left":"19px",color:"#8DC0E2","margin-top":"10px","margin-bottom":"20px"}},[e._v("温度值显示")]),e._v(" "),a("span",{staticStyle:{color:"#8DC0E2"}},[e._v("只显示温度:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.minTemperature1,expression:"minTemperature1"}],staticStyle:{width:"50px",height:"20px"},attrs:{type:"number",name:"points",min:"1"},domProps:{value:e.minTemperature1},on:{input:function(t){t.target.composing||(e.minTemperature1=t.target.value)}}}),e._v(" "),a("span",{staticStyle:{color:"#8DC0E2"}},[e._v("℃")]),e._v(" "),a("span",{staticStyle:{color:"#8DC0E2"}},[e._v("至")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.maxTemperature1,expression:"maxTemperature1"}],staticStyle:{width:"50px",height:"20px"},attrs:{type:"number",name:"points",min:"1"},domProps:{value:e.maxTemperature1},on:{input:function(t){t.target.composing||(e.maxTemperature1=t.target.value)}}}),e._v(" "),a("span",{staticStyle:{color:"#8DC0E2"}},[e._v("℃")]),e._v(" "),a("div",{staticStyle:{"margin-top":"10px"}},[a("button",{staticStyle:{border:"1px solid rgb(162, 174, 189)",color:"white"},on:{click:e.setTemperature}},[e._v("确定")])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header-bar"},[t("img",{attrs:{src:a("bFJ1")}})])}]};var c=a("VU/8")(l,m,!1,function(e){a("38WW")},"data-v-169e2c67",null);t.default=c.exports}});