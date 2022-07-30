<template>
  <div>
    <div class="mainA">
      <div class="leftA">
        <div class="banner">
          <div class="banner-left">
            <img src="@/assets/banner.png" alt="" />
            <div class="content">
              <img class="avatar" src="@/assets/avatar.png" alt="" />
              <div>仓库管理员</div>
            </div>
          </div>

          <div class="banner-right">
            <img src="@/assets/banner-right.png" alt="" />
          </div>
          <div class="saying">
            <h4>我不是为了输赢，我就是认真！</h4>
            <span>---罗永浩</span>
            <button>北京总仓</button>
          </div>
        </div>
        <div class="agentInformation">
          <div>待办信息</div>
          <div class="card">
            <el-row :gutter="12">
              <el-col :span="8">
                <el-card shadow="always" class="cardFirst">
                  <div class="grn">
                    <i class="iconfont icon-ruku"></i> 入库单
                  </div>
                  <div class="newAdd">
                    <span>新增</span>4<span>待审核</span
                    ><span class="spacious">4</span>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card shadow="always" class="cardFirst">
                  <div class="grn">
                    <i class="iconfont icon-chukudan"></i> 出库单
                  </div>
                  <div class="newAdd">
                    <span>新增</span>1<span>待审核</span
                    ><span class="spacious">1</span>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card shadow="always" class="cardFirst">
                  <div class="grn">
                    <i class="iconfont icon-navicon-pdd"></i> 盘点单
                  </div>
                  <div class="newAdd">
                    <span>新增</span>0<span>待审核</span
                    ><span class="spacious">0</span>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div class="rightA">
        <div class="note">通知/公告</div>
        <div v-for="(item, index) in tableData" :key="index" class="forIn">
          <span class="first">{{ item.name }}</span
          ><span class="second">{{ item.date }}</span>
        </div>
      </div>
      <div class="testNav">
        <div class="test">任务导航</div>
        <div class="layout">
          <el-row :gutter="12" style="width: 100%">
            <el-col :span="4">
              <el-card shadow="hover" class="cardFirst">
                <div class="grn">
                  <i class="iconfont icon-kache"></i> 收货任务
                </div>
              </el-card>
            </el-col>
            <el-col :span="4">
              <el-card shadow="hover" class="cardFirst">
                <div class="grn">
                  <i class="iconfont icon-shangjia"></i> 上架任务
                </div>
              </el-card>
            </el-col>
            <el-col :span="4">
              <el-card shadow="hover" class="cardFirst">
                <div class="grn">
                  <i class="iconfont icon-navicon-pdd"></i> 盘点任务
                </div>
              </el-card>
            </el-col>
            <el-col :span="4">
              <el-card shadow="hover" class="cardFirst">
                <div class="grn">
                  <i class="iconfont icon-jianhuo"></i> 拣货任务
                </div>
              </el-card>
            </el-col>
            <el-col :span="4">
              <el-card shadow="hover" class="cardFirst">
                <div class="grn">
                  <i class="iconfont icon-jjrw"></i> 交接任务
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="barchart"><echarts /></div>
    <div class="piechart">
      <div class="left"><ringPie /></div>
      <div class="right"><pieChart /></div>
    </div>
  </div>
</template>

<script>
import ringPie from "@/layout/components/echarts/ringPie.vue";
import echarts from "@/layout/components/echarts";
import pieChart from "@/layout/components/echarts/pie chart.vue";
export default {
  components: { echarts, pieChart, ringPie },

  data() {
    return {
      tableData: [
        {
          date: "2016-04-02",
          name: "紧急盘点通知",
        },
        {
          date: "2016-04-04",
          name: "运维服务更新通知",
        },
        {
          date: "2016-04-01",
          name: "五一放假通知",
        },
        {
          date: "2016-04-03",
          name: "品达物流系统对接通知",
        },
        {
          date: "2016-04-03",
          name: "客户入库变更通知",
        },
      ],
    };
  },
};
</script>

<style></style>
