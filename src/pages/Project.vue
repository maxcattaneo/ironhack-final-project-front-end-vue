<template>
    <Header/>
    <div class="flex justify-evenly">
        <div class="w-[450px] pt-16">
            <div class="flex justify-between">
                <h1 class="font-semibold text-2xl text-gray-500 pb-10 ml-16 ">To do (2)</h1>
                <form  class="pb-10">
                    <button @click.prevent="addTask" class="bg-gray-200 rounded-full px-2 text-gray-700 text-xl font-bold">+</button>
                    <input type="text" placeholder="  Add a new task!" v-model="newTask">
                </form>
            </div>
            <!-- task list?-->
            <div class="flex flex-col justify-center items-center text-center">
                <TaskCard/>
                <TaskCard/>
            </div>
        </div>
        <div class="w-[450px] pt-16">
            <div class="flex items-center">
                <h1 class="font-semibold text-2xl text-gray-500 pb-10 ml-16 ">Done (1)</h1>
            </div>
            <div class="flex justify-center items-center text-center ">
                <TaskCard/>
            </div>
            
        </div>
    </div>
    <div class="flex justify-center">
        <h1 class="text-3xl font-bold ">Cards .</h1>
    </div>
</template>

<script setup>

import {ref} from "vue";
import {useTaskStore} from '../store/task'
import Header from '../components/Header.vue';
import TaskCard from '../components/TaskCard.vue';
const taskStore = useTaskStore();
const newTask = ref ("");

async function  addTask() {
  try {
    await taskStore.addTask(newTask);
  }
  catch(e){
    alert(e.message);
  }
};




</script>

<style>

</style>