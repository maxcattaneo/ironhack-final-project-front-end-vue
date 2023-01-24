<template>
    <div class="w-[400px] h-[300px] bg-white rounded-xl border-2 ml-14   absolute inset-1/3  z-10">
        <h1 class="font-semibold text-xl text-center mt-10 mb-5"> Edit Task</h1>
        <form>
            <div class="ml-20">
            <div class="mb-1">
                <label class="mr-2 font-semibold">Nombre:</label>
                <input v-model="newTaskName" type="text">
            </div>
            <div class="mb-1">
                <label class="mr-2 font-semibold">Comentario:</label>
                <input v-model="editComment" type="text">
            </div>
            <div class="mb-1">
                <label class="mr-2 font-semibold">Fecha limite:</label>
                <input v-model="selectedDate" type="date" />
            </div>
            <div class="mb-1">
                <label class="mr-2 font-semibold">Dificultad:</label>
                <select v-model="selectedOption" class="hover:bg-[#CCDCE1]">
                    <option v-for="option in options" :value="option">{{ option }}</option>
                </select>
            </div>
            </div>
            <div class="text-center m-10">
                <button @click.prevent="submitForm" class="border-solid border-2  px-2 hover:bg-[#CCDCE1] text-black font-semibold rounded mr-2">Edit task</button>
                <button @click="cancelForm" class="border-solid border-2  px-2 hover:bg-[#FAD5CD] text-black font-semibold rounded">Cancel</button>
            </div>
            
            
        </form>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {useTaskStore} from '../store/task';


const taskStore = useTaskStore();
const newTaskName = ref ("");
const editComment = ref ("");
const selectedDate = ref ("");
const selectedOption = ref ("");
const options = ['easy', 'middle', 'difficult'];
  
async function submitForm(newTaskName,editComment,selectedOption,selectedDate, TaskId) {
    console.log("hellooou");
    await taskStore.editTask(newTaskName.value, editComment.value,selectedOption.value, selectedDate.value, TaskId);
    // handle form submit logic
};

function cancelForm() {
    // handle form cancel logic
};

</script>

<style>

</style>