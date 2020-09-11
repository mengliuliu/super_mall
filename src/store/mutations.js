export default {
  // mutations唯一的目的就是修改state中的状态
  // mutaitons中的每个方法都尽可能完成的事情比较单一
  addProductCount(state, oldProduct) {
    oldProduct.count++;
  },
  addNewProduct(state, product) {
    // product.count = 1;
    state.productList.push(product);
  }
};
