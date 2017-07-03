# Vue 第一天笔记

### 第二节：Vue 初体验

### 第三节：v-on注册事件

### 第四节：插值表达式

> 数据绑定最常见的形式就是使用 `Mustache` 语法（双大括号）的文本插值：`{{值}}` <br>
> 无论何时，绑定的数据对象上 `name`属性发生了改变，插值处的内容都会更新

### 第五节：v-text 与 v-html

`v-text` 与 `v-html` : 将变量值渲染到元素中
- 需要结合元素来进行使用
- 性能稍好并且避免 `FOUC`（浏览器样式闪烁）
- `v-text` ：将数据解析为纯文本
- `v-html` : 输出内容为真正的html
- **注意：
    在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 `XSS` 攻击。
    只在可信内容上使用 `v-html`，永不用在用户提交的内容上。**

### 第六节：v-cloak

v-cloak : 不需要表达式
- 这个指令保持在元素上直到关联实例结束编译。
  和 `CSS `规则如 `[v-cloak] { display: none }` 一起用时，
  这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。


#### 问题：

- 如何解决 `FOUC` 问题


### 第七节：v-bind

- 动态地绑定一个或多个 attribute
    + v-bind
        * 例如：`<input type="text" v-bind:value="text">`
        * 简写：`<input type="text" :value="text">`
    + 在绑定 class 或 style 时，支持其它类型的值，如数组或对象
        * 见例子
    + 文档：[Class 与 Style 绑定](http://v1-cn.vuejs.org/guide/class-and-style.html#数组语法-1)


### 第八节：v-model

- v-model:在表单控件或者组件上创建双向绑定,根据控件类型它自动选取正确的方法更新元素
- 限制：只能在以下元素和组件中使用
    + `<input>`
    + `<select>`
    + `<textarea>`
    + `components`
- 修饰符
    + `lazy` -- 在 `"change"` 而不是 `"input"` 事件中更新
    + `number` -- 将用户的输入转为 `Number` 类型
    + `debounce`(1.0) --设置一个最小的延时，在每次敲击之后延时同步输入框的值与数据。
    + `trim`(2.0) -- 过滤用户输入的首尾空格

- 文档
    + [1.0][表单控件绑定](http://v1-cn.vuejs.org/guide/forms.html)
    + [2.0][表单控件绑定](https://cn.vuejs.org/v2/guide/forms.html#lazy)

### 第九节：v-for

- v-for ：基于源数据将元素或模板块重复数次。指令的值必须使用特定语法

- 1.0 与 2.0的区别
    + `vue1.0`中有 `$index` ，而`vue2.0`中将 `$index`移除
    + `vue1.0`中 `(index,item) in list`  而 `vue2.0` 变成了 `(item,index) in list`的写法
    + `vue1.0`中使用 `track-by="$index"` 来标记`dom`对象的唯一性，`vue2.0`中改成了 `:key="item.id"`

- 文档
    + [1.0][v-for](http://v1-cn.vuejs.org/guide/list.html)
    + [2.0][v-for](https://cn.vuejs.org/v2/guide/list.html) ☆☆☆

### 第十节：v-if 与 v-show

- `v-if` 与 `v-show`
    + 根据表达式的值的真假条件渲染元素

- `v-if` 与 `v-show` 的区别
    + `v-if` 是将元素删除、添加 , 在切换时元素及它的数据绑定 / 组件被销毁并重建
    + `v-show` 是将元素隐藏`(none)`和显示`(block)`,根据表达式的值的真假切换元素的 display CSS 属性

- 文档 v-if 与 v-show
    + [1.0][v-if](http://v1-cn.vuejs.org/guide/conditional.html)
    + [2.0][v-if](https://cn.vuejs.org/v2/guide/conditional.html)
    + [1.0][v-show](http://v1-cn.vuejs.org/guide/conditional.html#v-show)
    + [2.0][v-show](https://cn.vuejs.org/v2/guide/conditional.html#v-show)

### 第十一节：v-on 修饰符

- v-on 修饰符
    + `.stop` - 调用 `event.stopPropagation()`。
    + `.prevent` - 调用 `event.preventDefault()`。
    + `.capture` - 添加事件侦听器时使用 `capture` 模式。
    + `.self` - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
    + `.native` - 监听组件根元素的原生事件。
    + `.once` - 只触发一次回调。
    + `.left` - (2.2.0) 只当点击鼠标左键时触发。
    + `.right` - (2.2.0) 只当点击鼠标右键时触发。
    + `.middle` - (2.2.0) 只当点击鼠标中键时触发。
    + `.passive` - (2.3.0) 以 `{ passive: true }` 模式添加侦听器

- 文档 v-on
    + [1.0][v-on](http://v1-cn.vuejs.org/api/#v-on)
    + [2.0][v-on](https://cn.vuejs.org/v2/api/#v-on)


### 实现品牌数据删除案例

- findIndex
    + 语法：arrayObj.findIndex(callbackfn [, thisArg]);
    + 返回满足回调函数中指定的测试条件的第一个数组元素的索引值。
    + arrayObj
        * 必需。数组对象。
    + callbackfn
        * 必需。用于测试数组中的每个元素的回调函数。
        * 回调函数语法：function callbackfn(value, index, thisArg)
        * Value：数组元素的值。index：数组元素的数字索引。arrayObj：要遍历的数组对象。
    + thisArg
        * 可选。指定回调函数中的 this 对象。如果未指定，则未定义 this 对象。
> 对于数组中的每个元素，findIndex 方法都会调用一次回调函数（采用升序索引顺序），直到有元素返回 true。  
只要有一个元素返回 true，findIndex 立即返回该返回 true 的元素的索引值。<br>
如果数组中没有任何元素返回 true，则 findIndex 返回 -1。

```javascript
    var abc = [1,2,3];
    abc.findIndex(function(item){
       return item == 2;  // 返回 索引 1
    })
```
```javascript
    var abc = [1,2,3];
    abc.findIndex(function(item){
       return item == 4;  // 返回 -1
    })
```


### 过滤器

>  Vue提供了一系列的固定逻辑来使程序员更加容易的实现这些功能，这些过滤器称之为系统过滤器，
Vue也提供了一个接口用来供程序员定义属于自己的特殊逻辑，Vue称之为自定义过滤器

- **注意：系统过滤器是Vue1.0中存在的，在Vue2.0中已经删除了**











## 本地搭建服务
