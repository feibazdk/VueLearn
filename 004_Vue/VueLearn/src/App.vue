<!-- 以后项目的根组件 -->

<!-- template 主要存放html元素的 -->
<template>
    <div>
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>

        <!-- 路由占位符 -->
        <router-view></router-view>
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
