<template>
    <div class="w-full h-screen  bg-[#CCDCE1] flex place-items-center  ">
      <div class="flex flex-col justify-center items-center mx-auto bg-white w-[400px] h-[500px] rounded-xl border-2">
        <h1 class="text-3xl font-bold mb-10">Cards .</h1>
        <LoginForm @change-log="change" v-if="login"/>
        <RegisterForm @change-login="change" v-else/>
      </div>
    </div>
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