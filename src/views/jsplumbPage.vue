<template>
  <div>
    <FlowPanel :engineCode="engineCode"></FlowPanel>
  </div>
</template>

<script>
import FlowPanel from "../components/flow/panel";
export default {
  props:{
    engineCode:{
      type:String,
      default:''
    }
  },
  components: {
    FlowPanel
  },
  data() {
    return {};
  },
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.workplace {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
