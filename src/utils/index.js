export default {
    goodTime (str) {
      let now = new Date().getTime()
      let oldTime = new Date(str).getTime()
      let difference = now - oldTime
      let result = ''
      let minute = 1000 * 60
      let hour = minute * 60
      let day = hour * 24
      let month = day * 30
      let year = month * 12
      let _year = difference / year
      let _month = difference / month
      let _week = difference / (7 * day)
      let _day = difference / day
      let _hour = difference / hour
      let _min = difference / minute
  
      if (_year >= 1) {
        result = '发表于 ' + ~~(_year) + ' 年前'
      } else if (_month >= 1) {
        result = '发表于 ' + ~~(_month) + ' 个月前'
      } else if (_week >= 1) {
        result = '发表于 ' + ~~(_week) + ' 周前'
      } else if (_day >= 1) {
        result = '发表于 ' + ~~(_day) + ' 天前'
      } else if (_hour >= 1) {
        result = '发表于 ' + ~~(_hour) + ' 个小时前'
      } else if (_min >= 1) {
        result = '发表于 ' + ~~(_min) + ' 分钟前'
      } else {
        result = '刚刚'
      }
      return result
    },

    // 图片剪裁
    onImgLoad(e){
      let scale = 1; // 宽高比
      let w = e.target.naturalWidth;
      let h = e.target.naturalHeight;
      if((w / h) > scale){
          e.target.style.width = 'auto';
          e.target.style.height = '100%';
      } else {
          e.target.style.width = '100%';
          e.target.style.height = 'auto';
      }
    },

    // 获取header日期
    dateHeader(dates){
      if(dates == '') return '';
      let y = dates.getFullYear() >= 10 ? dates.getFullYear() : ('0' + dates.getFullYear());
      let m = (dates.getMonth() + 1) >= 10 ? (dates.getMonth() + 1) : '0' + (dates.getMonth() + 1);
      let d = dates.getDate() >= 10 ? dates.getDate() : '0' + dates.getDate();
      return (y + '年' + m + '月' + d + '日');
    },
    timeHeader(dates){
      if(dates == '') return '';
      let hh = dates.getHours() >= 10 ? dates.getHours() : '0' + dates.getHours();
      let mm = dates.getMinutes() >= 10 ? dates.getMinutes() : '0' + dates.getMinutes();
      let ss = dates.getSeconds() >= 10 ? dates.getSeconds() : '0' + dates.getSeconds();
      return (hh + ':' + mm + ':' + ss);
    },

    // 获取日期时间字符串
    formatDateTime(dates){
      if(dates == '') return '';
      let y = dates.getFullYear() >= 10 ? dates.getFullYear() : ('0' + dates.getFullYear());
      let m = (dates.getMonth() + 1) >= 10 ? (dates.getMonth() + 1) : '0' + (dates.getMonth() + 1);
      let d = dates.getDate() >= 10 ? dates.getDate() : '0' + dates.getDate();
      let hh = dates.getHours() >= 10 ? dates.getHours() : '0' + dates.getHours();
      let mm = dates.getMinutes() >= 10 ? dates.getMinutes() : '0' + dates.getMinutes();
      let ss = dates.getSeconds() >= 10 ? dates.getSeconds() : '0' + dates.getSeconds();
      return (y + '/' + m + '/' + d + ' ' + hh + ':' + mm + ':' + ss);
    },

    // 获取日期字符串
    formatDate(dates){
      if(dates == '') return '';
      let y = dates.getFullYear() >= 10 ? dates.getFullYear() : ('0' + dates.getFullYear());
      let m = (dates.getMonth() + 1) >= 10 ? (dates.getMonth() + 1) : '0' + (dates.getMonth() + 1);
      let d = dates.getDate() >= 10 ? dates.getDate() : '0' + dates.getDate();
      return (y + '/' + m + '/' + d);
    },

    // 转换日期字符串到时间
    backData(dates){
      if(dates == '' || dates == null || !dates){
        return null;
      }
      dates = dates.replace(/-/g,"\/");
      dates = new Date(dates);
      return dates;
    },

    // 获取url参数
    getQueryString(name) {   
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");   
      var r = window.location.search.substr(1).match(reg);   
      if (r != null) return decodeURI(r[2]); return null;   
    },

    // 获取时间
    getInTime(dates){
      if(dates == '') return '刚刚';
      let y = dates.getFullYear() >= 10 ? dates.getFullYear() : ('0' + dates.getFullYear());
      let m = (dates.getMonth() + 1) >= 10 ? (dates.getMonth() + 1) : '0' + (dates.getMonth() + 1);
      let d = dates.getDate() >= 10 ? dates.getDate() : '0' + dates.getDate();
      let hh = dates.getHours() >= 10 ? dates.getHours() : '0' + dates.getHours();
      let mm = dates.getMinutes() >= 10 ? dates.getMinutes() : '0' + dates.getMinutes();
      let ss = dates.getSeconds() >= 10 ? dates.getSeconds() : '0' + dates.getSeconds();

      let dateIn = new Date();
      if(dates.getFullYear() == dateIn.getFullYear() && dates.getMonth() == dateIn.getMonth() && dates.getDate() == dateIn.getDate()){
        return (hh + ':' + mm + ':' + ss);
      } else if (dates.getFullYear() == dateIn.getFullYear()){
        return (m + '月' + d + '日 ' + hh + ':' + mm + ':' + ss);
      } else {
        return (y + '/' + m + '/' + d + ' ' + hh + ':' + mm + ':' + ss);
      }
    },

    // get img
    setImg(e){
      if(e.target.clientWidth > e.target.clientHeight){
        e.target.style.height = '100%';
        e.target.style.width = 'auto';
      } else {
        e.target.style.width = '100%';
        e.target.style.height = 'auto';
      }
    },

    dataURLtoBlob(dataurl) {
      var arr = dataurl.split(',');
       //注意base64的最后面中括号和引号是不转译的   
       var _arr = arr[1].substring(0,arr[1].length-2);
       var mime = arr[0].match(/:(.*?);/)[1],
         bstr =atob(_arr),
         n = bstr.length,
         u8arr = new Uint8Array(n);
       while (n--) {
         u8arr[n] = bstr.charCodeAt(n);
       }
       return new Blob([u8arr], {
         type: mime
       });
     },

    dataURLtoFile(dataurl) {//将base64转换为文件
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], new Date().getTime(), {type:mime});
    },

    he(arr){
      let sum = 0;
      for(let i = 0; i < arr.length; i ++){
        sum += arr[i] * 1000;
      }
      return sum / 1000;
    },
    ji(arr){
      let sum = 1;
      let size = 1;
      for(let i = 0; i < arr.length; i ++){
        sum *= (arr[i] * 100);
        size *= 100;
      };
      return sum / size;
    },

    in8(num){
      let n = String(num).split('.');
      if(n.length > 1 && n[1].length > 8){
        num = Math.round(num * 100000000);
        num = num / 100000000;
        return Number(num.toFixed(8));
      } else {
        return num;
      }
    },
    in6(num){
      let n = String(num).split('.');
      if(n.length > 1 && n[1].length > 6){
        num = Math.round(num * 1000000);
        num = num / 1000000;
        return Number(num.toFixed(6));
      } else {
        return num;
      }
    },

    in2(num){
      let n = String(num).split('.');
      if(n.length > 1 && n[1].length > 2){
        num = Math.round(num * 100);
        num = num / 100;
        return Number(num.toFixed(2));
      } else {
        return num;
      }
    },

    // getname
    getName(url){
      url = url.split('?');
      url = url[0];
      url = url.split('/');
      url = url[url.length - 1];
      return url;
    },

    pre10(e){
      
    },

    // getFZ
    average(min,max,min_score,max_score,score){
      var res = 0
      var proportion, diff, score_diff, every;
      if(score < min){
        res = 0;
      }else if(score >=min && score <=max){
        proportion = max-min;//比例区间
        diff = max_score-min_score;//分值区间
        score_diff = score - min;//分值差
        every = score_diff * (diff/proportion); 
        res = Number(min_score) +Number(every.toFixed(1));
      }else{
        res = max_score;
      }
      return res;
    },

    // 100 以内随机数
    of100 () {
      return Math.floor(Math.random() * (100 - 0)) + 0;
    },
  }