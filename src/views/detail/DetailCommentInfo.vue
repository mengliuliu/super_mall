<template>
  <div class="detail-comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-title">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="comment-info">
      <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="" />
        <span class="user-name">
          {{ commentInfo.user.uname }}
        </span>
      </div>
      <div class="info-content">{{ commentInfo.content }}</div>
      <div class="info-param">
        <span class="created">{{ commentInfo.created | dateFormat }}</span>
        <span class="style">{{ commentInfo.style }}</span>
      </div>
      <div class="info-img">
        <img
          :src="img"
          v-for="(img, index) in commentInfo.images"
          :key="index"
          alt=""
          @load="imgLoad"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { dateFormat } from "@/common/utils";
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    dateFormat
  },
  methods: {
    // 图片加载完执行该函数
    imgLoad() {
      this.$emit("imgLoad");
    }
  }
};
</script>

<style lang="less" scoped>
.detail-comment-info {
  border-top: 3px solid #eee;
  padding: 0 25px;
  .comment-title {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }
  .comment-info {
    .info-user {
      display: flex;
      justify-content: flex-start;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .user-name {
        line-height: 50px;
        font-size: 20px;
        font-weight: 500;
        padding-left: 10px;
      }
    }
    .info-content {
      text-align: left;
      margin-top: 10px;
      color: rgb(145, 145, 145);
      font-size: 14px;
      font-weight: 600;
    }
    .info-param {
      text-align: left;
      margin-top: 10px;
      color: rgb(145, 145, 145);
      font-size: 16px;
      .created {
        margin-right: 10px;
      }
    }
    .info-img {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      img {
        width: 100px;
        // height: 80px;
        margin: 1px 1px 0 0;
      }
    }
  }
}
</style>
