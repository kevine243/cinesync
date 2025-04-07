<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'


const movies = ref([])

onMounted(async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODRhNDY0MjNjYjM4MGMyOWU1YjdhMmUyN2FlODU3MiIsIm5iZiI6MTc0NDA0OTM0MS44MzMsInN1YiI6IjY3ZjQxNGJkN2I0M2JkY2UyMGFkNDg0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aOqnG4xjI1i8ArrspxU6Hj5gbEAkUeI9LFxpsZFWJ5E'
    }
  };

  const res = await fetch('https://api.themoviedb.org/3/movie/popular', options)
  const data = await res.json()
  movies.value = data.results
})
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="bg-red-500">
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <ul>
    <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
  </ul>
</template>

