<template>
    <div class="w-[320px] h-[180px] rounded-xl border-2 flex flex-col justify-evenly  mb-8">
        <div class="flex justify-end mr-8 ">
            <RocketLaunchIcon @click="updateStatus" class="h-6 w-6 hover:text-[#538898]"/>
            <RocketLaunchIcon @click="updateStatus3" class="h-6 w-6 hover:text-[#538898]"/>
            <FaceSmileIcon class="h-6 w-6"/>
        </div>
        <div class="flex flex-col text-center items-center">
            <span class="font-semibold text-xl">{{ taskCard.name }}</span>
            <div class="flex">
                <ChatBubbleBottomCenterTextIcon class="h-5 w-5 mr-0.5 mt-1"/>
                <span>{{ taskCard.comment }}</span>
            </div>
        </div>
        <div class="flex justify-center items-center ">
            <div class="bg-[#CCDCE1] px-4 py-1 rounded-2xl ">{{taskCard.level}}</div>
            <span class="mx-4">23 Ene 2023</span>
            <PencilIcon class="h-6 w-6"/>
            <TrashIcon @click="deleteTask" class="h-6 w-6 hover:text-[#EC7357] ml-2"/>
        </div>
    </div>
</template>

<script setup>

import { ChatBubbleBottomCenterTextIcon } from '@heroicons/vue/24/outline';
import { PencilIcon } from '@heroicons/vue/24/outline';
import { TrashIcon } from '@heroicons/vue/24/outline';
import { RocketLaunchIcon } from '@heroicons/vue/24/outline';
import { FaceSmileIcon } from '@heroicons/vue/24/outline';


const props = defineProps(['taskCard']);
const emits = defineEmits (["deleteTask, updateStatus, updateStatus3"]);


function deleteTask(){
    emits("deleteTask");
};
function updateStatus(){
    emits("updateStatus")
};
function updateStatus3(){
    emits("updateStatus3")
};



</script>

<style>

</style>