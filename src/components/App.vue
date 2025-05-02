<template>
  <div class="app">
    <Header />
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Header from '@/components/Header.vue';
</script>

<style scoped>
.app {
  min-height: 100vh;
}

.main-content {
  padding-top: 4rem;
  /* Ajout de l'espace pour le header fixe */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
