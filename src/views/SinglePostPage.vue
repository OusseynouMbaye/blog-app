<template>
  <div :aria-busy="status === 'loading'">
    <article v-if="post">
      <h1>{{ post.title }}</h1>
      <img :src="thumbnail" />
      <p>{{ post.body }}</p>
      <button class="secondary" @click="openModal">Editer</button>
    </article>

    <PostForm v-if="post" :post="post" :loading="status === 'loading'" :status="status" :modelValue="isModalOpen"
      @update:modelValue="isModalOpen = $event" @submit="saveChanges" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import useFetch from '@/composable/useFetch';
import PostForm from '@/components/PostForm.vue';

const route = useRoute();
const isModalOpen = ref(false);

const { data: post, status, error, update } = useFetch(
  computed(() => `https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
);

const thumbnail = computed(
  () => `https://picsum.photos/id/${post.value?.id}/800/600`
);

const openModal = () => {
  isModalOpen.value = true;
};

const saveChanges = async (formData) => {
  try {
    await update(formData);
    isModalOpen.value = false;
  } catch (error) {
    console.error('Erreur lors de la sauvegarde:', error);
  }
};
</script>

<style scoped></style>
