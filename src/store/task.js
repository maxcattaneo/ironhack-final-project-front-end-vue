// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    toDoTasks: null,
    doingTasks: null,
    doneTasks: null
  }),
  actions: {
    async fetchToDoTasks(projectId) {
      const { data: tasks } = await supabase
        .from("Tasks")
        .select("*")
        .eq("project_id", projectId)
        .eq("status",1)
        .order("id", { ascending: false });
      this.toDoTasks= tasks;
    },
    async fetchDoingTasks(projectId) {
      const { data: tasks } = await supabase
        .from("Tasks")
        .select("*")
        .eq("project_id", projectId)
        .eq("status",2)
        .order("id", { ascending: false });
      this.doingTasks= tasks;
    },
    async fetchDoingTasks(projectId) {
      const { data: tasks } = await supabase
        .from("Tasks")
        .select("*")
        .eq("project_id", projectId)
        .eq("status",2)
        .order("id", { ascending: false });
      this.doneTasks= tasks;
    },
    async addTask(newTask) {
      const { tasks, error } = await supabase
        .from('tasks')
        .insert([
          { title: newTask.value ,status:1 },
        ]);
        if (error) throw error;
        if (tasks) this.tasks = tasks;
    }

    // Hacer POST
    // Hacer el PUT (edit)
    // Hacer el delete
    // Hacer el PUT (cambiar entre completada y pendiente)
  },
});
