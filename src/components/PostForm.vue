<template>
  <Modal v-if="modelValue" :title="post?.id ? 'Modifier l\'article' : 'Créer un article'"
    @close="$emit('update:modelValue', false)">
    <Alert v-if="status === 'error'" type="danger" @close="$emit('statusChange', 'idle')">
      La mise à jour a échoué. Veuillez réessayer.
    </Alert>
    <form @submit.prevent="handleSubmit">
      <Field id="title" label="Titre" type="text" v-model="formData.title" :required="true" :disabled="loading" />
      <Field id="body" label="Contenu" type="textarea" v-model="formData.body" :required="true" :disabled="loading" />
      <div class="grid">
        <button type="submit" :aria-busy="loading" :disabled="loading">{{ submitLabel }}</button>
        <button type="button" class="secondary" @click="handleCancel" :disabled="loading">
          Annuler
        </button>
      </div>
    </form>
  </Modal>
</template>

<script setup>
import { ref, watch } from 'vue';
import Modal from './Modal.vue';
import Field from './Field.vue';
import Alert from './Alert.vue';

const props = defineProps({
  post: {
    type: Object,
    default: () => ({})
  },
  submitLabel: {
    type: String,
    default: 'Sauvegarder',
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    default: 'idle'
  }
});

const emit = defineEmits(['submit', 'update:modelValue', 'statusChange']);

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
