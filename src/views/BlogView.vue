<template>
  <div class="container">
    <h1>Blog</h1>
    <div v-if="status === 'error'">Impossible de charger les articles</div>
    <Grid
      :width="300"
      v-else
      :aria-busy="status === 'loading'"
    >
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
      <!-- test -->
    </Grid>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PostCard from '@/components/PostCard.vue';
import Grid from '@/components/Grid.vue';
const status = ref('loading');
const posts = ref([]);

onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((r) => {
      if (r.ok) {
        return r.json();
      }
      throw new Error('Échec du chargement des articles');
    })
    .then((data) => {
      posts.value = data;
      status.value = 'idle';
    })
    .catch((e) => {
      console.error(e);
      status.value = 'error';
    });
  console.log(posts.value);
});
</script>
