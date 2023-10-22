<script setup lang="ts">
import { ref } from "vue";
import TaskDetail from "../components/TaskDetail.vue";
import TaskForm from "../components/TaskForm.vue";
import { useTaskStore } from "../stores/TaskStore";
const filter = ref("all");
const taskStore = useTaskStore();
</script>

<template>
  <!-- new task form -->
  <div class="new-task-form">
    <TaskForm />
  </div>

  <nav class="filter">
    <button @click="filter = 'all'">All tasks</button>
    <button @click="filter = 'fav'">Fav tasks</button>
  </nav>
  <!-- task list -->
  <div class="task-list" v-if="filter === 'all'">
    <p>You have {{ taskStore.totalCounter }} tasks left to do</p>
    <div v-for="task in taskStore.tasks" :key="task.id">
      <TaskDetail :task="task" />
    </div>
  </div>
  <!-- task list -->
  <div class="task-list" v-if="filter === 'fav'">
    <p>You have {{ taskStore.favCount }} tasks left to do</p>
    <div v-for="task in taskStore.favs" :key="task.id">
      <TaskDetail :task="task" />
    </div>
  </div>
</template>
