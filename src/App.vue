<script setup lang="ts">
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <Header />
  <Navigation />
  <!-- container -->
  <div class="container">
    <!-- route outlet -->
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
