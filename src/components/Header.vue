<template>
  <header class="header">
    <div class="header__top">
      <a
        href="#"
        class="header__logo"
        >Blog App</a
      >
      <div
        class="menu-icon"
        @click="toggleMenu"
      >
        <Icon
          :icon="isMenuOpen ? 'mdi:close' : 'mdi:menu'"
          width="24"
          height="24"
        />
      </div>
    </div>
    <nav :class="{ 'nav-active': isMenuOpen }">
      <div class="nav-links">
        <RouterLink
          to="/"
          @click="closeMenu"
          >Home</RouterLink
        >
        <RouterLink
          :to="{ name: 'posts.index' }"
          @click="closeMenu"
          >Blog</RouterLink
        >
        <RouterLink
          to="/contact"
          @click="closeMenu"
          >Contact</RouterLink
        >
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = 'auto';
};
</script>

<style scoped>
.header {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #ffffff10;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #ffffff2d;
}

.header__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
}

.header a {
  text-decoration: none;
  color: inherit;
}

.header__logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.menu-icon {
  display: none;
  cursor: pointer;
}

.header nav {
  display: flex;
  justify-content: center;
}

.nav-links {
  display: flex;
  gap: 2rem;
  padding: 0.5rem;
}

@media (max-width: 768px) {
  .menu-icon {
    display: block;
    z-index: 1001;
  }

  .header nav {
    display: none;
    position: relative;
    top: 3.5rem;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50vh;
    /* background: rgba(0, 0, 0, 0.9); */
    /* backdrop-filter: blur(10px); */
  }

  .header nav.nav-active {
    display: flex;
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
  }

  .header nav a {
    font-size: 1.2rem;
  }
}
</style>
