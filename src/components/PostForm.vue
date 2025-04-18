<template>
  <Modal v-if="modelValue" :title="post?.id ? 'Modifier l\'article' : 'Créer un article'"
    @close="$emit('update:modelValue', false)">
    <form @submit.prevent="handleSubmit">
      <div class="grid">
        <label for="title"> Titre </label>
        <input id="title" type="text" v-model="formData.title" required />
      </div>
      <div class="grid">
        <label for="body">Contenu</label>
        <textarea id="body" v-model="formData.body" required></textarea>

      </div>
      <div class="grid">
        <button type="submit">{{ submitLabel }}</button>
        <button type="button" class="secondary" @click="handleCancel">
          Annuler
        </button>
      </div>
    </form>
  </Modal>
</template>

<script setup>
import { ref, watch } from 'vue';
import Modal from './Modal.vue';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  submitLabel: {
    type: String,
    default: 'Sauvegarder',
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['submit', 'cancel', 'update:modelValue']);

const formData = ref({ ...props.post });

watch(
  () => props.post,
  (newPost) => {
    formData.value = { ...newPost };
  },
  { deep: true }
);

const handleSubmit = () => {
  emit('submit', formData.value);
};

const handleCancel = () => {
  emit('update:modelValue', false);
  emit('cancel');
};
</script>

<style scoped>
.grid {
  margin-bottom: 1rem;
}

textarea {
  min-height: 150px;
}
</style>
