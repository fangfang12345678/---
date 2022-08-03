<template>
  <div id="warehouseManagement">
    <el-card class="box-card">
      <el-form :inline="true" :model="page" class="demo-form-inline">
        <el-form-item>
          <div>仓库名称</div>
          <el-input
            v-model="page.warehouseName"
            placeholder="请输入"
          ></el-input>
        </el-form-item>
        <el-form-item class="demo-form-inline">
          <div>库区名称</div>

          <el-input v-model="page.name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item class="demo-form-inline">
          <div>仓库状态</div>

          <el-select v-model="page.status" placeholder="请选择">
            <el-option label="全部" value=""></el-option>
            <el-option label="停用" value="0"></el-option>
            <el-option label="启用" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="info" @click="close">重置</el-button>
        </el-form-item>
      </el-form></el-card
    >
    <el-card class="buttomcard">
      <div class="buttomthird">
        <el-button type="success" round @click="$router.push('toolPage')"
          >新增库位</el-button
        >
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
        <el-table-column fixed type="index" label="序号" width="120">
        </el-table-column>
        <el-table-column prop="code" label="仓库编码" width="120">
        </el-table-column>
        <el-table-column prop="name" label="仓库名称" width="120">
        </el-table-column>
        <el-table-column
          prop="type"
          :formatter="formatEmployment"
          label="仓库类型"
          width="120"
        >
        </el-table-column>
        <el-table-column prop="location" label="省/市/区" width="120">
        </el-table-column>
        <el-table-column prop="address" label="详细地址" width="120">
        </el-table-column>
        <el-table-column
          prop="status"
          label="仓库状态"
          :formatter="formatEmploymentTwo"
          width="120"
        >
        </el-table-column>
        <el-table-column prop="surface" label="仓库面积m²" width="120">
        </el-table-column>
        <el-table-column prop="includedNum" label="库区数量" width="120">
        </el-table-column>
        <el-table-column prop="createName" label="负责人" width="120">
        </el-table-column>
        <el-table-column prop="phone" label="联系电话" width="120">
        </el-table-column>
        <el-table-column prop="updateTime" label="更新时间" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="130">
          <template v-slot="{ row }">
            <el-button @click="handleClick(row.id)" type="text" size="small"
              >编辑</el-button
            >
            <el-button type="text" size="small">停用</el-button>
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
        :current-page="page.current"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="page.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="+total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getWareHousePage, getWaresit } from "@/api/warehouseManagement";
export default {
  name: "warehouseManagement",
  data() {
    return {
      page: {
        warehouseName: "",
        name: "",
        status: "",
        like_code: "",
        like_name: "",
        current: 1,
        size: 10,
        descs: "createTime",
      },
      total: 10,
      tableData: [],
    };
  },
  created() {
    this.getWareHousePage();
  },
  methods: {
    formatEmployment(row, column, cellValue, index) {
      if (cellValue === "ZZ") {
        return "中转仓";
      } else if (cellValue === "CB") {
        return "储备仓";
      } else if (cellValue === "JG") {
        return "加工仓";
      }
    },
    formatEmploymentTwo(row, column, cellValue, index) {
      if (cellValue === "1") {
        return "启用";
      } else {
        return "停用";
      }
    },
    async getWareHousePage() {
      const { data } = await getWareHousePage(this.page);
      this.tableData = data.data.records;
      this.total = data.data.total;
      // console.log(this.total);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.page.current = val;
      this.getWareHousePage();
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    async onSubmit() {
      // console.log("submit!");
      const { data } = await getWaresit(this.page);
      this.tableData = data.data.records;
    },
    handleClick(id) {
      this.$router.push({ path: "toolPage", query: { id: id } });
    },

    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
    },
    close() {
      this.page = {
        warehouseName: "",
        name: "",
        status: "",
        like_code: "",
        like_name: "",
        current: 1,
        size: 10,
        descs: "createTime",
      };
    },
  },
};
</script>

<style scoped lang="less">
.box-card {
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
}
</style>
