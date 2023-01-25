<template>
    <Header/>
    <div class="font-semibold text-3xl text-gray-500 mt-10 text-center ">
        <h1>Vacaciones Milan</h1>
    </div>
    <div class="flex justify-evenly   ">
        <div class="w-[430px] pt-12">
            <div class="flex justify-between">
                <h1 class="font-semibold text-2xl text-gray-500 pb-10 ml-16 ">To do ({{ taskStore.toDoTasks.length }})</h1>
                <form  class="pb-10">
                    <button @click.prevent="addTask" class="bg-gray-200 rounded-full px-2 mr-2 text-gray-700 text-xl font-bold">+</button>
                    <input type="text" class= "focus:outline-none" placeholder="Add a new task!" v-model="newTask">
                </form>
            </div>
            <div class="flex flex-col justify-center items-center text-center">
                <div v-for="(actualTask, index) in taskStore.toDoTasks" :key="index" >
                    <TaskCard @deleteTask="deleteTask(actualTask.id)" @showEditTask="showEditTask" @updateStatus="updateStatus(actualTask.id)" :taskCard="actualTask"/>
                </div>
            </div>
        </div>
        <div class="w-[430px] pt-12">
            <div class="flex items-center">
                <h1 class="font-semibold text-2xl text-gray-500 pb-10 ml-16 ">Doing ({{ taskStore.doingTasks.length }})</h1>
            </div>
            <div class="flex flex-col justify-center items-center text-center ">
                <div v-for="(actualTask, index) in taskStore.doingTasks" :key="index" >
                    <TaskCard @deleteTask="deleteTask(actualTask.id)" @showEditTask="showEditTask" @updateStatus3="updateStatus3(actualTask.id)" :taskCard="actualTask"/>
                </div>
            </div>  
        </div>
        <div class="w-[430px] pt-12">
            <div class="flex items-center">
                <h1 class="font-semibold text-2xl text-[#538898] pb-10 ml-16 ">Done ({{ taskStore.doneTasks.length }})</h1>
            </div>
            <div class="flex flex-col justify-center items-center text-center ">
                <div v-for="(actualTask, index) in taskStore.doneTasks" :key="index" >
                    <TaskCard @deleteTask="deleteTask(actualTask.id)" @showEditTask="showEditTask" :taskCard="actualTask" :taskCards="actualTask"/>
                </div>
            </div>  
        </div>
    </div>
    <div v-if="show">
      <EditTaskForm @showEditTask="showEditTask" />
      <Overlay/>
    </div>
    <div class="flex justify-center">
        <h1 class="text-3xl font-bold absolute bottom-2  ">Cards .</h1>
    </div>
</template>

<script setup> 

import {ref} from "vue";
import {useTaskStore} from '../store/task';
import {useProjectStore} from '../store/project';
import { useRoute } from 'vue-router'
import Header from '../components/Header.vue';
import TaskCard from '../components/TaskCard.vue';
import EditTaskForm from '../components/EditTaskForm.vue';
import Overlay from '../components/Overlay.vue'

const route = useRoute()
const projectStore = useProjectStore();
const taskStore = useTaskStore();
const newTask = ref ("");
const show = ref(false);
const projectId = ref(route.params.id)


fetchToDoTasks();
fetchDoingTasks();
fetchDoneTasks();

async function fetchToDoTasks() {
  try {
    await taskStore.fetchToDoTasks(projectId.value);
  }
  catch(e){
    alert(e.message);
  }
};
async function fetchDoingTasks() {
  try {
    await taskStore.fetchDoingTasks(projectId.value);
  }
  catch(e){
    alert(e.message);
  }
};
async function fetchDoneTasks() {
  try {
    await taskStore.fetchDoneTasks(projectId.value);
  }
  catch(e){
    alert(e.message);
  }
};

async function  addTask() {
  try {
    await taskStore.addTask(newTask.value,projectId.value);
    newTask.value="";
    await taskStore.fetchToDoTasks(projectId.value);
    await taskStore.fetchDoingTasks(projectId.value);
    await taskStore.fetchDoneTasks(projectId.value);
  }
  catch(e){
    alert(e.message);
  }
};

async function deleteTask(TaskId) {
  await taskStore.deleteTask(TaskId);
  await taskStore.fetchToDoTasks(projectId.value);
  await taskStore.fetchDoingTasks(projectId.value);
  await taskStore.fetchDoneTasks(projectId.value);
};

async function updateStatus(TaskId) {
  await taskStore.updateStatus(TaskId);
  await taskStore.fetchToDoTasks(projectId.value);
  await taskStore.fetchDoingTasks(projectId.value);
};

async function updateStatus3(TaskId) {
  await taskStore.updateStatus3(TaskId);
  await taskStore.fetchToDoTasks(projectId.value);
  await taskStore.fetchDoingTasks(projectId.value);
  await taskStore.fetchDoneTasks(projectId.value);
};

function showEditTask() {
  console.log('editing')
    show.value = !show.value;
};



</script>

<style>

</style>