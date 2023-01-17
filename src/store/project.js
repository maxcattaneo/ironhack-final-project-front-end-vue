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
        .order("id", { ascending: false });
      this.projects = projects;
    },
    // Hacer POST
    // Hacer el PUT (edit)
    // Hacer el delete
    // Hacer el PUT (cambiar entre completada y pendiente)
  },
});