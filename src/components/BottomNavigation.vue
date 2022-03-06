<template>
  <div class="min-h-screen min-w-screen bg-slate-100">
    <div class="max-w-md mx-auto min-h-screen">
      <div class="fixed max-w-md mx-auto inset-x-0 bottom-0 md:pb-10">
        <div class="grid grid-cols-5 bg-white">
          <div v-for="item in menuItems">
            <MenuItem :title="item.title" :icon="item.icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from "./bottom_navigation/MenuItem.vue"

export default {
  components: {
    MenuItem
  },
  data() {
    return {
      menuItems: [
        {
          title: "Harga",
          icon: "CashIcon"
        },
        {
          title: "Produk",
          icon: "ArchiveIcon"
        },
        {
          title: "Home",
          icon: "HomeIcon"
        },
        {
          title: "Analytics",
          icon: "PresentationChartLineIcon"
        },
        {
          title: "Pengaturan",
          icon: "CogIcon"
        }
      ]
    }
  }
}
</script>