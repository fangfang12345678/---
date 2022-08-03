<template>
  <div id="toolPage">
    <el-card>
      <el-form :model="roleForm" :rules="rules" ref="refForm">
        <el-row>
          <el-col :span="6" style="margin-right: 50px">
            <el-form-item label="仓库编码" prop="code">
              <el-input
                type="text"
                v-model="roleForm.code"
              ></el-input></el-form-item
          ></el-col>
          <el-col :span="6" style="margin-right: 50px">
            <el-form-item label="仓库名称" prop="name">
              <el-input
                type="text"
                v-model="roleForm.name"
              ></el-input></el-form-item
          ></el-col>
          <el-col :span="6" style="margin-right: 50px">
            <el-form-item label="仓库类型" prop="type">
              <el-select v-model="roleForm.type" placeholder="请选择">
                <el-option label="中转" value="ZZ"></el-option>
                <el-option label="加工" value="JZ"></el-option>
                <el-option label="储备" value="CB"></el-option
                ><el-option label="冷藏" value="LC"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item label="省/市/区" prop="location">
            <el-cascader
              class="widthSmall"
              size="large"
              :options="options"
              v-model="roleForm.location"
              @change="addressChange"
            >
            </el-cascader>
          </el-form-item>
        </el-row>
        <el-row>
          <el-col :span="16">
            <el-form-item label="详细地址" style="width: 1000px">
              <el-input
                type="text"
                v-model="roleForm.address"
              ></el-input></el-form-item
          ></el-col>
          <el-col :span="6">
            <el-form-item label="仓库状态" prop="status">
              <el-row>
                <el-radio v-model="roleForm.status" label="1">启用</el-radio>
                <el-radio v-model="roleForm.status" label="2"
                  >停用</el-radio
                ></el-row
              ></el-form-item
            ></el-col
          >
        </el-row>
        <el-row>
          <el-col :span="6" style="margin-right: 50px" prop="surface">
            <el-form-item label="仓库面积">
              <el-input
                type="text"
                v-model="roleForm.surface"
              ></el-input></el-form-item
          ></el-col>
          <el-col :span="6" style="margin-right: 50px">
            <el-form-item label="负责人" prop="personName">
              <el-input
                type="text"
                v-model="roleForm.personName"
              ></el-input></el-form-item
          ></el-col>
          <el-col :span="6" style="margin-right: 50px">
            <el-form-item label="联系电话" prop="phone">
              <el-input
                type="text"
                v-model="roleForm.phone"
              ></el-input></el-form-item
          ></el-col>
        </el-row>
        <el-divider></el-divider>
        <div class="bottom">
          <el-row
            ><el-button type="info" round style="width: 160px">返回</el-button
            ><el-button type="warning" round style="width: 160px" @click="btnOk"
              >提交</el-button
            ></el-row
          >
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { getWareDetail, editWare } from "@/api/warehouseManagement";

import { regionData, CodeToText } from "element-china-area-data";
import { getWareHouseDatial, addWare } from "@/api/warehouseManagement";
export default {
  data() {
    return {
      form: {},
      options: regionData, //省市区数据
      selectedOptions: [], // 选中的地区
      roleForm: {
        address: "",
        code: "",
        location: "",
        phone: "",
        area: "",
        city: "",
        code: "",
        name: "",
        personName: "",
        province: "",
        status: "1",
        surface: "",
        type: "",
      },
      rules: {
        header: [
          { required: true, message: "此项不能为空" },
          { trigger: "blur" },
        ],
        status: [
          { required: true, message: "此项不能为空" },
          { trigger: "blur" },
        ],
        area: [
          { required: true, message: "此项不能为空" },
          { trigger: "blur" },
        ],
        name: [
          { required: true, message: "此项不能为空" },
          { trigger: "blur" },
        ],
        type: [
          { required: true, message: "此项不能为空" },
          { trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.getFormInfo();
    // console.log(this.roleForm.id);
    // 初始化省市区
    this.selectedOptions = [
      this.roleForm.provinceCode,
      this.roleForm.cityCode,
      this.roleForm.areaCode,
    ];

    this.getWareHouseDatial();
  },
  methods: {
    async getFormInfo() {
      const res = await getWareDetail(this.$route.query.id);
      this.roleForm = res.data.data;
    },
    addressChange(arr) {
      this.form.provinceCode = CodeToText[arr[0]];
      this.form.cityCode = CodeToText[arr[1]];
      this.form.areaCode = CodeToText[arr[2]];
    },
    async getWareHouseDatial() {
      const res = await getWareHouseDatial();
      this.roleForm.code = res.data.data;
    },

    async btnOk() {
      if (this.roleForm.id) {
        await editWare(this.roleForm);
        this.$message.success("编辑成功");
      } else {
        await addWare({
          address: this.roleForm.address,
          code: this.roleForm.code,
          location: `${this.form.provinceCode}/${this.form.cityCode}/${this.form.areaCode}`,
          phone: this.roleForm.phone,
          area: this.form.areaCode,
          city: this.form.cityCode,
          name: this.roleForm.name,
          personName: this.roleForm.personName,
          province: this.form.provinceCode,
          status: "1",
          surface: this.roleForm.status === "启用" ? "1" : "1",
          type: this.roleForm.type,
        });
        this.$message.success("添加成功");
      }

      this.id = "";
      this.$router.push("warehouseManagement");
    },
  },
};
</script>

<style></style>
