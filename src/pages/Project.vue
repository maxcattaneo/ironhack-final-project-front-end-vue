<template>
    <Header/>
    <div class="font-semibold text-3xl text-gray-500 mt-10 ml-16">
        <h1>Vacaciones Milan</h1>
    </div>
    <div class="flex justify-evenly">
        <div class="w-[450px] pt-16">
            <div class="flex justify-between">
                <h1 class="font-semibold text-2xl text-gray-500 pb-10 ml-16 ">To do ()</h1>
                <form  class="pb-10">
                    <button @click.prevent="addTask" class="bg-gray-200 rounded-full px-2 mr-2 text-gray-700 text-xl font-bold">+</button>
                    <input type="text" class= "focus:outline-none" placeholder="Add a new task!" v-model="newTask">
                </form>
            </div>
            <div class="flex flex-col justify-center items-center text-center">
                <div v-for="(actualTask, index) in taskStore.toDoTasks" :key="index" >
                    <TaskCard @deleteTask="deleteTask(actualTask.id)" @updateStatus="updateStatus(actualTask.id)" :taskCard="actualTask"/>
                </div>
            </div>
        </div>
        <div class="w-[450px] pt-16">
            <div class="flex items-center">
                <h1 class="font-semibold text-2xl text-gray-500 pb-10 ml-16 ">Doing ()</h1>
            </div>
            <div class="flex flex-col justify-center items-center text-center ">
                <div v-for="(actualTask, index) in taskStore.doingTasks" :key="index" >
                    <TaskCard @deleteTask="deleteTask(actualTask.id)" @updateStatus3="updateStatus3(actualTask.id)" :taskCard="actualTask"/>
                </div>
            </div>  
        </div>
        <div class="w-[450px] pt-16">
            <div class="flex items-center">
                <h1 class="font-semibold text-2xl text-[#538898] pb-10 ml-16 ">Done ()</h1>
            </div>
            <div class="flex flex-col justify-center items-center text-center ">
                <div v-for="(actualTask, index) in taskStore.doneTasks" :key="index" >
                    <TaskCard @deleteTask="deleteTask(actualTask.id)" :taskCard="actualTask"/>
                </div>
            </div>  
        </div>
    </div>
    <div class="flex justify-center">
        <h1 class="text-3xl font-bold ">Cards .</h1>
    </div>
</template>

<script setup>

import {ref} from "vue";
import {useTaskStore} from '../store/task';
import {useProjectStore} from '../store/project';
import Header from '../components/Header.vue';
import TaskCard from '../components/TaskCard.vue';

const projectStore = useProjectStore();
const taskStore = useTaskStore();
const newTask = ref ("");

fetchToDoTasks();
//fetchDoingTasks();
//fetchDoneTasks();

async function fetchToDoTasks() {
  try {
    await taskStore.fetchToDoTasks(18);
    await taskStore.fetchDoingTasks(18);
    await taskStore.fetchDoneTasks(18);
  }
  catch(e){
    alert(e.message);
  }
};
/*async function fetchDoingTasks() {
  try {
    await taskStore.fetchDoingTasks(18);
  }
  catch(e){
    alert(e.message);
  }
};
async function fetchDoneTasks() {
  try {
    await taskStore.fetchDoneTasks(18);
  }
  catch(e){
    alert(e.message);
  }
};*/

async function  addTask() {
  try {
    await taskStore.addTask(newTask.value, projectStore.projects[0].id);
    newTask.value="";
    await taskStore.fetchToDoTasks();
  }
  catch(e){
    alert(e.message);
  }
};

async function deleteTask(TaskId) {
  await taskStore.deleteTask(TaskId);
  await taskStore.fetchToDoTasks();
  await taskStore.fetchDoingTasks();
  await taskStore.fetchDoneTasks();
};

async function updateStatus(TaskId) {
  await taskStore.updateStatus(TaskId);
  await taskStore.fetchToDoTasks();
  await taskStore.fetchDoingTasks();
};

async function updateStatus3(TaskId) {
  await taskStore.updateStatus3(TaskId);
  await taskStore.fetchDoingTasks();
  await taskStore.fetchDoneTasks();
};





</script>

<style>

</style>