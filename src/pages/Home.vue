<template>
    <Header/>
    <h1 class="font-semibold text-4xl text-gray-500 pl-36 py-20 ">Tus proyectos</h1>
    <div class="flex justify-center items-center text-center ">
        <ProjectCard/>
        <TaskCard/>
    </div>
</template>

<script setup>
import ProjectCard from "../components/ProjectCard.vue";
import TaskCard from "../components/TaskCard.vue";
import Header from "../components/Header.vue";

</script>

<style>

</style>