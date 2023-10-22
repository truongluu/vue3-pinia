<template>
  <div>
    <div class="task-logo">
      <img src="../assets/logo.svg" />
      <h1>{{ taskStore.name }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from "../stores/TaskStore";

const taskStore = useTaskStore();
</script>
