<template>
    <div class="w-[400px] h-[300px] bg-white rounded-xl border-2 ml-14   absolute inset-1/3  z-10">
        <h1 class="font-semibold text-xl text-center mt-10 mb-5">Task settings</h1>
        <form>
            <div class="ml-20">
            <div class="mb-1">
                <label class="mr-2 font-semibold">Nombre:</label>
                <input v-model="taskEdit.name" type="text">
            </div>
            <div class="mb-1">
                <label class="mr-2 font-semibold">Comentario:</label>
                <input v-model="taskEdit.comment" type="text">
            </div>
            <div class="mb-1">
                <label class="mr-2 font-semibold">Fecha limite:</label>
                <input v-model="taskEdit.date" type="date" />
            </div>
            <div class="mb-1">
                <label class="mr-2 font-semibold">Dificultad:</label>
                <select v-model="taskEdit.level" class="">
                    <option v-for="option in options" :value="option">{{ option }}</option>
                </select>
            </div>
            </div>
            <div class="text-center m-10">
                <button @click="submitForm(taskEdit)" type="button" class="border-solid border-2 w-[70px] px-2 hover:bg-[#CCDCE1] text-black font-semibold rounded mr-2">Save</button>
                <button @click="cancelForm" type="button" class="border-solid border-2 w-[70px] px-2 hover:bg-[#FAD5CD] text-black font-semibold rounded">Cancel</button>
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
const props = defineProps(['taskEdit']);
const emits = defineEmits (["savedCard", "cancelCard"]);
  
async function submitForm(taskEdit) {
    if(taskEdit.id != 0) {
        await taskStore.editTask(taskEdit.name,taskEdit.comment, taskEdit.level, taskEdit.date, taskEdit.id);
    } else {
        await taskStore.addTask(taskEdit.name,taskEdit.comment,taskEdit.level,taskEdit.date, taskEdit.project_id);
    }
    emits ("savedCard");
};

async function cancelForm() {
    emits ("cancelCard");
};

console.log(props.taskEdit)

</script>

<style>

</style>