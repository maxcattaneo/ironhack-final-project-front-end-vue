// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    toDoTasks: [],
    doingTasks: [],
    doneTasks: [],
  }),
  actions: {
    async fetchToDoTasks(projectId) {
      const { data: Tasks } = await supabase
        .from("Tasks")
        .select("*")
        .eq("project_id", projectId)
        .eq("status", 1)
        .order("id", { ascending: false });
      this.toDoTasks = Tasks;
    },
    async fetchDoingTasks(projectId) {
      const { data: Tasks } = await supabase
        .from("Tasks")
        .select("*")
        .eq("project_id", projectId)
        .eq("status", 2)
        .order("id", { ascending: false });
      this.doingTasks = Tasks;
    },
    async fetchDoneTasks(projectId) {
      const { data: Tasks } = await supabase
        .from("Tasks")
        .select("*")
        .eq("project_id", projectId)
        .eq("status", 3)
        .order("id", { ascending: false });
      this.doneTasks = Tasks;
    },
    async addTask(name,comment,level,date, projectId) {
      const { Tasks, error } = await supabase
        .from("Tasks")
        .insert([{ name: name, comment: comment, level: level, date: date, project_id: projectId, status: 1 }]);
      if (error) throw error;
      if (Tasks) this.Tasks = Tasks;
    },
    async editTask(newTaskName,editComment,selectedOption,selectedDate, TaskId) {
      const { data, error } = await supabase
        .from("Tasks")
        .update({ name: newTaskName, comment: editComment, level: selectedOption, date: selectedDate })
        .eq("id", TaskId);
      if (error) throw error;
    },
    async deleteTask(TaskId) {
      const { data, error } = await supabase
        .from("Tasks")
        .delete()
        .eq("id", TaskId);
    },
    async updateTaskStatus(TaskId, statusNumber) {
      const { data, error } = await supabase
        .from("Tasks")
        .update({ status: statusNumber })
        .eq("id", TaskId);
      if (error) throw error;
    },
  },
});
