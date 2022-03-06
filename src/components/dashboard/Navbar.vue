<template>
  <nav class="container mx-auto">
    <div class="grid grid-cols-12">
      <div class="col-span-2 text-white text-lg font-bold p-6">Shoes</div>

      <div class="p-6 col-span-10 flex items-center justify-between">
        <div class="relative">
          <input type="text" class="pl-4 py-2 w-96 rounded-md text-white bg-gray-800" placeholder="Search here...">
          <div class="absolute pr-3 right-0 inset-y-0 flex items-center">
            <SearchIcon class="h-6 w-6 text-gray-500 focus:text-white" />
          </div>
        </div>
        <div>
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