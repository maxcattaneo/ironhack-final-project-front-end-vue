<template>
    <Header/>
    <div class="flex justify-items-center py-16">
    <h1 class="font-semibold text-4xl text-gray-500 pl-36 mr-8">Mis proyectos</h1>
    <form class="mt-3">
        <button @click.prevent="addProject" class="bg-gray-200 rounded-full px-2 mr-2 text-gray-700 hover:bg-[#CCDCE1] text-xl font-bold">+</button>
        <span class="text-gray-400">Añadir nuevo proyecto!</span>
    </form>
    </div>
    <div class="grid grid-cols-3 justify-center  justify-items-center mx-40 ">
      <div v-for="(actualProject, index) in projectStore.projects" :key="index" >
        <ProjectCard @deleteProject="deleteProject(actualProject.id)" @showEditProject="showEditProject" :projectCard="actualProject"  /> 
      </div>
    </div>
    <div class="flex justify-center">
        <h1 class="text-3xl font-bold absolute bottom-2">Cards .</h1>
    </div>
    <div v-if="show">
      <EditProjectForm :projectEdit="editingProject" @savedProject="refreshList" @cancelProject="refreshList" />
      <Overlay/>
    </div>
</template>

<script setup>

import {ref} from "vue";
import {useProjectStore} from '../store/project';
import {useUserStore} from '../store/user';
import {useTaskStore} from '../store/task';
import ProjectCard from "../components/ProjectCard.vue";
import Header from "../components/Header.vue";
import EditProjectForm from '../components/EditProjectForm.vue';
import Overlay from '../components/Overlay.vue';

const newProject= ref ("");
const userStore = useUserStore();
const projectStore = useProjectStore();
const taskStore = useTaskStore();
const show = ref(false);
let editingProject= ref ("");


fetchProjects();

refreshList();

function refreshList() {
fetchProjects();
show.value = false
};


async function fetchProjects() {
  try {
    await projectStore.fetchProjects();
  }
  catch(e){
    alert(e.message);
  }
};

/*async function  addProject() {
  try {
    await projectStore.addProject(newProject.value, userStore.user.id);
    newProject.value="";
    await projectStore.fetchProjects();
  }
  catch(e){
    alert(e.message);
  }
};*/
async function  addProject() {
  try {
    let newProject = new Object();
    newProject.id = 0;
    newProject.user_id = userStore.user.id;
    editingProject.value = newProject;
    show.value = true;
  }
  catch(e){
    alert(e.message);
  }
};


async function deleteProject(idProject) {
  await projectStore.deleteProject(idProject);
  await projectStore.fetchProjects();
  
};

function showEditProject(projectActual) {
  editingProject.value = projectActual;
    show.value = true;
};


</script>

<style>

</style>