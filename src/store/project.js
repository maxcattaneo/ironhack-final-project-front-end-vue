// /store/project.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useProjectStore = defineStore("projects", {
  state: () => ({
    projects: null,
  }),
  actions: {
    async fetchProjects() {
      const { data: projects } = await supabase
        .from("Projects")
        .select("*")
        .order("id", { ascending: true });
      this.projects = projects;
    },
    async addProject(newProject, userid) {
      const { projects, error } = await supabase
        .from('Projects')
        .insert([
          { name: newProject , user_id:userid },
        ]);
        if (error) throw error;
    },
    async editProject(editName, projectId) {
      const { data, error } = await supabase
      .from('Projects')
      .update({ name: editName })
      .eq('id', projectId);
      if (error) throw error;
    },
    async deleteProject(projectId){
      const { data, error } = await supabase
      .from('Projects')
      .delete()
      .eq('id', projectId);
      if (error) throw error;
    }
  },
});