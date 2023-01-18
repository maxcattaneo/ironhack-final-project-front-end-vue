<template>
    <div class="w-[320px] h-[180px] bg-[#CCDCE1] rounded-xl    border-2 flex flex-col justify-center items-center mb-12">
        <span class="font-semibold text-xl">{{ projectCard.name }}</span>
        <div class="flex-col text-center ">
            <div class="flex">
                <CalendarDaysIcon class="h-6 w-6 mr-1"/>
                <span>{{ projectCard.created_at }}</span>
            </div>
            <div class="flex">
                <div>
                    <TrashIcon @click="deleteProject" class="h-6 w-6"/>
                </div>
            </div>
           
        </div>
    </div>
</template>

<script setup>


import { CalendarDaysIcon } from '@heroicons/vue/24/outline';
import { TrashIcon } from '@heroicons/vue/24/outline';


const props = defineProps(['projectCard']);
const emits = defineEmits (["deleteCard"]);




function deleteProject(){
    emits("deleteCard");
}


</script>

<style>

</style>