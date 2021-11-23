import Vue from 'vue'

// 预加载背景图片指令,先加载元素指定的模糊图片,指令传入的高清图加载完毕后就将背景图替换为高清图
Vue.directive('changeBackgroundImage', {
  inserted: (el, binding) => {
    const img = new Image()
    img.src = binding.value
    img.onload = () => {
      el.style.backgroundImage = `url(${binding.value})`
    }
  }
})
