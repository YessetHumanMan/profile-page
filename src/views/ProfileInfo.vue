<script setup lang="ts"></script>
<template>
  <div class="flex items-center justify-between mb-12">
    <div class="flex items-center">
      <div class="text-center">
        <img
          class="bg-gray-600 rounded-full w-24 h-24"
          src="https://s3-alpha-sig.figma.com/img/0f9b/81fa/21460d39cd98ccca0d3fa906d5718aa3?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rf13LkOIDEHmEYHwlkABDoxu25sQyRaaJzAAryheEItt3nfY2frxJJl1Mf~Wy302LZk914nltfCkjQ157~-2PIGt8R1Dg9-GfreHiDc-tbhAIth6vckdn5D3hx8IY1u4NazweXzdcdkDGoEO-BSa3OyMpie8gy05P-FSIo0nBmSLRwgRbGyJf-B8PmmIxVO-VT~RH16JXfhqNADLUfISUwTaIYLFRwNh5F2QTOWsZgEAfaWw4UIc9UllkK7bzPdFV4bAgnvemOShzPJUR-cHz3BJfsAUjOY1KFbPqrktopihqNOr~2k~h8HQjviIbI-ELQ0frviyKEqTop3Jx0VbCQ__"
        />
        <button
          type="button"
          class="font-normal text-gray-400 hover:text-purple-600 transition outline-none duration-150 focus:outline-none focus:ring focus:ring-purple-600"
        >
          Удалить
        </button>
      </div>
      <div class="ml-5">
        <h3 class="text-2xl text-white font-bold mb-1.5">Complexus Prada</h3>
        <a
          href="#"
          class="text-slate-200 hover:text-purple-600 transition duration-150 focus:outline-none focus:ring focus:ring-purple-600"
          >complexusprada@gmail.com</a
        >
      </div>
    </div>
  </div>
  <form class="grid gap-4 grid-cols-2 w-3/4 mb-12">
    <input
      type="text"
      class="bg-zinc-800 border hover:border-purple-600 focus:outline-none focus:ring focus:ring-purple-600 border-neutral-500 rounded-md py-2 px-3 text-slate-200 placeholder text-sm"
      placeholder="Имя*"
    />
    <input
      type="text"
      class="bg-zinc-800 border hover:border-purple-600 focus:outline-none focus:ring focus:ring-purple-600 border-neutral-500 rounded-md py-2 px-3 text-slate-200 placeholder text-sm"
      placeholder="Фамилия*"
    />
    <input
      type="password"
      class="bg-zinc-800 border hover:border-purple-600 focus:outline-none focus:ring focus:ring-purple-600 border-neutral-500 rounded-md py-2 px-3 text-slate-200 placeholder text-sm"
      placeholder="Логин*"
    />
    <input
      type="text"
      class="bg-zinc-800 border hover:border-purple-600 focus:outline-none focus:ring focus:ring-purple-600 border-neutral-500 rounded-md py-2 px-3 text-slate-200 placeholder text-sm"
      placeholder="Email*"
    />
  </form>
  <button
    type="submit"
    class="text-sm text-slate-200 py-2 px-4 bg-neutral-500 rounded-lg hover:bg-purple-600 transition duration-150 focus:outline-none focus:ring focus:ring-purple-600 active:bg-purple-900"
  >
    Сохранить
  </button>
</template>
