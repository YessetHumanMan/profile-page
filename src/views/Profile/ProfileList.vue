<script setup lang="ts">
import { type Component, shallowRef } from 'vue'
import ProfileInfo from './$partials/ProfileInfo.vue'
import PasswordInfo from './$partials/PasswordInfo.vue'
import CertificateEmpty from './$partials/CertificateEmpty.vue'
import ProgressInfo from './$partials/ProgressInfo.vue'

const current = shallowRef<Component>(ProfileInfo)
const key = shallowRef<number>()

function set(c: Component) {
  current.value = c

  switch (c) {
    case ProfileInfo:
      key.value = 1
      break
    case PasswordInfo:
      key.value = 2
      break
    case CertificateEmpty:
      key.value = 3
      break
    case ProgressInfo:
      key.value = 4
      break
  }
}

function styleBorder(c: Component) {
  return current.value === c ? 'border-b-2 border-b-purple-800' : ''
}
</script>
<template>
  <div class="bg-neutral-900">
    <div class="container max-w-6xl py-20 min-h-screen">
      <h1 class="text-4xl font-bold text-center text-slate-200">Профиль</h1>
      <div class="flex my-6 border-b border-b-gray-600">
        <button
          @click="set(ProfileInfo)"
          :class="styleBorder(ProfileInfo)"
          type="button"
          class="btn-profile"
        >
          <img class="mr-2.5" src="/user_info.svg" alt="icon" />
          Личная информация
        </button>
        <button
          @click="set(PasswordInfo)"
          :class="styleBorder(PasswordInfo)"
          type="button"
          class="btn-profile"
        >
          <img class="mr-2.5" src="/password.svg" alt="icon" />
          Изменить пароль
        </button>
        <button
          @click="set(CertificateEmpty)"
          :class="styleBorder(CertificateEmpty)"
          type="button"
          class="btn-profile"
        >
          <img class="mr-2.5" src="/user-shield.svg" alt="icon" />
          Сертификаты
        </button>
        <button
          @click="set(ProgressInfo)"
          :class="styleBorder(ProgressInfo)"
          type="button"
          class="btn-profile"
        >
          <img class="mr-2.5" src="/user-progress.svg" alt="icon" />
          Прогресс
        </button>
        <button type="button" class="btn-profile">
          <img class="mr-2.5" src="/user-pay.svg" alt="icon" />
          Платежи
        </button>
      </div>
      <div class="bg-zinc-800 p-10">
        <KeepAlive :key="key">
          <component :is="current" :key="key" />
        </KeepAlive>
      </div>
    </div>
  </div>
</template>
