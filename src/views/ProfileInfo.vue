<template>
  <div class="flex items-center justify-between mb-12">
    <div class="flex items-center">
      <div class="text-center">
        <img :src="userData.profile_image" class="bg-gray-600 rounded-full w-24 h-24" />
        <button
          type="button"
          class="font-normal text-gray-400 hover:text-purple-600 transition outline-none duration-150 focus:outline-none focus:ring focus:ring-purple-600"
        >
          Удалить
        </button>
      </div>
      <div class="ml-5">
        <h3 class="text-2xl text-white font-bold mb-1.5">
          {{ userData.name }}{{ userData.lastname }}
        </h3>
        <a
          href="#"
          class="text-slate-200 hover:text-purple-600 transition duration-150 focus:outline-none focus:ring focus:ring-purple-600"
          >{{ userData.email }}</a
        >
      </div>
    </div>
  </div>
  <form @submit="getUser(token)" class="grid gap-4 grid-cols-2 w-3/4 mb-12">
    <input
      v-model="userData.name"
      type="text"
      class="bg-zinc-800 border hover:border-purple-600 focus:outline-none focus:ring focus:ring-purple-600 border-neutral-500 rounded-md py-2 px-3 text-slate-200 placeholder text-sm"
      placeholder="Имя*"
    />
    <input
      v-model="userData.lastname"
      type="text"
      class="bg-zinc-800 border hover:border-purple-600 focus:outline-none focus:ring focus:ring-purple-600 border-neutral-500 rounded-md py-2 px-3 text-slate-200 placeholder text-sm"
      placeholder="Фамилия*"
    />
    <input
      v-model="userData.username"
      type="text"
      class="bg-zinc-800 border hover:border-purple-600 focus:outline-none focus:ring focus:ring-purple-600 border-neutral-500 rounded-md py-2 px-3 text-slate-200 placeholder text-sm"
      placeholder="Логин*"
    />
    <input
      v-model="userData.email"
      type="text"
      class="bg-zinc-800 border hover:border-purple-600 focus:outline-none focus:ring focus:ring-purple-600 border-neutral-500 rounded-md py-2 px-3 text-slate-200 placeholder text-sm"
      placeholder="Email*"
    />
    <button
      type="submit"
      class="text-sm text-slate-200 py-2 px-4 bg-neutral-500 rounded-lg hover:bg-purple-600 transition duration-150 focus:outline-none focus:ring focus:ring-purple-600 active:bg-purple-900"
    >
      Сохранить
    </button>
  </form>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE1LCJuYW1lIjoiY29tcGxleHVzcHJhZGEiLCJyb2xlIjozLCJpc3MiOiIyMDI0LTA0LTAxVDEyOjQwOjMyLjExMTE3NDg4NVoiLCJleHAiOiIyMDI0LTA0LTAxVDE0OjQwOjMyLjExMTE3NTI4OVoifQ.A4s11-vtxjNPETxuMGraVZQwV7Gh88ARVqxIwzX05J8'

interface UserData {
  name: string
  email: string
  lastname: string
  username: string
  profile_image: string
}

const userData = ref<UserData>({
  name: '',
  email: '',
  lastname: '',
  username: '',
  profile_image: ''
})
onMounted(async () => {
  const data = await getUser(token)
  userData.value.name = data.result.name
  userData.value.lastname = data.result.lastname
  userData.value.email = data.result.email
  userData.value.username = data.result.username
  userData.value.profile_image = data.result.profile_image
})

async function updateUser(token: string) {
  try {
    const response = await fetch('http://back-dev.irange.com/api/v1/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(userData.value)
    })

    if (!response.ok) {
      throw new Error('Ошибка при обновлении пользователя')
    }

    const result = await response.json()
    console.log('Пользователь успешно обновлен:', result)
    // Здесь может быть код для обработки успешного обновления, например, показ сообщения пользователю
  } catch (error) {
    console.error('Ошибка:', error)
    // Здесь может быть код для обработки ошибки, например, показ сообщения об ошибке
  }
}

async function getUser(token: string) {
  try {
    const response = await fetch('http://back-dev.irange.com/api/v1/profile/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    if (!response.ok) {
      throw new Error('Ошибка при обновлении пользователя')
    }

    const result = await response.json()
    return result
    // Здесь может быть код для обработки успешного обновления, например, показ сообщения пользователю
  } catch (error) {
    console.error('Ошибка:', error)
    // Здесь может быть код для обработки ошибки, например, показ сообщения об ошибке
  }
}
</script>
