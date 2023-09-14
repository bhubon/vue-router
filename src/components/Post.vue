<script setup>
import { reactive, onBeforeMount } from 'vue';
import { useRoute } from "vue-router";

const route = useRoute();

const post = reactive({
    title: ''
});

onBeforeMount(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${route.params.id}`)
        .then(res => res.json())
        .then(data => {
            post.title = data.title
        })
});

</script>
<template>
    <div>
        <h2>Post Page</h2>
        <p>Post Id: {{ $route.params.id }}</p>
        <p>Post Title : {{ post.title }}</p>
    </div>
</template>

<style lang="scss" scoped></style>