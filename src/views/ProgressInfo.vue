<template>
  <div class="flex justify-between items-center border-b-2 border-zinc-500 py-2 mb-2">
    <h2 class="text-2xl text-zinc-200 font-bold">Распределение студентов по XP</h2>
    <div class="text-zinc-400 font-normal"><p>Количество диапазонов XP</p></div>
  </div>

  <select class="px-2 py-2 rounded-lg bg-zinc-600 w-40 font-normal mb-2 text-zinc-300 outline-none">
    <option>Выбрать группу</option>
    <option>Группа 1</option>
    <option>Группа 2</option>
    <option>Группа 3</option>
    <option>Группа 4</option>
  </select>
  <pie />
  <p class="text-zinc-500">Все студенты</p>

  <div>
    <Bar :data="dataBar" :options="optionsBar" :style="myStylesBar" />
  </div>

  <div class="flex justify-between items-center border-b-2 border-zinc-500 py-2 mb-2">
    <h2 class="text-2xl text-zinc-200 font-bold">Статистика пройденных курсов</h2>
    <div class="text-zinc-400 font-normal">
      <p>
        Заданий пройдено <span class="font-bold text-3xl text-green-700">131</span
        ><b class="font-bold text-3xl mx-2">из</b>
        <span class="font-bold text-3xl text-zinc-500">180</span>
      </p>
    </div>
  </div>
  <div><Doughnut :data="data" :options="options" :style="myStylesPie" /></div>
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  ArcElement,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar, Doughnut } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

export default {
  name: 'progressBar',
  components: {
    Bar,
    Doughnut
  },
  computed: {
    myStylesBar() {
      return {
        height: `${300}px`,
        width: `${900}px`,
        position: 'relative'
      }
    },
    myStylesPie() {
      return {
        height: `${200}px`,
        width: `${200}px`,
        position: 'relative'
      }
    }
  },

  data() {
    return chartConfig
  }
}
</script>
