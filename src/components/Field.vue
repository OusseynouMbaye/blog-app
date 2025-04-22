<template>
    <div class="grid">
        <label :for="id">{{ label }}</label>
        <textarea v-if="type === 'textarea'" :id="id" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" :required="required"
            :disabled="disabled"></textarea>
        <input v-else :id="id" :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            :required="required" :disabled="disabled" />
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
    modelValue: {
        type: [String, Number],
        required: true
    },
    required: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    }
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
.grid {
    margin-bottom: 1rem;
}

textarea {
    min-height: 150px;
}
</style>