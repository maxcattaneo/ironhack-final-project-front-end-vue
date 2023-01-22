<template>
    <div class="w-[320px] h-[180px]  bg-[#FCEDBF] rounded-xl border-2 flex flex-col justify-center items-center mb-12">
        <div class="mt-10">
            <router-link :to="{name: 'project',params: {id: projectCard.id}}"><span class="font-semibold text-2xl ">{{ projectCard.name }}</span></router-link>
        </div>
        <div class="flex mb-6">
            <CalendarDaysIcon class="h-6 w-6 mr-1"/>
            <span>{{ dateString }} </span>
        </div>
        <div class="ml-56 text-gray-500  ">
            <TrashIcon @click="deleteProject" class="h-6 w-6 hover:text-[#EC7357]"/>
        </div>
    </div>
</template>

<script setup>


import { CalendarDaysIcon } from '@heroicons/vue/24/outline';
import { TrashIcon } from '@heroicons/vue/24/outline';


const props = defineProps(['projectCard']);
const emits = defineEmits (["deleteProject"]);
var timestamp = "2023-01-18T12:13:21.258236+00:00";
var date = new Date(timestamp);
var year = date.getFullYear();
var month = (date.getMonth() + 1).toString().padStart(2, "0");
var day = date.getDate().toString().padStart(2, "0");
var dateString = day + "-" + month + "-" + year;


function deleteProject(){
    emits("deleteProject");
};



</script>

<style>

</style>