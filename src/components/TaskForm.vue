<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="newTask" placeholder="I need to..." type="text" />
    <button type="submit">Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTaskStore } from "../stores/TaskStore";

const taskStore = useTaskStore();
const newTask = ref("");
const handleSubmit = () => {
  if (newTask.value.length > 0) {
    taskStore.addTask({
      isFav: false,
      id: Math.floor(Math.random() * 1000000),
      title: newTask.value,
    });
    newTask.value = "";
  }
};
</script>
