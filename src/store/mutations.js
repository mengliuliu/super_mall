export default {
  // mutations唯一的目的就是修改state中的状态
  // mutaitons中的每个方法都尽可能完成的事情比较单一
  addProductCount(state, oldProduct) {
    oldProduct.count++;
  },
  addNewProduct(state, product) {
    // product.count = 1;
    // 在productList中没有查找到商品，则需要给商品添加count属性，然后在push到productList中
    product.count = 1;
    product.checked = true;
    state.productList.push(product);
  },
  // 改变商品的选中状态
  changeCheckout(state, product) {
    product.checked = !product.checked;
  },
  // 改变全部商品的状态
  changeAllState(state, flag) {
    state.productList.forEach(element => {
      element.checked = flag;
    });
  }
};
