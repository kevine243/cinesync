import { defineStore } from "pinia";
import { ref } from "vue";

export const useMovieStore = defineStore("movie", () => {
  const options = ref({
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODRhNDY0MjNjYjM4MGMyOWU1YjdhMmUyN2FlODU3MiIsIm5iZiI6MTc0NDA0OTM0MS44MzMsInN1YiI6IjY3ZjQxNGJkN2I0M2JkY2UyMGFkNDg0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aOqnG4xjI1i8ArrspxU6Hj5gbEAkUeI9LFxpsZFWJ5E",
    },
  });

  const getPopularMovies = async () => {
    options.value.url = `https://api.themoviedb.org/3/movie/popular?language=en-EN&page=1`;
    try {
      const response = await fetch(options.value.url, options.value);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des films populaires");
      }
      const data = await response.json();

      return data.results;
    } catch (error) {
      console.error("Erreur Fetch:", error);
      return [];
    }
  };

  const searchMovies = async (query) => {
    options.value.url = `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-En`;
    try {
      const response = await fetch(options.value.url, options.value);
      if (!response.ok) {
        throw new Error("Erreur lors de la recherche des films");
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Erreur Fetch:", error);
      return [];
    }
  };

  return { getPopularMovies, searchMovies };
});
