# super_mall

## 首页

### 新学知识点

- `native`修饰符用于给组件的根元素绑定原生事件

### better-scroll 中遇到的问题

- 页面不能滑动和滚动
  - 不能滚动
    - 安装`@better-scroll/mouse-wheel`插件
  - 不能滑动
    - 不能滑动是由于 scroll 组件中默认插槽中的内容包含异步请求的图片，导致 better-scroll 的`scrollerHeight`属性的值不是 content 的真正高度
    - 给 img 标签绑定`load`事件，当事件触发（当前图片加载完毕）时，调用 better-scroll 对象的 refresh()，为了防止每加载一个图片调用一次方法，浪费性能，使用防抖函数
- 标签页的吸顶效果没完成
