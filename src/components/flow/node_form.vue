<template>
  <div class="flow-node-form">
    <div class="flow-node-form-header">编辑</div>
    <div class="flow-node-form-body">
      <el-form :model="node" ref="dataForm" label-width="80px">
        <div v-if="node.type==='rule'">
          <el-form-item label="类型">
            <el-input v-model="node.type" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="名称">
            <el-input v-model="node.name"></el-input>
          </el-form-item>
          <el-form-item label="表达式">
            <el-input v-model="node.expression"></el-input>
          </el-form-item>
          <el-form-item label="节点别名">
            <el-input v-model="node.aliasName"></el-input>
          </el-form-item>
          <el-form-item label="规则表达式">
            <el-input v-model="node.testRuleId"></el-input>
          </el-form-item>
          <el-form-item label="事件">
            <el-input v-model="node.enventId"></el-input>
          </el-form-item>
          <el-form-item label="规则描述">
            <el-input v-model="node.description"></el-input>
          </el-form-item>
        </div>
        <div v-else>
          <div style="height:40px"></div>
        </div>
        <div v-if="node.type==='end'">
          <!-- <el-form-item label="事件类型">
            <el-input v-model="node.enventType"></el-input>
          </el-form-item>
          <el-form-item label="事件别名">
            <el-input v-model="node.aliasName"></el-input>
          </el-form-item>
          <el-form-item label="事件返回对象">
            <el-input v-model="node.returnType"></el-input>
          </el-form-item>
          <el-form-item label="参数1">
            <el-input v-model="node.params1"></el-input>
          </el-form-item>
          <el-form-item label="参数2">
            <el-input v-model="node.params2"></el-input>
          </el-form-item>
          <el-form-item label="参数3">
            <el-input v-model="node.params3"></el-input>
          </el-form-item>
          <el-form-item label="参数4">
            <el-input v-model="node.params4"></el-input>
          </el-form-item>
          <el-form-item label="参数5">
            <el-input v-model="node.params5"></el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input v-model="node.description"></el-input>
          </el-form-item> -->
        </div>
        <el-form-item>
          <el-button v-if="node.type==='rule'" @click="reset" icon="el-icon-close">重置</el-button>
          <el-button v-if="node.type==='rule'" type="primary" icon="el-icon-check" @click="save">保存</el-button>
          <el-button v-if="node.type==='end'" @click="doSth" style="width:200px" icon="el-icon-check">配置</el-button>
          <el-button v-if="node.type==='task'" @click="doSth1" style="width:200px" icon="el-icon-check">配置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { cloneDeep } from "lodash";

export default {
  data() {
    return {
      node: {},
      data: {},
      dialogVisible: false
    };
  },
  methods: {
    /**
     * 表单修改，这里可以根据传入的ID进行业务信息获取
     * @param data
     * @param id
     */
    init(data, id) {
      this.data = data;
      data.nodeList.filter(node => {
        if (node.id === id) {
          console.log(node);
          this.node = cloneDeep(node);
        }
      });
    },
    reset() {
      this.data.nodeList.filter(node => {
        if (node.id === this.node.id) {
          this.node = cloneDeep(node);
        }
      });
    },
    save() {
      this.data.nodeList.filter(node => {
        if (node.id === this.node.id) {
          if (this.node.type === "task") {
            node.name = this.node.name;
            node.expression = this.node.expression;
            node.aliasName = this.node.aliasName;
            node.testRuleId = this.node.testRuleId;
            node.enventId = this.node.enventId;
            node.description = this.node.description;
          }

          if (this.node.type === "end") {
            node.enventType = this.node.enventType;
            node.aliasName = this.node.aliasName;
            node.returnType = this.node.returnType;
            node.params1 = this.node.params1;
            node.params2 = this.node.params2;
            node.params3 = this.node.params3;
            node.params4 = this.node.params4;
            node.params5 = this.node.params5;
            node.description = this.node.description;
          }
        }
      });
    },
    doSth() {
      this.$bus.$emit("doSth", this.node);
    },
    doSth1() {
      this.$bus.$emit("doSth1", this.node);
    }
  }
};
</script>

<style>
.flow-node-form {
  background-color: #f7f9fb;
  /*margin-left: 5px;*/
}

.flow-node-form-header {
  height: 32px;
  border-top: 1px solid #dce3e8;
  border-bottom: 1px solid #dce3e8;
  background: #ebeef2;
  color: #000;
  line-height: 32px;
  padding-left: 12px;
  font-size: 14px;
}

.flow-node-form-body {
  margin-top: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
}
</style>
