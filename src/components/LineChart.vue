<script setup lang="ts">
import { onMounted, watch } from "vue";
import Chart from "chart.js/auto";
const props = defineProps<{ id: string; data: Object; options: Object }>();
let lineChart;
let chartData;
const emit = defineEmits(["LineChartClick"]);

const defaultOptions = {
  plugins: {
    title: {
      display: true,
      text: "Default Title",
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  lineTension: 0.25,
  scales: {
    y: {
      ticks: {
        // Include a dollar sign in the ticks
        callback: function (value, index, ticks) {
          return value + "€";
        },
      },
    },
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          padding: 25,
        },
      },
    ],
  },
  onClick: (evt) => {
    const points = lineChart.getElementsAtEventForMode(evt, "nearest", { intersect: true }, true);
    if (points.length) {
      const firstPoint = points[0];
      emit("LineChartClick", firstPoint);
    }
  },
};

onMounted(() => {
  chartData = { ...props.data, options: { ...defaultOptions, ...props.options } };
  const ctx = document.getElementById(props.id);
  lineChart = new Chart(ctx, chartData);
});

watch(props, () => {
  console.log("WATCHER ....");
  chartData = { ...props.data, options: { ...defaultOptions, ...props.options } };
  lineChart.data = props.data.data;
  lineChart.update();
});
</script>

<template>
  <div class="container">
    <canvas :id="props.id"></canvas>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex: 1;
}
</style>
