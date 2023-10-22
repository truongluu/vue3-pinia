import { defineStore } from "pinia";
import { Task } from "../types/Task.type";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "Drink coffee", isFav: true },
      { id: 2, title: "Play football", isFav: false },
      { id: 3, title: "Go sightseeing with my best friends", isFav: false },
    ],
    name: "Pinia Tasks",
  }),
  getters: {
    favs: (state) => state.tasks.filter((task) => task.isFav),
    favCount: (state) => {
      return state.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p;
      }, 0);
    },
    totalCounter: (state) => state.tasks.length,
  },
  actions: {
    addTask(task: Task) {
      this.tasks.push(task);
    },
    deleteTask(taskId: number) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    },
    toggleTask(taskId: number) {
      this.tasks = this.tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isFav: !task.isFav };
        }
        return task;
      });
    },
  },
});
