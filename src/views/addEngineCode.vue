<template>
  <div>
    <el-form :model="formData" :label-position="'right'" label-width="120px">
      <el-form-item label="App">
        <el-input v-model="formData.app" placeholder disabled></el-input>
      </el-form-item>
      <el-form-item label="group">
        <el-input v-model="formData.group" placeholder></el-input>
      </el-form-item>
      <el-form-item label="engine.code">
        <el-input v-model="formData.engineCode" placeholder></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import services from "../service/service";
export default {
  data() {
    return {
      formData: {
        app: "App",
        group: "",
        engineCode: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.formData);
      // services.upset(this.formData).then(res => {
      //   console.log(res);
      //   if (res.statusCode === 200) {
      //     console.log("--------------①执行成功----------------");
          this.$router.push({
            name: "regFormPage",
            query: { engineCode: this.formData.engineCode }
          });
      //   }
      // });
      // this.$router.push({ name: "regFormPage" });
    }
  }
};
</script>

<style lang="scss" scoped></style>
