const Util = {
  // 验证电话号码
  checkPhone(phone) {
    if (!/^1[3456789]\d{9}$/.test(phone)) {
      return false
    }
    return true
  },
  /**
   * @function format 日期格式化
   * @params timestamp 必填，需格式化的时间戳或者其他日期格式
   * @return fmt 选填，需返回的时间格式，默认 yyy-MM-dd hh:mm:ss
   * 或者：yyyy年MM月dd日 hh时mm分ss秒
   * 或者<i>ss<i>
   * */
  format(timestamp, fmt) {
    fmt = fmt === undefined ? 'yyyy-MM-dd hh:mm:ss' : fmt
    if (timestamp === undefined) {
      timestamp = new Date().getTime()
    } else if (String(timestamp).length === 10) {
      timestamp = timestamp * 1000
    }
    timestamp = new Date(timestamp)
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (timestamp.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    const o = {
      'M+': timestamp.getMonth() + 1,
      'd+': timestamp.getDate(),
      '[H|h]+': timestamp.getHours(),
      'm+': timestamp.getMinutes(),
      's+': timestamp.getSeconds()
    }
    for (const k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        const str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length))
      }
    }
    return fmt
  },
  // 根据当前时间戳
  getNowStamp() {
    return Math.floor(+new Date() / 1000)
  },
  checkName(str) {
    const Reg = /^[a-zA-Z0-9\u4e00-\u9fa5\-\\_]+$/
    return Reg.test(str)
  },
  /**
   * 公用函数防抖处理
   * @param {function} fn 需要劫持的方法
   * @param {number} delay 防抖延迟设置
   * @param {boolean} immediate 防抖处理机制，true立即执行一次，false时间内执行最后一次
   */
  debounce(fn, delay = 300, immediate = true) {
    var timeoutID
    var lastExec = 0
    function wrapper() {
      var self = this
      var elapsed = Number(new Date()) - lastExec
      var args = arguments
      function exec() {
        lastExec = Number(new Date())
        fn.apply(self, args)
      }
      function clear() {
        timeoutID = undefined
      }
      if (immediate && !timeoutID) {
        exec()
      }
      if (timeoutID) {
        clearTimeout(timeoutID)
      }
      if (immediate === undefined && elapsed > delay) {
        exec()
      } else {
        timeoutID = setTimeout(immediate ? clear : exec, immediate === undefined ? delay - elapsed : delay)
      }
    }
    return wrapper
  }
}
const UTIL = {
  install: (Vue) => {
    Vue.prototype.$utils = Util
  }
}

export default UTIL
