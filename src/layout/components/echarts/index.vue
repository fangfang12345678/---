<template>
  <div id="bar" style="width: 1300; height: 400px"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  methods: {
    dracharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("bar"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "入库/出库信息",
          // subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom",
        },
        legend: {
          dimensions: ["product", "本周", "本月", "全年"],
          right: "10%",
        },
        tooltip: {},
        dataset: {
          source: [
            { product: "Matcha Latte", 本周: 43.3, 本月: 85.8, 全年: 93.7 },
            { product: "Milk Tea", 本周: 83.1, 本月: 73.4, 全年: 55.1 },
            { product: "Cheese Cocoa", 本周: 86.4, 本月: 65.2, 全年: 82.5 },
            { product: "Walnut Brownie", 本周: 72.4, 本月: 53.9, 全年: 39.1 },
          ],
        },
        xAxis: { type: "category" },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
      });
    },
  },
  mounted() {
    this.dracharts();
  },
};
</script>

<style></style>
