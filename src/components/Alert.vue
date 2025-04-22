<template>
    <div :class="['alert', type]" role="alert">
        <slot></slot>
        <button type="button" class="close" aria-label="Close" @click="$emit('close')" />
    </div>
</template>

<script setup>
defineProps({
    type: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'success', 'danger', 'warning'].includes(value)
    }
});

defineEmits(['close']);
</script>

<style scoped>
.alert {
    position: relative;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
}

.alert.primary {
    background-color: #cfe2ff;
    color: #084298;
}

.alert.success {
    background-color: #d1e7dd;
    color: #0f5132;
}

.alert.danger {
    background-color: #f8d7da;
    color: #842029;
}

.alert.warning {
    background-color: #fff3cd;
    color: #664d03;
}

.close {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
}
</style>