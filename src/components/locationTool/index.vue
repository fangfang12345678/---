<template>
  <div id="locationTool">
    <el-card>
      <el-form :model="form">
        <el-col :span="6">
          <div class="block">
            <div style="margin: 10px 0">库区</div>
            <el-cascader
              v-model="value"
              :options="options"
              @change="handleChange"
            ></el-cascader></div
        ></el-col>
        <el-col :span="6">
          <el-form-item label="库位编号" style="margin-right: 30px"
            ><el-input placeholder="请输入" v-model="form.code"></el-input
          ></el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="库位名称" style="margin-right: 30px"
            ><el-input placeholder="请输入"></el-input
          ></el-form-item>
        </el-col>
        <el-col :span="6"
          ><el-form-item label="温度类型" style="margin-right: 30px">
            <el-select v-model="form.temperatureType" placeholder="请选择">
              <el-option label="常温" value="CW"></el-option>
              <el-option label="冷藏" value="LC"></el-option>
              <el-option label="恒温" value="HW"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-row>
          <el-col :span="6">
            <el-form-item label="承重类型" style="margin-right: 30px">
              <el-select v-model="form.bearingType" placeholder="请选择">
                <el-option label="重型" value="ZX"></el-option>
                <el-option label="轻型" value="QX"></el-option>
                <el-option label="中型" value="BX"></el-option> </el-select
            ></el-form-item>
          </el-col>
          <el-col :span="6"> </el-col>
          <el-col :span="6"
            ><template>
              <div style="margin: 10px 0 10px 10px">停用状态</div>
              <el-radio v-model="form.radio" label="1">启用</el-radio>
              <el-radio v-model="form.radio" label="2">停用</el-radio>
            </template></el-col
          ></el-row
        >
        <el-row>
          <el-col :span="6" style="margin-right: 30px">
            <el-form-item label="承载体积" style="margin-right: 30px"
              ><el-input placeholder="请输入">
                <template slot="append">m²</template></el-input
              ></el-form-item
            >
          </el-col>
          <el-col :span="6">
            <el-form-item label="承载上限" style="margin-right: 30px"
              ><el-input placeholder="请输入">
                <i class="icon el-input-group__append"> </i> </el-input
            ></el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="承载重量" style="margin-right: 30px"
              ><el-input placeholder="请输入">
                <template slot="append">m²</template></el-input
              ></el-form-item
            >
          </el-col></el-row
        >

        <el-row type="flex">
          <el-col :span="12">
            <el-form-item label="库位长/宽/高"
              ><el-row type="flex" :gutter="10"
                ><el-col
                  ><el-input
                    placeholder="请输入"
                    style="width: 90px"
                  ></el-input></el-col
                ><el-col
                  ><el-input
                    placeholder="请输入"
                    style="width: 90px"
                  ></el-input></el-col
                ><el-col
                  ><el-input
                    placeholder="请输入"
                    style="width: 90px"
                  ></el-input></el-col></el-row></el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="库位长/宽/高"
              ><el-row type="flex" :gutter="10"
                ><el-col
                  ><el-input
                    placeholder="请输入"
                    style="width: 90px"
                  ></el-input></el-col
                ><el-col
                  ><el-input
                    placeholder="请输入"
                    style="width: 90px"
                  ></el-input></el-col
                ><el-col
                  ><el-input
                    placeholder="请输入"
                    style="width: 90px"
                  ></el-input></el-col></el-row></el-form-item></el-col
        ></el-row>
        <el-divider></el-divider>
        <el-row type="flex" justify="center">
          <el-button type="info" round style="width: 150px">返回</el-button>
          <el-button type="primary" round style="width: 150px">提交</el-button>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { getLocationCode, getLocationList } from "@/api/locationManagement";
export default {
  name: "locationTool",
  created() {
    this.getLocationCode();
    this.getLocationList();
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    async getLocationCode() {
      const res = await getLocationCode();
      // console.log(res);
      this.form.code = res.data.data;
    },
    async getLocationList() {
      const res = await getLocationList();
      console.log(res);
    },
  },
  data() {
    return {
      form: {
        region: "",
        code: "",
        bearingType: "",
        template: "",
        radio: "1",
      },
    };
  },
};
</script>

<style></style>
