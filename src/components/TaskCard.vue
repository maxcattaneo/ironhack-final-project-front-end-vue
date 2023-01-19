<template>
    <div class="w-[320px] h-[180px] rounded-xl border-2 flex flex-col justify-evenly items-center mb-8">
        <div class="flex flex-col text-center ">
            <span class="font-semibold text-xl pt-4">{{ taskCard.name }}</span>
            <div class="flex">
                <ChatBubbleBottomCenterTextIcon class="h-6 w-6 mr-1"/>
                <span>{{ taskCard.comment }}</span>
            </div>
        </div>
        <div class="flex items-center ">
            <div class="bg-[#CCDCE1] px-4 py-1 rounded-2xl ">{{taskCard.level}}</div>
            <span class="mx-4">12 Ene 2023</span>
            <PencilIcon class="h-6 w-6"/>
            <TrashIcon @click="deleteTask" class="h-6 w-6 hover:text-[#EC7357] ml-2"/>
        </div>
    </div>
</template>

<script setup>

import { ChatBubbleBottomCenterTextIcon } from '@heroicons/vue/24/outline';
import { PencilIcon } from '@heroicons/vue/24/outline';
import { TrashIcon } from '@heroicons/vue/24/outline';

const props = defineProps(['taskCard']);
const emits = defineEmits (["deleteTask"]);

function deleteTask(){
    emits("deleteTask");
}


</script>

<style>

</style>