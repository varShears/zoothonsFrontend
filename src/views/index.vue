<template>
  <div>
    <el-button type="primary" @click="turnToNext">分组配置</el-button>
    <el-button type="primary">信息元配置</el-button>
    <el-button type="primary">规则配置</el-button>
    <el-button type="primary">事件配置</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    turnToNext() {
      this.$router.push({ name: "addEngineCode" });
    }
  }
};
</script>

<style lang="scss" scoped></style>
