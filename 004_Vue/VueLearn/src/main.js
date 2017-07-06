// 1.0 导入vue核心包
import Vue from "vue";

// 2.0 导入App.vue的vue对象
import App from "./App.vue";

// 5.0 导入mint-ui的css文件
import "mint-ui/lib/style.min.css";

// 5.1 导入mint-ui组件对象
import mintui from "mint-ui";

// 5.2 全局中使用mint-ui
Vue.use(mintui);

// 6.0 注册mui的css文件
import "../statics/mui/css/mui.css";

// 4.0 导入vue-router
import vueRouter from "vue-router";

// 4.1 将vueRouter绑定到vue对象上
Vue.use(vueRouter);

// 4.3.1 导入路由规则对应的组件对象
import login from "./components/account/login.vue";
import register from "./components/account/register.vue";

// 4.3.2 定义路由规则
var router = new vueRouter({
	routes : [
		{ path : "/login", component : login },
		{ path : "/register", component : register }
	]
})

// 3.0 利用Vue对象进行解析渲染
new Vue({
	el : ".app",
	render : c => c(App),
	// 使用路由对象实例
	router : router
})
