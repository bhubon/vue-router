<script setup>
import { reactive, onBeforeMount } from 'vue';
import { useRoute } from "vue-router";

const route = useRoute();

</script>
<template>
    <div>
        <h2>User Page</h2>
        <p v-if="$route.params.id" >User Id: {{ $route.params.id }}</p>
        <p v-else >Unspecified User</p>
        <RouterView></RouterView>
    </div>
</template>

<style lang="scss" scoped></style>