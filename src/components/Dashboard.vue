<template>
  <main class="min-h-screen min-w-screen bg-gray-900 pb-48">
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

    <div class="container mx-auto grid grid-cols-12 gap-4 p-6">
      <aside class="col-span-2">
        <span class="block mb-3 text-gray-400 uppercase text-xs">Menu</span>

        <div class="grid grid-cols-1 gap-5 mb-10">
          <MenuItem icon-name="HomeIcon" title="Discover" is-active />

          <MenuItem icon-name="ArrowRightIcon" title="Trending" />

          <MenuItem icon-name="PlayIcon" title="Streaming" />

          <MenuItem icon-name="CloudDownloadIcon" title="Playlist" />

          <MenuItem icon-name="BookmarkIcon" title="Bookmark" />
        </div>

        <div class="border-b mb-10 w-32 border-gray-400"></div>

        <div class="grid grid-cols-1 gap-8 mb-10">
          <MenuItem icon-name="ArrowRightIcon" title="Trending" />

          <MenuItem icon-name="PlayIcon" title="Streaming" />

          <MenuItem icon-name="CloudDownloadIcon" title="Playlist" />

          <MenuItem icon-name="BookmarkIcon" title="Bookmark" />
        </div>

        <div class="border-b mb-10 w-32 border-gray-400"></div>

        <div class="grid grid-cols-1 gap-8 mb-10">
          <div class="flex items-center">
            <button type="button" class="bg-indigo-800 relative inline-flex flex-shrink-0 h-6 w-11 mr-4 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false">
              <span class="sr-only">Use setting</span>
              <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
              <span aria-hidden="true" class="translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
            </button>

            <span class="text-gray-400">Night mode</span>
          </div>
        </div>

      </aside>

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
    </div>
  </main>
</template>

<script>
import { SearchIcon, BellIcon } from "@heroicons/vue/outline"
import MenuItem from "./dashboard/MenuItem.vue"

export default {
  components: {
    SearchIcon,
    BellIcon,
    MenuItem
},
  data() {
    return {
      cardItems: [1,2,3,4]
    }
  }
}
</script>
