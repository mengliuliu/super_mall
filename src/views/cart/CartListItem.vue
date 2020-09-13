<template>
  <div class="cart-list-item">
    <!-- {{ product }} -->
    <cart-check-box
      :checked="product.checked"
      @click.native="checkoutClick"
      class="checkout-button"
    ></cart-check-box>

    <div class="item-info">
      <div class="img">
        <img :src="product.image" alt="" />
      </div>
      <div class="detail">
        <div class="title">{{ product.title }}</div>
        <div class="desc">{{ product.desc }}</div>
        <div class="price-number">
          <span class="price">￥{{ product.price }}</span>
          <span class="number">x{{ product.count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartCheckBox from "@/views/cart/CartCheckBox";
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      //   isActived: false
    };
  },
  components: {
    CartCheckBox
  },
  created() {
    console.log(this.product);
  },
  methods: {
    checkoutClick() {
      //   this.isActived = !this.isActived;
      //   this.product.checkout = !this.product.checkout;
      this.$store.commit("changeCheckout", this.product);
    }
  }
};
</script>

<style lang="less" scoped>
.active {
  color: var(--color-tint);
}

.cart-list-item {
  padding-top: 5px;
  display: flex;
  border-bottom: 1px solid #aaa;
  //   height: 160px;
  .checkout-button {
    // flex: 1;
    width: 10%;
    // color: red;
    // background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-info {
    // flex: 9;
    width: 90%;
    display: flex;
    justify-content: flex-start;
    .img {
      width: 30%;
      img {
        width: 100%;
        border-radius: 5%;
      }
    }
    .detail {
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding-left: 5px;
      .title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 20px;
        font-weight: 600;
      }
      .desc {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #aaa;
      }
      .price-number {
        color: var(--color-tint);
        display: flex;
        justify-content: space-around;
        font-size: 20px;
        .price {
        }
        .number {
          color: black;
        }
      }
    }
  }
}
</style>
