<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HelloWorld from './components/HelloWorld.vue'
</script>
<template>
  <div>
    <Header />
    <main id="page">
      <RouterView />
      <Footer />
    </main>
  </div>
</template>

<style lang="scss" scoped></style>
