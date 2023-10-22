<template>
  <div class="task-detail">
    <h3 class="task-detail_title">{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons" @click="deleleTask">delete</i>
      <i
        class="material-icons"
        @click="toggleTask"
        :class="{ isFav: task.isFav }"
        >favorite</i
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from "../stores/TaskStore";
import { Task } from "../types/Task.type";

const props = defineProps<{ task: Task }>();

function deleleTask() {
  if (confirm("Do you want to delete this task?")) {
    taskStore.deleteTask(props.task.id);
  }
}

function toggleTask() {
  if (confirm("Do you want to toggle favourite this task?")) {
    taskStore.toggleTask(props.task.id);
  }
}
const taskStore = useTaskStore();
</script>

<style scoped></style>
