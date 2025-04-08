<template>
  <div id="home" class="h-screen px-6 md:px-24 lg:px-32">
    <PopularMovies />
    <footer>
      <div class="py-4 text-center bg-black text-red-500 font-black text-2xl">
        <h3>CINESYNC</h3>
      </div>
    </footer>
  </div>
</template>

<script setup>
import PopularMovies from '../views/PopularMovies.vue'

</script>
