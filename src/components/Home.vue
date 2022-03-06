<template>
  <main class="min-h-screen min-w-screen bg-slate-700 flex items-center justify-center">
    <div class="bg-white p-5 rounded-lg">
      <ul>
        <li class="mb-4">
          <router-link to="/dashboard" class="font-bold text-xl hover:text-indigo-500">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/bottom-navigation" class="font-bold text-xl hover:text-indigo-500">Bottom Navigation</router-link>
        </li>
      </ul>

    </div>
  </main>
</template>