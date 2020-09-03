<template>
  <div class="detail">
    {{ this.iid }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      iid: 0
    };
  },
  created() {
    this.iid = this.$route.params.iid;
  }
};
</script>

<style lang="less" scoped></style>
