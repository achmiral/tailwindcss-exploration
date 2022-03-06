<template>
  <main class="min-h-screen min-w-screen bg-gray-900 pb-48">
    <Navbar />

    <div class="container mx-auto grid grid-cols-12 gap-4 p-6">
      <Sidebar />

      <MainContent />

    </div>
  </main>
</template>

<script>
import Navbar from "./dashboard/Navbar.vue"
import Sidebar from "./dashboard/Sidebar.vue"
import MainContent from "./dashboard/MainContent.vue"

export default {
  components: {
    Navbar,
    Sidebar,
    MainContent
  }
}
</script>
