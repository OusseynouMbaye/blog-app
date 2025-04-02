<template>
  <div class="grid" :style="gridWidth">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  width: {
    type: Number,
    default: 300,
  },
});

const gridWidth = computed(() => ({
  '--width': `${props.width}px`,
}));
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--width), 1fr));
  gap: 1rem;
}

.grid>* {
  margin: 0;
  height: 100%;
}
</style>
