<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, computed, getCurrentInstance } from "vue";
import LineChart from "./components/LineChart.vue";
import { fundPerformanceData, optionsPerformanceLine, optionsColor } from "./data/data.js";

const selectedClient = ref("greenrock");
const clickedData = ref(null);

const selectClient = (client: string) => {
  selectedClient.value = client;
};

const handleLineChartClick = (i) => {
  console.log("hey event", i);
  clickedData.value = { index: i.index, dataset: i.datasetIndex };
};

const lineChartData = computed(() => {
  return {
    type: "line",
    data: {
      labels: [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Decembre",
      ],
      datasets: [
        {
          label: fundPerformanceData[selectedClient.value][0].label,
          data: fundPerformanceData[selectedClient.value][0].data,
          backgroundColor: optionsColor[selectedClient.value][0],
          borderColor: optionsColor[selectedClient.value][0],
          borderWidth: 2,
        },
        {
          label: fundPerformanceData[selectedClient.value][1].label,
          data: fundPerformanceData[selectedClient.value][1].data,
          backgroundColor: optionsColor[selectedClient.value][1],
          borderColor: optionsColor[selectedClient.value][1],
          borderWidth: 2,
        },
      ],
    },
  };
});
</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <h1>Vite / Vue3 / TS / Chart.js</h1>

  <div class="content">
    <div class="row form">
      <button
        :class="{
          active: selectedClient === 'greenrock',
        }"
        @click="selectClient('greenrock')">
        Greenrock
      </button>
      <button
        :class="{
          active: selectedClient === 'bluerock',
        }"
        @click="selectClient('bluerock')">
        Bluerock
      </button>
    </div>
    <div class="row">
      <div class="block">
        <LineChart
          @LineChartClick="handleLineChartClick"
          id="performance1"
          :data="lineChartData"
          :options="optionsPerformanceLine" />
      </div>
    </div>
    <div class="row" v-if="clickedData">
      <div class="block">
        <h1>{{ lineChartData.data.labels[clickedData.index] }}</h1>
      </div>
      <div class="block">
        <h1>{{ lineChartData.data.datasets[clickedData.dataset].label }}</h1>
      </div>
      <div class="block">
        <h1>{{ lineChartData.data.datasets[clickedData.dataset].data[clickedData.index] }}</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form {
  justify-content: center;
  max-height: 50px;
}

.form button {
  margin: 10px;
  border-radius: 2px;
}

.form button.active {
  border: 1px solid yellow;
}

.block {
  display: flex;
  flex: 1;
  border: 1px solid rgba(255, 255, 255, 0.87);
  padding: 8px;
}

.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 70%;
  justify-content: center;
}
</style>
