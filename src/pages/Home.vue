<template>
    <Header/>
    <div class="flex justify-items-center py-16">
    <h1 class="font-semibold text-4xl text-gray-500 pl-36 mr-8">Tus proyectos</h1>
    <form class="mt-3">
        <button class="bg-gray-200 rounded-full px-2 text-gray-700 text-xl font-bold">+</button>
        <input type="text" placeholder="  Add a new project!" v-model="newTask">
    </form>
    </div>
    <div class="grid grid-cols-3 justify-center  justify-items-center mx-40 ">
        <router-link to="/project"><ProjectCard/></router-link>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        
    </div>
    <h1 class="text-3xl font-bold ">Cards .</h1>
</template>

<script setup>

import ProjectCard from "../components/ProjectCard.vue";
import Header from "../components/Header.vue";
/*import { useProjectStore } from "../store/project"

const projectStore = ref (useProjectStore());
async function loadProject (){
    //alert("estoy en load");
    await projectStore.fetchProjects();
    alert("estoy en load");
}*/

</script>

<style>

</style>