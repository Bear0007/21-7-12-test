// 配置 API 接口地址
// var root = '' // 测试
// var root = '' // 正式

// 引用axios
var axios = require('axios')

// 引用vant
import {Message} from 'view-design'
import router from '../router'

// url处理
import 'url-search-params-polyfill';

// 自定义判断元素类型JS
function toType (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

// 参数过滤函数
function filterNull (o) {
    for (var key in o){
        if (o[key] === null){
            delete o[key]
        }
        if (toType(o[key]) === 'string') {
            o[key] = o[key].trim ()
        } else if (toType(o[key]) === 'object') {
            o[key] = filterNull (o[key])
        } else if (toType(o[key]) === 'array') {
            o[key] = filterNull (o[key])
        }
    }
    return o
}

/*
  接口处理函数
  这个函数每个项目都是不一样的，我现在调整的是适用于
  https://cnodejs.org/api/v1 的接口，如果是其他接口
  需要根据接口的参数进行调整。参考说明文档地址：
  https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
  主要是，不同的接口的成功标识和失败提示是不一致的。
  另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
*/

function apiAxios (method, url, params, success, failure) {
    if (params) {
        params = filterNull(params)
    }

    if(localStorage['token']){
        axios.defaults.headers.common['token'] = localStorage['token'];
    }
    if(url != 'login'){
        axios.defaults.headers.common['encryption'] = localStorage['keyCode'];
    } else {
        delete axios.defaults.headers.common['encryption'];
    }
    // axios.defaults.headers.common['Content-Type'] = localStorage['application/x-www-form-urlencoded'];
    // axios.defaults.headers.common['Content-Type'] = localStorage['multipart/form-data'];
    let headers = {};
    if(url == 'project/create'){
        headers = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    axios({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params : null,
        params: method === 'GET' || method === 'DELETE' ? params : null,
        baseURL: root,
        headers: headers,
        withCredentials: false
    })
    .then(function (res) {
        if (res.status === 200) {
            if(res.data.code == 2001 || res.data.code == 1001){
                setTimeout(() => {
                    router.push({name:'login'});
                }, 1000);
                Message.warning('您尚未登录');
                return ;
            } else if(success && res.data.code == 0){
                success(res.data)
            } else {
                Message.warning({content: res.data.msg});
                success(false)
            }
        } else {
            if (failure) {
                if(res.code != 0){
                    Message.warning({content: res.msg});
                }
                failure (res.data);
            } else {
                console.log('错误：' + JSON.stringify(res.data))
                Message.warning({
                    mask: true,
                    content: '错误：' + JSON.stringify(res.data),
                    duration: 2000,
                    forbidClick: true,
                });
            }
        }
    })
    .catch(function (err){
        failure(err)
        Message.error('错误：' + err);
    })
}

// 返回在vue模板中的调用接口
export default {
    get: function(url, params, success, failure){
        return apiAxios('GET', url, params, success, failure)
    },
    post: function(url, params, success, failure){
        return apiAxios('POST', url, params, success, failure)
    },
    put: function(url, params, success, failure){
        return apiAxios('PUT', url, params, success, failure)
    },
    delete: function(url, params, success, failure){
        return apiAxios('DELETE', url, params, success, failure)
    },
    getbase: function(success, failure){
        if(success){
            success(root);
        }
    },
}