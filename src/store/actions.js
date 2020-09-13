export default {
  addProduct({ state, commit }, product) {
    return new Promise((resolve, reject) => {
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
        resolve("当前商品数量加1");
      } else {
        commit("addNewProduct", product);
        resolve("当前商品以添加");
      }
    });
  }
};
