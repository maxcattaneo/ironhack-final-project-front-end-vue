<template>
    <div class="w-[320px] h-[180px] rounded-md border-2 flex flex-col justify-evenly   items-center">
        <div class="flex flex-col text-center ">
            <span class="font-semibold text-xl">Comprar vuelos</span>
            <span>Mirar en Vueling</span>
        </div>
        <div class="">
            <button class="bg-[#CCDCE1] px-4 py-1 rounded-2xl " @click="changeColor">{{level}}</button>
            <span>12 Ene 2023</span>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue"
const level = ref("");
function changeColor() {
    level.value = "easy"
    
}

</script>

<style>

</style>