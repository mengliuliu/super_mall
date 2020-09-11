<template>
  <div class="detail-param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table
      class="info-size"
      v-for="(table, index) in paramInfo.sizes"
      :key="index"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>

    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.infos" :key="index">
        <td class="info-param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>

    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="less" scoped>
.detail-param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
  table {
    border-collapse: collapse;
    width: 100%;
    tr {
      td {
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid rgba(100, 100, 100, 0.1);
      }
      td:first-child {
        width: 50px;
      }
    }
  }
  .info-param {
    tr {
      .info-param-key {
      }
      .param-value {
      }
    }
  }
  .info-img {
    img {
      width: 100%;
    }
  }
}
</style>
