<template>
  <div id="ring" style="width: 311px; height: 410px"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  methods: {
    dracharts() {
      let myChart = echarts.init(document.getElementById("ring"));
      myChart.setOption({
        color: ["#ffb200", "#fff"],
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        title: {
          text: "库存使用情况",
          // subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom",
        },
        series: [
          {
            // name: "Access From",
            type: "pie",
            radius: ["40%", "60%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "50",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [{ value: 580 }, { value: 2 }],
          },
        ],
      });
    },
  },
  mounted() {
    this.dracharts();
  },
};
</script>

<style></style>
