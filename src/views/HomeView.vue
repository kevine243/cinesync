<template>
  <div class="min-h-screen flex flex-col">
    <div id="home" class="flex-1 px-6 md:px-24 lg:px-32 py-2 md:py-10 lg:py-20">
      <PopularMovies />
    </div>
  </div>
</template>

<script setup>
import PopularMovies from '../views/PopularMovies.vue'
</script>
