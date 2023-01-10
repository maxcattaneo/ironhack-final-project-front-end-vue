<template>
    <header class="h-20 border-b-2 flex justify-between items-center text-center px-10">
        <div class="font-semibold text-2xl ">
            <h1>Welcome back, Max 👋</h1>
        </div>
        <div class="flex">
            <router-link to="/"><HomeIcon class="h-6 w-6"/></router-link>
            <span class="mx-8 flex">
                <CalendarDaysIcon class="h-6 w-6 mx-2"/>
                23 Ene 2023
            </span>
            <UserIcon class="h-6 w-6"/>
        </div>

    </header>
</template>

<script setup>
import { CalendarDaysIcon } from '@heroicons/vue/24/outline';
import { HomeIcon } from '@heroicons/vue/24/outline';
import { UserIcon } from '@heroicons/vue/24/outline';

</script>

<style>

</style>