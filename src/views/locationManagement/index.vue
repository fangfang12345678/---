<template>
  <div id="locationManagement">
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
        <el-button type="info" round class="twobutton">下载库位模板</el-button>
        <el-button type="info" round>导入库位信息</el-button>
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
        <el-table-column prop="areaCode" label="仓库编号" width="120">
        </el-table-column>
        <el-table-column prop="areaName" label="仓库名称" width="120">
        </el-table-column>
        <el-table-column prop="code" label="库位编号" width="300">
        </el-table-column>
        <el-table-column prop="name" label="库位名称" width="120">
        </el-table-column>
        <el-table-column prop="temperatureType" label="温度类型" width="120">
        </el-table-column>
        <el-table-column prop="code" label="承重类型" width="300">
        </el-table-column>
        <el-table-column prop="name" label="用途属性" width="120">
        </el-table-column>
        <el-table-column prop="maxWeight" label="承重上限" width="300">
        </el-table-column>
        <el-table-column prop="updateTime" label="更新时间" width="120">
        </el-table-column>
        <el-table-column prop="useStatus" label="停用状态" width="120">
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
      <!-- 分页组件 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="page.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="60"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getLocationPageTwo } from "@/api/locationManagement";
export default {
  name: "locationManagement",
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      page: {
        areaName: "",
        name: "",
        current: 1,
        size: 10,
      },
      total: 10,
      tableData: [],

      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      radio: "1",

      formInline: {
        user: "",
        region: "",
      },
    };
  },
  created() {
    this.getLocationPageTwo();
  },
  methods: {
    async getLocationPageTwo() {
      const { data } = await getLocationPageTwo(this.page);
      this.tableData = data.data.records;
      this.total = data.data.total;
      console.log(this.total);
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
      console.log("submit!");
    },
    handleClick(row) {
      console.log(row);
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    addWare() {
      this.dialogTableVisible = true;
      this.$router.push("toolPage");
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
