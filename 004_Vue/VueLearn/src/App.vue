<!-- 以后项目的根组件 -->

<!-- template 主要存放html元素的 -->
<template>
    <div>
        <!-- 1.0 利用mint-ui中的header组件实现整个系统的头部 -->
        <mt-header fixed title="Vue商城"></mt-header>
        <!-- 路由占位符 -->
        <router-view></router-view>
        <!-- 3.0 利用mui中的tabbar组件实现系统的底部 -->
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
		</nav>
    </div>
</template>

<!-- 导出.vue这个组件对象，本质上是一个Vue对象，所以Vue中该定义的元素都可以使用 -->
<script>
export default{
    data(){
        return {
            msg : "Hello"
        }
    }
}
</script>
<!-- 当前页面的css样式， 其中scoped表示这个里面写的css代码只是在当前组件页面上有效，不会影响到其他组件里面 -->
<style scope>
    .red{
        color : red
    }
</style>
