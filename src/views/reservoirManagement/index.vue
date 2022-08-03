<template>
  <div id="reservoirManagement">
    <el-card class="box-card">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <div>库区名称</div>

          <el-input v-model="formInline.user" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item class="demo-form-inline">
          <div>库位名称</div>

          <el-input v-model="formInline.user" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item class="demo-form-inline">
          <div>库位状态</div>

          <el-select v-model="formInline.region" placeholder="请选择">
            <el-option label="全部" value="shanghai"></el-option>
            <el-option label="停用" value="beijing"></el-option>
            <el-option label="启用" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form></el-card
    >
    <el-card class="buttomcard">
      <div class="buttomthird">
        <el-button type="success" round @click="addWare">新增库位</el-button>
      </div>
      <el-table
        class="table"
        :data="tableData"
        border
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column fixed type="index" label="序号" width="150">
        </el-table-column>
        <el-table-column prop="warehouseName" label="所属仓库" width="120">
        </el-table-column>
        <el-table-column prop="code" label="库区编号" width="120">
        </el-table-column>
        <el-table-column prop="name" label="库区名称" width="120">
        </el-table-column>
        <el-table-column
          prop="temperatureType"
          label="温度类型"
          :formatter="formatEmployment"
          width="100"
        >
        </el-table-column>
        <el-table-column prop="bearingType" label="承重类型" width="120">
        </el-table-column>
        <el-table-column prop="useType" label="用途属性" width="120">
        </el-table-column>
        <el-table-column
          prop="status"
          label="库区状态"
          :formatter="formatEmploymentTwo"
          width="120"
        >
        </el-table-column>
        <el-table-column prop="createName" label="负责人" width="120">
        </el-table-column>
        <el-table-column prop="phone" label="联系电话" width="120">
        </el-table-column>
        <el-table-column prop="includedNum" label="库位数量" width="120">
        </el-table-column>
        <el-table-column prop="updateTime" label="更新时间" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="130">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >编辑</el-button
            >
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >启用</el-button
            >
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="page.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="4"
      >
      </el-pagination>
    </div>


  </div>
</template>

<script>
import { getLocationPage } from "@/api/reservoirManagement.js";
export default {
  name: "reservoirManagement",
  data() {
    return {
      page: { id: "", name: "", warehouseName: "", size: 10, current: 1 },
      total: "",
      // dialogTableVisible: false,
      tableData: [],
      options: [],
      value: "",
      radio: "1",
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  created() {
    this.getLocationPage();
  },
  methods: {
    formatEmploymentTwo(row, column, cellValue, index) {
      if (cellValue === 0) {
        return "禁用";
      } else if (cellValue === 1) {
        return "启用";
      }
    },
    formatEmployment(row, column, cellValue, index) {
      if (cellValue === "CW") {
        return "常温";
      } else if (cellValue === "HW") {
        return "恒温";
      } else if (cellValue === "LC") {
        return "冷藏";
      }
    },
    async getLocationPage() {
      const { data } = await getLocationPage(this.page);
      this.tableData = data.data.records;
      this.total = data.data.total;
      // console.log(this.tableData);
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    onSubmit() {
      // console.log("submit!");
    },
    handleClick(row) {
      // console.log(row);
    },

    handleSizeChange() {
      // console.log(11);
    },
    handleCurrentChange() {
      // console.log(345);
    },
    addWare() {
      // this.dialogTableVisible = true;
      // this.$router.push("toolPage");
    },
  },
};
</script>

<style scoped lang="less">
.box-card {
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  .demo-form-inline {
    margin-left: 40px;
  }
  button {
    border-radius: 10px;
    margin-left: 120px;
    margin-top: 40px;
  }
}
.buttomcard {
  margin-top: 20px;
  .buttomthird {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .twobutton {
      margin-left: 800px;
    }
  }

  /deep/.el-table .warning-row {
    background: oldlace;
  }

  /deep/.el-table .success-row {
    background: #f0f9eb;
  }
}

.block {
  margin-left: 300px;
  margin-top: 20px;
}
.bottom {
  display: flex;
  justify-content: center;
  // margin: 0 auto;
}
</style>
