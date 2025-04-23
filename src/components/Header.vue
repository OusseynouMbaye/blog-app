<template>
  <header class="header">
    <div>
      <a href="#" class="header__logo">Blog App</a>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink :to="{ name: 'posts.index' }">Blog</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
  </header>

  <!-- <RouterView /> -->
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 1rem;
  background: #ffffff10;
  border-bottom: 1px solid #ffffff2d;
}

.header a {
  text-decoration: none;
  color: inherit;
}

.header__logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.header nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
