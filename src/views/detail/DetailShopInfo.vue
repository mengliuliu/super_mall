<template>
  <div class="detail-shop-info">
    <div class="img-name">
      <img :src="shop.logo" alt="" />
      <span>{{ shop.name }}</span>
    </div>
    <div class="shop-info">
      <div class="left">
        <div class="sell">
          <span class="num">{{ (shop.sells / 10000).toFixed(1) }}万</span
          ><span class="name">总销量</span>
        </div>
        <div class="baby">
          <span class="num">{{ shop.goodsCount }}</span>
          <span class="name">全部宝贝</span>
        </div>
      </div>
      <div class="right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="btn">
      <button>进店逛逛</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="less" scoped>
.detail-shop-info {
  border-top: 8px solid rgb(241, 241, 241);
  .img-name {
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-left: 10px;
    }
    span {
      line-height: 60px;
      padding-left: 10px;
    }
  }
  .shop-info {
    font-weight: 600;
    display: flex;
    justify-content: space-around;
    .left {
      display: flex;
      justify-content: space-around;
      border-right: 1px solid grey;
      padding-right: 20px;
      .sell {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
      }
      .baby {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 10px;
      }
    }
    .right {
      table {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-weight: 500;
        font-size: 14px;
        tr {
          .score {
            padding: 0 10px;
            width: 50px;
          }
          .better {
            background-color: green;
            color: white;
          }
          .score-better {
            color: var(--color-tint);
          }
          .better-more {
            color: white;
            background-color: var(--color-tint);
          }
        }
      }
    }
  }
  .btn {
    margin: 20px 0;
    button {
      width: 140px;
      height: 40px;
      border-radius: 10%;
    }
  }
}
</style>
