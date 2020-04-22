<template>
  <div>
    <el-button type="primary" style="float:right" @click="AddListRow()"
      >添加信息元</el-button
    >
    <div style="clear:both"></div>
    <el-table :data="tableData" border>
      <el-table-column fixed="left" label="info.unit">
        <template slot-scope="scope">
          <el-input v-model="scope.row.infoUnit"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="info.service">
        <template slot-scope="scope">
          <!-- {{ scope.row.MROAmount }}-->
          <el-input v-model="scope.row.infoService"></el-input>
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

    <el-button type="primary" @click="turnToChart()">确认数据</el-button>
  </div>
</template>

<script>
import service from '../service/service'
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
        infoUnit: "",
        infoService: "",
        namespace: ""
      });
    },
    handleDelete(index) {
      this.tableData.splice(index, 1);
    },
    turnToChart() {
      this.tableData.forEach(e=>{
        e.engineCode = this.$route.query.engineCode
      })
      console.log(this.tableData)
      service.infoUnitUpset(this.tableData).then(res=>{
        if(res.statusCode === 200){
           this.$router.push({ name: "jsplumbPage" ,query:this.$route.query.engineCode});
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped></style>
