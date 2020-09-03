<template>
  <div class="recommend">
    <div class="rec_item" v-for="(item, index) in recommendList" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div class="title">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommendList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="less" scoped>
.recommend {
    display: flex;
    .rec_item {
        flex: 1;
        padding: 10px 0 10px;
        margin-bottom: 10px;
        font-size: 14px;
        a {
            img {
                width: 80%;
            }
            div {
                margin-top: 5px;
            }
        }
    }
}
</style>
