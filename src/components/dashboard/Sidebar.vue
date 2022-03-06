<template>
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
</template>

<script>
import MenuItem from "./MenuItem.vue"

export default {
  components: {
    MenuItem
  }
}
</script>