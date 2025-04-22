<template>
  <div :aria-busy="status === 'loading'">
    <article v-if="post">
      <h1>{{ post.title }}</h1>
      <img :src="thumbnail" />
      <p>{{ post.body }}</p>
      <button class="secondary" @click="openModal">Editer</button>
    </article>

    <PostForm v-if="post" :post="post" :loading="status === 'loading'" v-model="isModalOpen" @submit="saveChanges" />
  </div>
</template>

<script setup>
import { computed, ref, toRaw } from 'vue';
import { useRoute } from 'vue-router';
import useFetch from '@/composable/useFetch';
import PostForm from '@/components/PostForm.vue';

const route = useRoute();
const isModalOpen = ref(null);

const { data: post, status, error, update } = useFetch(
  computed(
    () => `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
  )
);

const thumbnail = computed(
  () => `https://picsum.photos/id/${post.value?.id}/800/600`
);

const openModal = () => {
  isModalOpen.value = true;
};

const saveChanges = async (formData) => {
  try {
    const rawData = toRaw(formData);
    const updatedPost = await update(rawData);
    isModalOpen.value = null;
  } catch (error) {
    console.error('Erreur lors de la sauvegarde:', error);
    alert('Une erreur est survenue lors de la sauvegarde');
  }
};
</script>

<style scoped></style>
