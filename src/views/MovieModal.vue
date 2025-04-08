<template>
  <div class="btn px-4">
    <button class="bg-red-500 p-2 text-white rounded" @click="visible = true">voir le film en detail</button>
  </div>
  <div class="card flex justify-center ">
    <Dialog pt:root:class="" pt:mask:class="backdrop-blur-sm" v-model:visible="visible" modal
      :header="props.movie.title" :style="{ width: '35vw', height: '100vh' }"
      :breakpoints="{ '1199px': '80vw', '575px': '90vw' }">
      <div class="card p-5 space-y-2">
        <img :src="`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`" alt="" class="w-full h-1/2">
        <p>{{ props.movie.release_date }}</p>
        <p>{{ props.movie.overview }}</p>
        <p class="bg-gray-700 rounded text-white p-2 block w-28">{{ props.movie.vote_average }} sur 10</p>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Dialog from 'primevue/dialog';

const props = defineProps({
  movie: Object
})
const visible = ref(false);
</script>
