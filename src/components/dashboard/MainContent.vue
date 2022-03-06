<template>
  <main class="col-span-10">
    <h1 class="text-4xl mb-5 font-medium text-gray-100">Discover</h1>

    <div class="grid grid-cols-12 gap-5 h-72 mb-8">
      <div class="relative p-4 col-span-8 rounded-2xl bg-cyan-500">
        <div class="p-5">
          <div class="w-72">
            <span class="block text-3xl mb-5 leading-normal tracking-wider font-medium text-gray-100">How to do Basic Jumping and how to landing safely</span>

            <div class="font-medium text-white">Andy William </div>

            <div class="flex items-center space-x-3">
              <div class="text-sm text-white font-light">53K views</div>
              <div class="h-1 w-1 bg-white rounded-full"></div>
              <div class="text-sm text-white font-light">2 weeks ago</div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 right-0 p-4">
          <span class="px-2 py-1 bg-gray-800 text-gray-200 text-xs opacity-70 rounded-md">7 min</span>
        </div>
      </div>

      <div class="relative p-4 col-span-4 rounded-2xl bg-orange-500">
        <div class="p-5">
          <div class="w-72">
            <span class="block text-3xl mb-5 leading-normal tracking-wider font-medium text-gray-100">How to do Basic Jumping and how to landing safely</span>

            <div class="font-medium text-white">Andy William </div>

            <div class="flex items-center space-x-3">
              <div class="text-sm text-white font-light">53K views</div>
              <div class="h-1 w-1 bg-white rounded-full"></div>
              <div class="text-sm text-white font-light">2 weeks ago</div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 right-0 p-5">
          <span class="px-2 py-1 bg-gray-800 text-gray-200 text-xs opacity-70 rounded-md">7 min</span>
        </div>
      </div>
    </div>
    
    <h2 class="text-2xl mb-5 font-regular text-gray-100">Most Watched</h2>

    <div class="grid grid-cols-4 gap-5">
      <div class="bg-gray-800 rounded-2xl relative overflow-hidden" v-for="card in cardItems">
        <img src="https://api.lorem.space/image/shoes?w=400&h=400" alt="Shoes">
        <div class="absolute top-0 right-0 p-2">
          <span class="px-2 py-1 bg-gray-800 text-gray-200 text-xs opacity-70 rounded-md">7 min</span>
        </div>
        <div class="p-4">
          <div class="mb-3 flex items-center space-x-3">
            <div class="text-sm text-gray-500">Andy William </div>
            <div class="h-2 w-2 bg-green-500 rounded-full"></div>
          </div>
          <div class="tracking-wide text-lg text-white mb-3">
            Basic how to ride your skateboard comfortly
          </div>
          <div class="flex items-center space-x-3">
            <div class="text-sm text-gray-500">53K views</div>
            <div class="h-1 w-1 bg-gray-500 rounded-full"></div>
            <div class="text-sm text-gray-500">2 weeks ago</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      cardItems: [1,2,3,4]
    }
  }
}
</script>