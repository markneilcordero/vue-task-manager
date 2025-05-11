<template>
  <div id="app">
    <!-- Top Navigation -->
    <Navbar />

    <!-- Page Content -->
    <main class="flex-grow-1">
      <router-view />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
// Core layout components
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
/* Make the app fill the screen height */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
</style>
