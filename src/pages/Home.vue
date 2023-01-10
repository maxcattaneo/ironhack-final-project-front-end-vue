<template>
    <Header/>
    <h1 class="font-semibold text-4xl text-gray-500 pl-36 py-20 ">Tus proyectos</h1>
    <div class="grid grid-cols-3 justify-items-center mx-20 ">
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

</script>

<style>

</style>