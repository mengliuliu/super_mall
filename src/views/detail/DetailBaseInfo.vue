<template>
  <div v-if="Object.keys(base).length !== 0" class="base-info">
    <div class="detail-goods-info">
      <div class="title">{{ base.title }}</div>
      <div class="price">
        <span class="real-price">￥{{ base.realPrice }}</span>
        <span class="old-price">{{ base.oldPrice }}</span>
        <span class="discount">{{ base.discount }}</span>
      </div>
      <div class="num">
        <span class="sales-volume">{{ base.columns[0] }}</span>
        <span class="collect">{{ base.columns[1] }}</span>
        <span class="collect">{{
          base.services[base.services.length - 1].name
        }}</span>
      </div>
      <div class="info-service">
        <span
          class="info-service-item"
          v-for="index in base.services.length - 1"
          :key="index"
        >
          <img :src="base.services[index - 1].icon" />
          <span>{{ base.services[index - 1].name }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    base: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="less" scoped>
.base-info {
  .detail-goods-info {
    .title {
      font-size: 18px;
      font-weight: 700;
      padding: 5px;
      text-align: left;
    }
    .price {
      display: flex;
      justify-content: flex-start;
      padding-left: 10px;
      .real-price {
        font-size: 24px;
        color: var(--color-tint);
        font-weight: 600;
      }
      .old-price {
        // padding-top: 5px;
        text-decoration: line-through;
        font-size: 14px;
        color: rgb(166, 164, 172);
        padding: 10px 10px 0;
      }
      .discount {
        background-color: rgb(255, 103, 121);
        color: white;
        border-radius: 30%;
        line-height: 27px;
      }
    }
    .num {
      display: flex;
      justify-content: space-around;
      font-size: 14px;
      color: #aaa;
      margin-top: 10px;
    }
    .info-service {
      display: flex;
      justify-content: space-around;
      margin-top: 10px;
      border-top: 5px solid rgb(241, 241, 241);
      padding: 10px;
      .info-service-item {
        font-weight: 700;
        span {
        }
        img {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
}
</style>
