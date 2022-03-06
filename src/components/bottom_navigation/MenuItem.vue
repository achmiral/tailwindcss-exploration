<template>
  <div class="p-2 flex flex-col items-center justify-between cursor-pointer hover:text-white hover:bg-indigo-500">
    <component :is="icon" class="h-6 w-6"></component>
    <span class="text-sm">{{ title }}</span>
  </div>
</template>

<script>
import { ArchiveIcon, CashIcon, HomeIcon, PresentationChartLineIcon, CogIcon } from "@heroicons/vue/outline";

export default {
  components: {
    ArchiveIcon,
    CashIcon,
    HomeIcon,
    PresentationChartLineIcon,
    CogIcon
  },
  props: {
    title: String,
    icon: String
  } 
}
</script>