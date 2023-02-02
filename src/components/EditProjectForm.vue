<template>
    <div class="w-[400px] h-[250px] bg-white rounded-xl border-2 ml-14 absolute inset-1/3 z-10 ">
        <h1 class="font-semibold text-xl text-center m-10">Project settings</h1>
        <form>
            <div class="ml-20">
            <div class="mb-1">
                <label class="mr-2 font-semibold">Project name:</label>
                <input v-model="projectEdit.name" type="text">
            </div>
            </div>
            <div class="text-center m-10">
                <button @click="submitForm(projectEdit)" type="button" class="border-solid border-2 w-[70px] px-2 hover:bg-[#CCDCE1] text-black font-semibold rounded mr-2">Save</button>
                <button @click="cancelForm" type="button" class="border-solid border-2 px-2 w-[70px] hover:bg-[#FAD5CD] text-black font-semibold rounded">Cancel</button>
            </div>  
        </form>
    </div>
</template>

<script setup>

import {ref} from "vue";
import {useProjectStore} from '../store/project';


const projectStore = useProjectStore();
const newTaskName = ref ("");
const props = defineProps(['projectEdit']);
const emits = defineEmits (["savedProject", "cancelProject"]);
  
async function submitForm(projectEdit) {
    if(projectEdit.id != 0) {
        await projectStore.editProject(projectEdit.name,projectEdit.id);
    } else {
        await projectStore.addProject(projectEdit.name,projectEdit.user_id);
    }
    emits ("savedProject");
};

async function cancelForm() {
    emits ("cancelProject");
};


</script>

<style>

</style>