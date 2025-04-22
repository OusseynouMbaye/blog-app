<template>
    <div class="grid">
        <label :for="id">{{ label }}</label>
        <textarea v-if="type === 'textarea'" :id="id" v-model='model'></textarea>
        <input v-else :id="id" :type="type" v-model='model' />
    </div>
</template>

<script setup>
defineProps({
    id: String,
    label: String,
    type: {
        type: String,
        default: 'text'
    },
});

const model = defineModel();
</script>

<style scoped>
.grid {
    margin-bottom: 1rem;
}

textarea {
    min-height: 150px;
}
</style>