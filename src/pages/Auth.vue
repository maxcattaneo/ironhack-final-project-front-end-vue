<template>
    <section class="flex">
      <div>
        <img class="h-screen " src="https://i.pinimg.com/originals/b9/b7/d0/b9b7d05effe72f4abda5f6b43d5f60e2.jpg" alt="">
      </div>
      <div class="flex flex-col justify-center items-center mx-auto">
        <h1 class="text-3xl font-bold m-10">Cards .</h1>
        <LoginForm v-if="login"/>
        <RegisterForm v-else/>
        <button @click="change" class="bg-white  hover:text-black text-gray-400 w-[300px]   font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign up
      </button>
      </div>
      <router-link to="/">home</router-link>
    </section>
</template>
 
<script setup>
import {ref} from "vue";
import LoginForm from "../components/LoginForm.vue"; 
import RegisterForm from "../components/RegisterForm.vue";
const login = ref(true);
function change() {
    login.value = !login.value;
}
 
</script>
 
<style>
 
</style>