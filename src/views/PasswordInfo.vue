<template>
  <div class="flex">
    <form class="w-4/12 mr-24">
      <input
        type="password"
        class="w-80 bg-zinc-800 border hover:border-purple-600 focus:outline-none focus:ring focus:ring-purple-600 border-neutral-500 rounded-md py-2 px-3 text-slate-200 placeholder text-sm"
        placeholder="Текущий пароль"
      />
      <a class="text-purple-700 text-xs flex py-1" href="#">Забыли пароль?</a>

      <input
        type="password"
        class="mt-10 w-80 bg-zinc-800 border hover:border-purple-600 focus:outline-none focus:ring focus:ring-purple-600 border-neutral-500 rounded-md py-2 px-3 text-gray-800 placeholder text-sm"
        placeholder="Новый пароль"
      />
      <input
        type="password"
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
