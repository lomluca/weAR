import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})

window.addEventListener('scroll', function(){  
    var value = $(window).scrollTop();
    if ( value > 200 ){
        $("header").css("position", "fixed");
        $("header").css("top", "0px");
        $("header").css("z-index", "9999");
        $(".headerRow1").css("display", "none");
        $(".headerRow2").css("display", "none");
        $(".headerRow3_logo").css("display", "inline-block");
        $(".el-menu").css("width", "96%");
        $("main").css("margin-top", "120px");
        $("main").css("padding-top", "30px");
    }
    else{
        $("header").css({ 'position' : '' , 'top' : '' , 'z-index' : '' });
        $(".headerRow1").css("display", "inline-block");
        $(".headerRow2").css("display", "inline-block");
        $(".headerRow3_logo").css("display", "none");
        $(".el-menu").css("width", "100%");
        $("main").css({ 'margin-top' : '', 'padding-top' : '' });
    }
}, true)