<template>
    <div class="w-[320px] h-[180px] rounded-xl border-2 flex flex-col justify-evenly items-center mb-8">
        <div class="flex flex-col text-center ">
            <span class="font-semibold text-xl">Comprar vuelos</span>
            <div class="flex">
                <ChatBubbleBottomCenterTextIcon class="h-6 w-6 mr-1"/>
                <span>Mirar en Vueling</span>
            </div>
        </div>
        <div class="flex items-center ">
            <button class="bg-[#CCDCE1] px-4 py-1 rounded-2xl " @click="changeColor">{{level}}</button>
            <span>12 Ene 2023</span>
            <PencilIcon class="h-6 w-6"/>
            <TrashIcon class="h-6 w-6"/>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/vue/24/outline';
import { PencilIcon } from '@heroicons/vue/24/outline';
import { TrashIcon } from '@heroicons/vue/24/outline';

const level = ref("");
function changeColor() {
    level.value = "easy"
    
}

</script>

<style>

</style>