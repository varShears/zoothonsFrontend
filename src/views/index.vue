<template>
  <div>
    <el-button type="primary" @click="turnToNext">test1</el-button>
    <el-button type="primary">test2</el-button>
    <el-button type="primary">test3</el-button>
    <el-button type="primary">test4</el-button>
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
