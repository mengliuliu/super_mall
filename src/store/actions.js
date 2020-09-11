export default {
  addProduct({ state, commit }, product) {
    let oldProduct = null;
    for (const item of state.productList) {
      if (item.iid === product.iid) {
        oldProduct = item;
      }
    }
    if (oldProduct) {
      // 在productList中查找到了商品，只需给product的count属性++即可
      // oldProduct.count++;
      commit("addProductCount", oldProduct);
    } else {
      // 在productList中没有查找到商品，则需要给商品添加count属性，然后在push到productList中
      product.count = 1;
      commit("addNewProduct", product);
    }
  }
};
