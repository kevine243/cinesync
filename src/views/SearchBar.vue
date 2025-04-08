<template>
  <div>
    <IconField>
      <InputIcon class="pi pi-search " />
      <InputText class="w-full" v-model="query" @input="onSearch" placeholder="Rechercher votre film preferé" />
    </IconField>
  </div>
</template>

<script setup>
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import { ref, defineEmits } from 'vue';


const emit = defineEmits(['search'])
const query = ref('')

const onSearch = () => {
  emit('search', query.value)
}
</script>

<!-- <template>
  <div class="search-bar">
    <input v-model="query" @input="onSearch" type="text" placeholder="Rechercher un film..."
      class="p-2 w-full border rounded" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['search'])

const query = ref('')

const onSearch = () => {
  emit('search', query.value)
}
</script> -->
