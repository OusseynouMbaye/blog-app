<template>
  <dialog open>
    <article>
      <header>
        <h2>{{ title }}</h2>
        <button type="button" aria-label="Close" class="close" @click.prevent="emits('close')"></button>
      </header>
      <section class="content">
        <slot></slot>
      </section>
    </article>
  </dialog>
</template>

<script setup>
defineProps({
  title: String,
});

const emits = defineEmits(['close']);
</script>

<style scoped>
.close {
  float: right;
  margin-top: -2rem;
}

.content {
  padding: 1rem 0;
}
</style>
