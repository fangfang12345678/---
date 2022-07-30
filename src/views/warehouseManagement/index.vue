<template>
  <div id="warehouseManagement">
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
            <el-option label="全部" value="shanngga"></el-option>
            <el-option label="停用" value="sanngga"></el-option>
            <el-option label="启用" value="shnngga"></el-option>
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
        <el-table-column fixed type="index" label="序号" width="150">
        </el-table-column>
        <el-table-column prop="code" label="仓库编码" width="120">
        </el-table-column>
        <el-table-column prop="name" label="仓库名称" width="120">
        </el-table-column>
        <el-table-column prop="type" label="仓库类型" width="120">
        </el-table-column>
        <el-table-column prop="location" label="省/市/区" width="300">
        </el-table-column>
        <el-table-column prop="address" label="详细地址" width="120">
        </el-table-column>
        <el-table-column prop="status" label="仓库状态" width="120">
        </el-table-column>
        <el-table-column prop="surface" label="仓库面积m²" width="300">
        </el-table-column>
        <el-table-column prop="includedNum" label="库区数量" width="120">
        </el-table-column>
        <el-table-column prop="createName" label="负责人" width="120">
        </el-table-column>
        <el-table-column prop="phone" label="联系电话" width="300">
        </el-table-column>
        <el-table-column prop="updateTime" label="更新时间" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="130">
          <template v-slot="{ row }">
            <el-button @click="handleClick(row.id)" type="text" size="small"
              >编辑</el-button
            >
            <el-button @click="handleClick(row.id)" type="text" size="small"
              >停用</el-button
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
        :total="20"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getWareHousePage } from "@/api/warehouseManagement";
export default {
  name: "warehouseManagement",
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      page: {
        like_code: "",
        like_name: "",
        current: 1,
        size: 10,
        descs: "createTime",
      },
      total: 10,
      tableData: [],

      // value: "",
      radio: "1",

      formInline: {
        user: "",
        region: "",
      },
    };
  },
  created() {
    this.getWareHousePage();
  },
  methods: {
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
    onSubmit() {
      // console.log("submit!");
    },
    async handleClick(id) {
      // console.log(id);
      this.$router.push({ path: "toolPage", query: { id: id } });
      // const res = await getWareDetail(id);
      // console.log(res);
      // this.$refs.refForm.roleForm = res.data;
      // console.log(this.$ref.refForm.roleForm);
    },

    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
    },

    // addWare() {
    //   this.dialogTableVisible = true;
    //   // this.$router.back();
    // },
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
