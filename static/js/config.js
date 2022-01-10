/*
 * @Author: your name
 * @Date: 2021-11-25 11:05:01
 * @LastEditTime: 2021-11-26 11:16:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \videoAssist2-web\static\js\config.js
 */
var config = {
    // "baseURL": "https://v1.zhiboyun.com/api/",
     //baseURL: "https://n.cnnt.org",
    // baseURL: "https://i.cnnt.org/glass/vm/api/", //
    // baseURL: "https://i.cnnt.org/va/vm/api/",
    // "baseURL": "https://i.cnnt.org/glass/dev/api/",
    // { name: "标清|高清|超清", bitrate: 码率},
    "baseURL": "/api/",
    // baseURLtest: "/glass/vm/api/",
    //baseURL:"https://vm.va.cnnt.org/api/",
    "resolutions": [],
    whitelist:[189,176],
    project: {
        type: 0 // 0: glass 项目  1: 主项目
    },
    "headerTitle": "首镜AR系统平台"
}
