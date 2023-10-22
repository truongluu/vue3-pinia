<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="newTask" placeholder="I need to..." type="text" />
    <button type="submit">Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTaskStore } from "../stores/TaskStore";

function removeNthFromEnd(arr: any[], position: number) {
  const temp = [...arr];
  temp.splice(arr.length - 1 - position, 1);
  return temp;
}
removeNthFromEnd([12, 3, 4, 2], 0);

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
