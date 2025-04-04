<template>
    <div>
        <h1>Blog</h1>
        <PostCard v-if="posts" :post="posts" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import PostCard from '@/components/PostCard.vue';

const route = useRoute();
const router = useRouter();
const posts = ref(null);

async function fetchPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + route.params.id);
        if (!response.ok) {
            throw new Error('Post not found');
        }
        const data = await response.json();
        posts.value = data;
    } catch (error) {
        console.error('Erreur:', error);
        router.push('/not-found');
    }
}

onMounted(() => {
    fetchPost();
});
</script>

<style scoped></style>
