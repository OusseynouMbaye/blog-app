<template>
  <article class="post-card">
    <a href="#">
      <img
        :src="thumbnail"
        :alt="post.title"
      />
    </a>

    <h2>
      <a href="#">{{ post.title }}</a>
    </h2>
    <p>{{ post.body }}</p>
    <!-- <p>{{ post.date }}</p> -->
  </article>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  post: Object,
});

const thumbnail = computed(
  () => `https://picsum.photos/id/${props.post.id}/280/180`
);
</script>

<style scoped>
.post-card {
  margin: 0 0 1rem 0;
  /* border: 1px solid #ccc; */
  /* padding: 1rem; */
  align-self: flex-start;
}
.post-card a {
  text-decoration: none;
  /* color: inherit; */
}
.post-card img {
  width: calc(100% + 2 * var(--pico-block-spacing-horizontal));
  max-width: none;
  height: auto;
  object-fit: cover;
  margin: calc(var(--pico-block-spacing-horizontal) * -1);
  margin-bottom: 1rem;
}

.post-card img:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}

.post-card h2 {
  margin: 0;
}
.post-card p {
  margin: 0;
}
</style>
