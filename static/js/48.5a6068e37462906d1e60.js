webpackJsonp([48],{"+cEz":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});t("mtWM"),t("cQKb");var r={components:{},data:function(){return{data:[{children:[{children:[{children:[{children:[{children:[],id:"{0ef22e0e-0f67-4e5f-a8bb-e163cdd9ca72}",model_type:"配电柜",name:"AP配电柜.rso",serial:"配电柜6"},{children:[],id:"{1a74515f-c954-42b7-85ef-66bda616d07d}",model_type:"摄像头",name:"摄像头.rso",serial:"cam6"},{children:[],id:"{367200df-0160-485d-823d-28a3541d2e31}",model_type:"摄像头",name:"摄像头.rso",serial:"cam4"},{children:[],id:"{6998cfd5-f8e2-4bf4-9231-256293c879ce}",model_type:"空调",name:"信息机房空调1",serial:"空调1"},{children:[],id:"{a0ada655-692b-4005-aca8-50c8d5efc655}",model_type:"漏水",name:"漏水线.rso",serial:"漏水线34"},{children:[],id:"{b87500aa-ae0d-4d6d-834a-c9997aa56d99}",model_type:"空调",name:"信息机房空调4",serial:"空调4"},{children:[],id:"{dfadefe0-cec3-4dc7-9430-225aa029c5b9}",model_type:"门禁",name:"门禁.rso",serial:"2214"},{children:[],id:"{eeb72fdb-d830-4461-b31c-063270a19b19}",model_type:"烟感",name:"烟感报警器.rso",serial:"烟感03"},{children:[],id:"{f08a8347-939c-4e92-a5a5-a1d3e855397d}",model_type:"漏水",name:"漏水线.rso",serial:"漏水线26"},{children:[],id:"{f105533e-892c-48d1-98bb-e2f3531fadb1}",model_type:"配电柜",name:"AP配电柜.rso",serial:"配电柜1"},{children:[],id:"{f43f9fc9-26a7-4058-88e8-3477ae3c3833}",model_type:"温湿度感应器",name:"温感器.rso",serial:"温感器4"},{children:[],id:"{f8dfdaf6-54fb-43e2-b45f-50d4797c6ecb}",model_type:"烟感",name:"烟感报警器.rso",serial:"烟感16"},{children:[],id:"{f9df5d78-9fa6-45eb-b081-f941276ca141}",model_type:"温湿度感应器",name:"温感器.rso",serial:"温感器5"},{children:[],id:"{fbc3a9b7-2730-4ba7-875a-c989d376ef6e}",model_type:"机柜",name:"Rittal 42U机柜.rso",serial:"B08"},{children:[],id:"{fca7d811-d2da-4b27-8835-31d0fe92a01d}",model_type:"漏水",name:"漏水线.rso",serial:"漏水线33"}],id:"{13bf8c28-0523-4386-88c5-57e0ef21f325}",model_type:"",name:"信息机房",serial:"信息机房"},{children:[],id:"{3f396bb8-4692-44c1-bbad-25266b5b5a62}",model_type:"",name:"香港浪潮机房_五层_墙面.rso",serial:"GNC-5F"}],id:"{e6be9fa1-60d5-47cc-b9cd-78b1a6e38bd9}",model_type:"",name:"5F",serial:""}],id:"{9179a451-81aa-42a9-bec0-f0fcde112204}",model_type:"楼宇",name:"数据中心",serial:"DC Zone"}]}],filterText:"",timer:null,treeProps:{label:"serial",children:"children"},jsonData:[],arry:[]}},watch:{filterText:function(e){this.$refs.tree.filter(e)}},mounted:function(){var e=this;new QWebChannel(qt.webChannelTransport,function(a){window.scene3D=a.objects.viewerAPI,window.scene3D.GetModelTree(!1,function(a){var t=JSON.parse(a.replace(/&quot;/g,'"'));e.data.push(t.children[0]);var r=e.getData(e.data);e.arry=e.setData(r).filter(function(e){return!["人物角色","方向箭头"].includes(e.name)})})})},methods:{filterNode:function(e,a,t){try{if(!e)return!0;var r=-1!==a.serial.indexOf(e),n=t.parent&&t.parent.data&&t.parent.data.serial&&-1!==t.parent.data.serial.indexOf(e),d=t.parent&&t.parent.parent&&t.parent.parent.data&&t.parent.parent.data.serial&&-1!==t.parent.parent.data.serial.indexOf(e),i=!1,l=!1,s=!1;return 1===t.level?i=r:2===t.level?l=r||n:3===t.level&&(s=r||n||d),i||l||s}catch(e){}},getData:function(e){for(var a=0;a<e.length;a++)if(0!==e[a].children.length){for(var t=e[a].children,r=0;r<t.length;r++)""!==t[r].model_type&&this.jsonData.push(t[r].model_type);this.getData(t)}return this.jsonData},setData:function(e){var a=[];e.sort();for(var t=0;t<e.length;){for(var r=0,n=t;n<e.length;n++)e[t]==e[n]&&r++;a.push([e[t],r]),t+=r}var d=[];for(t=0;t<a.length;t++)d.push({name:a[t][0],value:a[t][1]});return d},getChooseNode:function(e){console.log(e),window.scene3D.SetLookAt(e.serial)}}},n={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"c-tree animated zoomIn"},[e._m(0),e._v(" "),t("div",{staticClass:"con"},[t("ul",[e._m(1),e._v(" "),e._l(e.arry,function(a){return t("li",{key:a.name},[t("span",[e._v(e._s(a.name))]),e._v(" "),t("span",{staticClass:"valueItem"},[e._v(e._s(a.value))])])})],2),e._v(" "),t("div",{staticStyle:{"margin-top":"20px",padding:"0 15px"}},[t("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.filterText,callback:function(a){e.filterText=a},expression:"filterText"}})],1)]),e._v(" "),t("div",{staticClass:"mytree"},[t("el-tree",{ref:"tree",staticClass:"tree fl",attrs:{data:e.data,props:e.treeProps,"node-key":"id","default-expand-all":!0,"expand-on-click-node":!1,"filter-node-method":e.filterNode,"highlight-current":"",indent:0},on:{"node-click":e.getChooseNode},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.node,n=a.data;return t("span",{staticClass:"custom-tree-node"},[t("span",{attrs:{title:r.label}},[e._v(e._s(r.label))]),e._v(" "),t("span",{staticStyle:{"font-size":"15px",color:"white"},attrs:{title:n.name}},[e._v(e._s(n.name))])])}}])})],1)])},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"header-bar"},[a("img",{attrs:{src:t("Husy")}})])},function(){var e=this.$createElement,a=this._self._c||e;return a("li",[a("span",[this._v("消防设施")]),this._v(" "),a("span",{staticClass:"valueItem"},[this._v("0")])])}]};var d=t("VU/8")(r,n,!1,function(e){t("udvB")},"data-v-1d1c5558",null);a.default=d.exports},Husy:function(e,a,t){e.exports=t.p+"static/img/treetitle.a529e7b.png"},udvB:function(e,a){}});