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
  <Bar id="my-chart-id" width="700" height="300" :options="chartOptions" :data="chartData" />
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
  <div class="w-64 h-64 rounded-full border-8 border-dashed border-green-700"></div>
  <Responsive class="w-full">
    <template #main="{ width }">
      <Chart
        direction="circular"
        :size="{ width, height: 400 }"
        :data="data"
        :margin="{
          left: Math.round((width - 360) / 2),
          top: 20,
          right: 0,
          bottom: 20
        }"
        :axis="axis"
        :config="{ controlHover: false }"
      >
        <template #layers>
          <Pie :dataKeys="['name', 'pl']" :pie-style="{ innerRadius: 100, padAngle: 0.05 }" />
        </template>
        <template #widgets>
          <Tooltip
            :config="{
              name: {},
              avg: { hide: true },
              pl: { label: 'value' },
              inc: { hide: true }
            }"
            hideLine
          />
        </template>
      </Chart>
    </template>
  </Responsive>
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },

  data() {
    return {
      chartData: {
        labels: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
          26, 27, 28, 29, 30, 31, 32, 33, 34, 35
        ],
        datasets: [
          {
            label: 'Student progress',
            backgroundColor: ['rgb(128,128,128)'],
            data: [
              { x: 1, y: 20 },
              { x: 4, y: 25 },
              { x: 5, y: 29 },
              { x: 6, y: 60 },
              { x: 7, y: 61 },
              { x: 8, y: 55 },
              { x: 12, y: 58 },
              { x: 15, y: 69 },
              { x: 35, y: 34 }
            ]
          }
        ]
      }
    }
  }
}
</script>
