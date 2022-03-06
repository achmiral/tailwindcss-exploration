<template>
  <nav class="container mx-auto">
    <div class="grid grid-cols-12">
      <router-link to="/" class="flex items-center col-span-2 text-white text-lg font-bold p-6">Shoes</router-link>

      <div class="p-6 col-span-10 flex items-center justify-between">
        <div class="relative w-full">
          <input type="text" class="pl-4 py-2 w-full rounded-md text-white bg-gray-800" placeholder="Search here...">
          <div class="absolute pr-3 right-0 inset-y-0 flex items-center">
            <SearchIcon class="h-6 w-6 text-gray-500 focus:text-white" />
          </div>
        </div>

        <div class="ml-4 flex items-center space-x-3">
          <BellIcon class="h-6 w-6 text-gray-200"/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { SearchIcon, BellIcon } from "@heroicons/vue/outline"

export default {
  components: {
    SearchIcon,
    BellIcon
  }
}
</script>