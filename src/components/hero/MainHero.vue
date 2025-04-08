<template>
  <div class="hero">
    <MainNavbar />
    <HomeHero />
  </div>
</template>

<script setup>
import MainNavbar from '../layouts/MainNavbar.vue'
import HomeHero from './HomeHero.vue'

</script>

<style scoped>
.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url("/public/images/bg2.avif");
  background-size: cover;
  background-position: center;
  position: relative;
}
</style>