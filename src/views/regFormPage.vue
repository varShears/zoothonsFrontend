<template>
  <div>
    <el-button type="primary" style="float:right" @click="AddListRow()"
      >添加信息元</el-button
    >
    <div style="clear:both"></div>
    <el-table :data="tableData" border>
      <el-table-column fixed="left" label="info.unit">
        <template slot-scope="scope">
          <el-input v-model="scope.row.unit"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="info.service">
        <template slot-scope="scope">
          <!-- {{ scope.row.MROAmount }}-->
          <el-input v-model="scope.row.service"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="namespace">
        <template slot-scope="scope">
          <el-input v-model="scope.row.namespace"></el-input>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="220">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="TurnToPre()">上一步</el-button>

    <el-button type="primary" @click="turnToChart()">确认生成</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    TurnToPre() {
      history.back();
    },
    AddListRow() {
      this.tableData.push({
        unit: "",
        service: "",
        namespace: ""
      });
    },
    handleDelete(index) {
      this.tableData.splice(index, 1);
    },
    turnToChart() {
      this.$router.push({ name: "jsplumbPage" });
    }
  }
};
</script>

<style lang="scss" scoped></style>
