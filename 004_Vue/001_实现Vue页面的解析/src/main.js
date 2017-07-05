// 导入vue核心包
import Vue from "vue";

// 导入App.vue的vue对象
import App from './App.vue';

// 利用Vue对象进行解析渲染
new Vue({
	el : ".app",
	render : c => c(App)
})
