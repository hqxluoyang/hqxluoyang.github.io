webpackJsonp([70],{"+Xcq":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("7t+N"),a("d1wj"),a("cYyX");var l=a("cQKb"),n={data:function(){return{url:"",tableData:[],copytableData:[],type:1,Code:""}},components:{},destroyed:function(){},mounted:function(){this.getData()},methods:{getData:function(t){l.a.axiosGet({callback:function(t){},url:"/config/devdemo/ProjectConfig.json"})},init:function(t){var e=this;l.a.axiosGet({callback:function(t){1==t.code&&(e.tableData=t.data,e.url=t.data[0].image[0].url)},url:"/"})},setOnClick:function(t){console.log(t),this.Code=t},tableHeaderColor:function(t){t.row,t.column;var e=t.rowIndex;t.columnIndex;if(0===e)return" background-color: rgba(2,198,178,0.2); !important;color: #fff !important;font-weight: 500 !important;"}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alarm animated bounceInDown"},[a("div",{staticClass:"alarm-bg"},[t._m(0),t._v(" "),a("div",{staticClass:"main-left"},[a("div",{staticClass:"left"},[a("div",[a("img",{attrs:{src:t.url}}),t._v(" "),a("p",[t._v("宽：123")]),t._v(" "),a("p",[t._v("高：456")]),t._v(" "),a("p",[t._v("大小：46")]),t._v(" "),a("p",[t._v("类型：456")])])]),t._v(" "),a("div",{staticClass:"right"},[a("el-table",{attrs:{"header-cell-style":t.tableHeaderColor,data:t.tableData,height:"100%",width:"100%"},on:{"row-click":t.setOnClick}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"ID",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"serial",label:"通道",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"address",label:"事件"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"content",label:"时间"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"content",label:"备注"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"content",label:"其他"}})],1)],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-bar"},[e("div",{staticClass:"active",staticStyle:{"margin-left":"50px",cursor:"pointer"}},[this._v("报警列表")])])}]};var o=a("VU/8")(n,r,!1,function(t){a("p3M9")},"data-v-cbb2499c",null);e.default=o.exports},p3M9:function(t,e){}});