<template>
  <div class="h-screen">
    <div class="popular-movies">
      <h1 class="lg:text-5xl text-2xl md:text-3xl font-bold py-8">Films populaires Aujourd'hui</h1>
    </div>
    <div class="search pt-2 pb-6 ">
      <SearchBar  @search="searchMovies" />
    </div>
    <div class="movies grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 space-y-8">
      <div class="movie-card p-2 shadow-lg rounded-lg relative" v-for="movie in movies" :key="movie.id"
        @click="openModal(movie)">
        <img :alt="movie.title" :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
          class="w-full object-cover py-1" />
        <div class="card-text p-5">
          <h3 class="text-2xl font-bold">{{ movie.title }}</h3>
          <p>{{ movie.release_date }}</p>
          <p>{{ truncateOverview(movie.overview) }}</p>
          <p
            class="absolute -top-2 -right-2 bg-black text-white border-4 border-red-500 rounded-full h-12 w-12 flex items-center justify-center p-7 font-bold">
            {{ movie.vote_average }}
          </p>
        </div>
        <MovieModal :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from '../stores/moviestore'
import { ref, onMounted } from 'vue'
import SearchBar from './SearchBar.vue'
import MovieModal from './MovieModal.vue'

const movies = ref([])
const selectedMovie = ref(null)
const modalVisible = ref(false)

onMounted(async () => {
  const movieStore = useMovieStore()
  movies.value = await movieStore.getPopularMovies()
})

// Rechercher des films via l'API TMDb
const searchMovies = async (query) => {
  const movieStore = useMovieStore()
  if (query) {
    movies.value = await movieStore.searchMovies(query) // Search movies based on query
  } else {
    movies.value = await movieStore.getPopularMovies() // If no query, show popular movies
  }
}

// Ouvrir la modal avec le film sélectionné
const openModal = (movie) => {
  selectedMovie.value = movie
  modalVisible.value = true
}

// Fermer la modal
const closeModal = () => {
  modalVisible.value = false
}

// Truncate le texte de l'overview
function truncateOverview(overview) {
  return overview.length > 50 ? overview.substring(0, 50) + '...' : overview
}
</script>

<style scoped>
.movie-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
