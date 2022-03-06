<template>
  <div class="flex items-center hover:bg-gray-700 cursor-pointer p-2 rounded-lg">
    <div :class="isActive ? 'bg-orange-300' : 'bg-gray-800 hover:bg-gray-900'" class="p-2 mr-5 rounded-lg">
      <component :is="iconName" :class="isActive ? 'text-white': 'text-gray-400'" class="h-5 w-t"></component>
    </div>
    <span :class="isActive ? 'text-white':'text-gray-400'">{{ title }}</span>
  </div>
</template>

<script>
import {
  HomeIcon, ArrowRightIcon, CloudDownloadIcon, PlayIcon, BookmarkIcon
} from "@heroicons/vue/outline"

export default {
  components: {
    HomeIcon,
    ArrowRightIcon,
    CloudDownloadIcon,
    PlayIcon,
    BookmarkIcon
  },
  props: {
    iconName: String,
    title: String,
    isActive: Boolean
  },
  created() {
    console.log(this.title)
  },
}
</script>