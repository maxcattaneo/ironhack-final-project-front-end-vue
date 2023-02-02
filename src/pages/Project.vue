<template>
    <Header/>
    <div class="font-semibold text-3xl text-gray-500 mt-10 text-center ">
      <h1>Mis tareas</h1>
    </div>
    <div class="flex justify-evenly ">
        <div class="w-[430px] pt-12">
            <div class="flex justify-between">
                <h1 class="font-semibold text-2xl text-gray-500 pb-10 ml-6 ">To do ({{ taskStore.toDoTasks.length }})</h1>
                <form  class="pb-10">
                    <button @click.prevent="addTask" class="bg-gray-200 rounded-full px-2 mr-2 text-gray-700 hover:bg-[#CCDCE1] text-xl font-bold">+</button>
                    <span class="text-gray-400">Añadir nueva tarea!</span>
                </form>
            </div>
            <div class="flex flex-col justify-center items-center text-center">
                <div v-for="(actualTask, index) in taskStore.toDoTasks" :key="index" >
                    <TaskCard @deleteTask="deleteTask(actualTask.id)" @showEditTask="showEditTask" @updateStatus="updateStatus(actualTask.id, actualTask.status )" :taskCard="actualTask"/>
                  </div>
            </div>
        </div>
        <div class="w-[430px] pt-12">
            <div class="flex items-center">
                <h1 class="font-semibold text-2xl text-gray-500 pb-10 ml-10 ">Doing ({{ taskStore.doingTasks.length }})</h1>
            </div>
            <div class="flex flex-col justify-center items-center text-center ">
                <div v-for="(actualTask, index) in taskStore.doingTasks" :key="index" >
                    <TaskCard @deleteTask="deleteTask(actualTask.id)" @showEditTask="showEditTask" @updateStatus="updateStatus(actualTask.id, actualTask.status)" :taskCard="actualTask"/>
                </div>
            </div>  
        </div>
        <div class="w-[430px] pt-12">
            <div class="flex items-center">
                <h1 class="font-semibold text-2xl text-[#538898] pb-10 ml-10 ">Done ({{ taskStore.doneTasks.length }} of {{ taskStore.doneTasks.length + taskStore.doingTasks.length + taskStore.toDoTasks.length}})</h1>
            </div>
            <div class="flex flex-col justify-center items-center text-center ">
                <div v-for="(actualTask, index) in taskStore.doneTasks" :key="index" >
                    <TaskCard @deleteTask="deleteTask(actualTask.id)" @showEditTask="showEditTask" @updateStatus="updateStatus(actualTask.id, actualTask.status)" :taskCard="actualTask" :taskCards="actualTask"/>
                </div>
            </div>  
        </div>
    </div>
    
    <div class="flex justify-center">
        <h1 class="text-3xl font-bold absolute bottom-2  ">Cards .</h1>
    </div>
    <div v-if="show">
      <EditTaskForm :taskEdit="editingTask" @savedCard="refreshAllList" @cancelCard="refreshAllList" />
      <Overlay/>
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
const show = ref(false);
const projectId = ref(route.params.id)
let editingTask= ref ("");


refreshAllList();

function refreshAllList() {
fetchToDoTasks();
fetchDoingTasks();
fetchDoneTasks();
show.value = false
};


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
    let newTask = new Object();
    newTask.id = 0;
    newTask.status = 1;
    newTask.project_id = projectId.value;
    editingTask.value = newTask;
    show.value = true;
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

async function updateStatus(TaskId, actualStatus) {
  let newStatus = " "
  if(actualStatus == 1) {
    newStatus = 2;
  } else if (actualStatus == 2) {
    newStatus = 3;
  } else {
    alert ("Tarea completada!")
  }
  await taskStore.updateTaskStatus(TaskId, newStatus);
  await taskStore.fetchToDoTasks(projectId.value);
  await taskStore.fetchDoingTasks(projectId.value);
  await taskStore.fetchDoneTasks(projectId.value);
};

function showEditTask(tareaActual) {
  editingTask.value = tareaActual;
    show.value = true;
};

</script>

<style>

</style>