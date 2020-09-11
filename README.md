# super_mall

## 首页

### 知识点

- `native`修饰符用于给组件的根元素绑定原生事件

### 注意

- keep-alive 组件中的 exclude 属性和 include 属性
  - include 属性值是字符串或正则表达式。只有名称匹配的组件会被缓存。
  - 注意这里是组件的名称，这个`name`属性和组件的 data 平级，不是路由的`name`

### better-scroll 中遇到的问题

- 页面不能滑动和滚动
  - 不能滚动
    - 安装`@better-scroll/mouse-wheel`插件
  - 不能滑动
    - 不能滑动是由于 scroll 组件中默认插槽中的内容包含异步请求的图片，导致 better-scroll 的`scrollerHeight`属性的值不是 content 的真正高度
    - 给 img 标签绑定`load`事件，当事件触发（当前图片加载完毕）时，调用 better-scroll 对象的 refresh()，为了防止每加载一个图片调用一次方法，浪费性能，使用防抖函数
- 标签页的吸顶效果没完成

## 详情页

### 知识点

- 用 class 的方式对后台的不规范数据进行整合

### 注意

- package.json 文件中的~和^
  - ^ 表示不改变大版本号
  - ~ 表示不改变大版本号和次版本号

### 知识点

- mixin（混入）

- 标题和内容的联动效果（顶部标签页的状态值和页面滚动的联动效果）
  - 点击顶部标签页的状态值
    - 存储各个状态的`offsetTop`值（在图片加载完利用防抖函数）
    - 监听状态值的点击事件，发生点击时触发 scroll 组件（自己封装的）中 `better-scroll`对象的 scrollTo 方法进行页面跳转
  - 滚动页面
    - 监听`better-scroll`对象发生滚动时触发的事件
    - 在一定的条件下改变导航栏中状态值的索引
- z-index
  - 用于不是 static 定位的定位元素，设置定位元素在 Z 轴（垂直与显示器的轴）的层叠顺序
