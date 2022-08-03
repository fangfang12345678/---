<template>
  <div id="locationView">
    <div class="left">
      <el-card style="width: 100%; height: 100%">
        <div style="margin: 20px">库区选择</div>
        <el-select
          v-model="value"
          placeholder="请选择"
          style="margin-left: 20px"
        >
          <el-option value="1号仓库"> </el-option>
          <el-option value="1号仓库"> </el-option>
        </el-select>
        <el-form class="form">
          <el-input
            style="width: 180px"
            class="firstInput"
            placeholder="请输入库区的名称"
            suffix-icon="el-icon-search"
          ></el-input>
          <div class="fourButton">
            <el-button type="warning" @click="getOutlocationState"
              >出库缓存区</el-button
            >
            <el-button>警告按钮</el-button>

            <el-button>警告按钮</el-button>

            <el-button>警告按钮</el-button>
          </div>
        </el-form>
      </el-card>
    </div>
    <div class="right">
      <el-card style="width: 100%; height: 100%">
        <el-row
          ><el-col :span="4">库区总览</el-col
          ><el-col :span="4">库存总计：<span>4</span></el-col
          ><el-col :span="4">停用车位：<span>0</span></el-col
          ><el-col :span="4">占用车位：<span>0</span><span>0</span></el-col
          ><el-col :span="4">空闲车位：<span>1</span></el-col></el-row
        >
        <el-row style="margin: 20px 0"
          ><el-tooltip
            content="Top center"
            placement="top"
            style="background: #00be76; width: 50px; height: 50px"
          >
            <el-button></el-button> </el-tooltip
          ><el-tooltip
            content="Top center"
            placement="top"
            style="background: #00be76; width: 50px; height: 50px"
          >
            <el-button></el-button> </el-tooltip
          ><el-tooltip
            content="Top center"
            placement="top"
            style="background: #00be76; width: 50px; height: 50px"
          >
            <el-button></el-button> </el-tooltip
          ><el-tooltip
            content="Top center"
            placement="top"
            style="background: #00be76; width: 50px; height: 50px"
          >
            <el-button></el-button> </el-tooltip
          ><el-tooltip
            content="Top center"
            placement="top"
            style="background: #00be76; width: 50px; height: 50px"
          >
            <el-button></el-button> </el-tooltip
          ><el-tooltip
            content="Top center"
            placement="top"
            style="background: #00be76; width: 50px; height: 50px"
          >
            <el-button></el-button> </el-tooltip
        ></el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getOutlocationState } from "@/api/locationView";
export default {
  name: "locationView",
  data() {
    return {
      outId: "798977362099175521",
      value: "1号仓库",
    };
  },
  methods: {
    async getOutlocationState() {
      console.log(this.outId);
      const res = await getOutlocationState(this.outId);
      console.log(res);
    },
  },
};
</script>

<style lang="less" scope>
#locationView {
  display: flex;
  .left {
    width: 263px;
    height: 603px;
    // background: pink;
    margin-right: 20px;
    .form {
      margin-top: 20px;
      background: #fdfcf9;
      .firstInput {
        width: 100px;
      }
      .el-input {
        width: 230px;
        margin: 20px;
      }
      .fourButton {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        button {
          margin: 10px;
          width: 160px;
          height: 40px;
        }
        // align-items: center;
      }
    }
  }
  .right {
    width: 914px;
    height: 607px;
    // background: gold;
    .tooltip {
      background-color: #00be76 !important;
    }
  }
}
</style>
