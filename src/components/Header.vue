<template>
    <header class="h-20 border-b-2 flex justify-between items-center text-center px-10">
        <div class="font-semibold text-2xl ">
            <h1>Welcome back, {{ userStore.user.email }} 👋</h1>
        </div>
        <div class="flex">
            <router-link to="/"><HomeIcon class="h-6 w-6 hover:stroke-gray-500"/></router-link>
            <span class="mx-8 flex" >
                <CalendarDaysIcon class="h-6 w-6 mx-2"/>
            <span class="font-semibold">{{day}} / {{month}} / {{year}}</span>
            </span>
            <button @click="signOut"  class="flex">
                <!--<UserIcon @click="signOut" class="h-6 w-6"/>-->
                <ArrowRightOnRectangleIcon class="h-6 w-6 hover:stroke-gray-500 "/>
                <h1 class="hover:text-gray-500 font-semibold">Log out</h1>
            </button>
        </div>

    </header>
</template>

<script setup>

import { ref } from 'vue';
import {useUserStore} from '../store/user'
import { useRouter } from "vue-router";
import { CalendarDaysIcon } from '@heroicons/vue/24/outline';
import { HomeIcon } from '@heroicons/vue/24/outline';
import { ArrowRightOnRectangleIcon } from '@heroicons/vue/24/outline';

const day = ref( new Date().getDate());
const month = ref( new Date().getMonth() + 1 );
const year = ref( new Date().getFullYear());
const router = useRouter();
const userStore = useUserStore();

async function  signOut() {
    try {
        await userStore.singOut();
        router.push({ path: "/auth" });
    }
    catch(e){
        alert(e.message);
    }
};

</script>

<style>

</style>