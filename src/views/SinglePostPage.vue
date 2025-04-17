<template>
  <div :aria-busy="status === 'loading'">
    <article v-if="post">
      <h1>{{ post.title }}</h1>
      <img :src="thumbnail" />

      <p>{{ post.body }}</p>
    </article>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import useFetch from '@/composable/useFetch';

const route = useRoute();

const { data: post, status } = useFetch(
  computed(
    () => `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
  )
);

const thumbnail = computed(
  () => `https://picsum.photos/id/${post.value.id}/800/600`
);
// console.log(post.value);
</script>

<style scoped></style>
