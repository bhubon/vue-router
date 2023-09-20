<!-- app component -->
<script setup>

</script>

<template>
  <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/user/bhubon">User</router-link></li>
  </ul>
  <RouterView :key="$route.fullPath"></RouterView>
</template>

<style scoped>
</style>
