<template>
  <div class="container">
    <h1>Blog</h1>
    <div v-if="status === 'error'">Impossible de charger les articles</div>
    <div v-else :aria-busy="status === 'loading'">
      <Grid>
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
      </Grid>
    </div>
    <!-- page suivante hide button si page > 1  -->
    <div class="pagination">
      <button @click="page--" :disabled="page === 1">
        page précédente
      </button>
      <button @click="page++">page suivante</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import PostCard from '@/components/PostCard.vue';
import Grid from '@/components/Grid.vue';
import useFetch from '@/composable/useFetch';

const page = ref(1);

const { status, data: posts } = useFetch(
  computed(() => `https://jsonplaceholder.typicode.com/posts?_limit=2&_page=${page.value}`)
);

</script>

<style scoped>
.pagination {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
</style>
