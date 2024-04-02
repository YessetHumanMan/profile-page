<template>
  <div class="flex">
    <form @submit.prevent @submit="updatePassword(token)" class="w-4/12 mr-24">
      <input
        v-model="userPasswordData.current_password"
        type="password"
        required
        class="w-80 bg-zinc-800 border hover:border-purple-600 focus:outline-none focus:ring focus:ring-purple-600 border-neutral-500 rounded-md py-2 px-3 text-slate-200 placeholder text-sm"
        placeholder="Текущий пароль"
      />
      <a class="text-purple-700 text-xs flex py-1" href="#">Забыли пароль?</a>

      <input
        v-model="userPasswordData.new_password"
        type="password"
        required
        class="mt-10 w-80 bg-zinc-800 border hover:border-purple-600 focus:outline-none focus:ring focus:ring-purple-600 border-neutral-500 rounded-md py-2 px-3 text-gray-800 placeholder text-sm"
        placeholder="Новый пароль"
      />
      <input
        v-model="userPasswordData.confirm_password"
        type="password"
        required
        class="mt-8 w-80 bg-zinc-800 border hover:border-purple-600 focus:outline-none focus:ring focus:ring-purple-600 border-neutral-500 rounded-md py-2 px-3 text-slate-200 placeholder text-sm"
        placeholder="Повторите пароль"
      />
      <button
        type="submit"
        class="mt-8 text-sm text-slate-200 py-2 px-4 bg-neutral-500 rounded-lg hover:bg-purple-600 transition duration-150 focus:outline-none focus:ring focus:ring-purple-600 active:bg-purple-900"
      >
        Изменить пароль
      </button>
    </form>

    <ul class="w-80 text-sm text-gray-400 gup-5 font-normal">
      <li class="mb-4">
        Внимание:
        <br />
        Ваш пароль должен быть не менее 12 символов. Используйте комбинацию больших и маленьких
        букв, цифр и специальных символов.
      </li>
      <li class="mb-4">
        Советы:
        <br />
        Избегайте повторения паролей для разных учётных записей.
      </li>
      <li>Не забывайте, что надёжный пароль — это лишь часть вашей кибербезопасности</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsIm5hbWUiOiJjb21wbGV4aWEiLCJyb2xlIjoyLCJpc3MiOiIyMDI0LTA0LTAyVDA4OjM4OjQ5LjM5ODY4MzY1N1oiLCJleHAiOiIyMDI0LTA0LTAzVDA4OjM4OjQ5LjM5ODY4Mzg1MloifQ.feoymn0IMLC1HQtNi2MN88eS7gSp-zqKHxVElBf9th4'

interface UserPasswordData {
  confirm_password: string
  current_password: string
  new_password: string
}

const userPasswordData = ref<UserPasswordData>({
  confirm_password: '',
  current_password: '',
  new_password: ''
})

onMounted(async () => {})

async function updatePassword(token: string) {
  try {
    const response = await fetch('http://back-dev.irange.com/api/v1/profile/password', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(userPasswordData.value)
    })

    if (!response.ok) {
      throw new Error('Ошибка при обновлении пользователя')
    }

    const result = await response.json()
    console.log('Пользователь успешно обновлен:', result)
  } catch (error) {
    console.error('Ошибка:', error)
  }
}
</script>
