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

// 7.0 导入全局样式的css
import "../statics/css/site.css"

// 8.0 导入vue-resource模块
import vueResource from "vue-resource";
Vue.use(vueResource);

// 9.0 定义一个全局过滤器实现日期的格式化
import moment from "moment";
Vue.filter("datafmt",function(input, fmtstring){
	// 使用 moment.js 格式化日期
	return moment(input).format(fmtstring)
});

// 10.0 使用图片预览组件
import VuePreview from 'vue-preview';
Vue.use(VuePreview);

// 4.0 导入vue-router
import vueRouter from "vue-router";

// 4.1 将vueRouter绑定到vue对象上
Vue.use(vueRouter);

// 4.3.1 导入路由规则对应的组件对象
import home from "./components/home.vue";
import shopcar from "./components/shopcar/car.vue";
import newList from "./components/news/newslist.vue";
import newsInfo from "./components/news/newsinfo.vue";
import photoList from "./components/photo/photolist.vue";
import photoInfo from "./components/photo/photoinfo.vue";
import goodsList from "./components/goods/goodslist.vue";
import goodsInfo from "./components/goods/goodsinfo.vue";

// 4.3.2 定义路由规则
var router = new vueRouter({
	linkActiveClass:'mui-active',  //改变路由激活时的class名称
	routes : [
		{ path : "/", component : home },
		{ path : "/home", component : home },
		{ path : "/shopcar", component : shopcar },
		{ path : "/news/newslist", component : newList },
		{ path : "/news/newsinfo/:id", component : newsInfo },
		{ path : "/photo/photolist", component : photoList },
		{ path : "/photo/photoinfo/:id", component : photoInfo },
		{ path : "/goods/goodslist", component : goodsList },
		{ path : "/goods/goodsinfo/:id", component : goodsInfo }
	]
})

// 3.0 利用Vue对象进行解析渲染
new Vue({
	el : ".app",
	render : c => c(App),
	// 使用路由对象实例
	router : router
})
