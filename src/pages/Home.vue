<template>
    <Header/>
    <div class="flex justify-items-center py-16">
    <h1 class="font-semibold text-4xl text-gray-500 pl-36 mr-8">Tus proyectos</h1>
    <form class="mt-3">
        <button @click.prevent="addProject" class="bg-gray-200 rounded-full px-2 mr-2 text-gray-700 text-xl font-bold">+</button>
        <input type="text" class= "focus:outline-none leading-relaxed  " placeholder="Add a new project!" v-model="newProject">
    </form>
    </div>
    <div class="grid grid-cols-3 justify-center  justify-items-center mx-40 ">
      <div v-for="(actualProject, index) in projectStore.projects" :key="index" >
        <ProjectCard @deleteProject="deleteProject(actualProject.id)" :projectCard="actualProject"/> 
      </div>
    </div>
    <div class="flex justify-center">
        <h1 class="text-3xl font-bold ">Cards .</h1>
    </div>
</template>

<script setup>

import {ref} from "vue";
import {useProjectStore} from '../store/project'
import {useUserStore} from '../store/user'
import ProjectCard from "../components/ProjectCard.vue";
import Header from "../components/Header.vue";

const newProject= ref ("");
const userStore = useUserStore();
const projectStore = useProjectStore();

fetchProjects();

async function fetchProjects() {
  try {
    await projectStore.fetchProjects();
  }
  catch(e){
    alert(e.message);
  }
};

async function  addProject() {
  try {
    await projectStore.addProject(newProject.value, userStore.user.id);
    newProject.value="";
    await projectStore.fetchProjects();
  }
  catch(e){
    alert(e.message);
  }
};

async function editCardProject(editName , idProject) {
  await projectStore.editProject(editName,idProject);
  await projectStore.fetchProjects();
};

async function deleteProject(idProject) {
  await projectStore.deleteProject(idProject);
  await projectStore.fetchProjects();
  
};


</script>

<style>

</style>