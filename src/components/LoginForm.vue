<template>
  <form class="w-full max-w-xs">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" v-model="email">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="* * * * * * * * *" v-model="password">
    </div>
    <div class="flex flex-col items-center justify-between">
      <button @click="login" class="bg-white border-solid border-2 border-gray-400 w-[320px]  hover:bg-[#CCDCE1] text-black  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Log in
      </button>
      <div class="flex font-semibold">
        <h1 class="mt-3">Don't have an account?</h1>
        <button @click="changeLogin" class="bg-white  hover:text-black text-[#538898] pt-3 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
          Sign up
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>

import {ref} from "vue";
import {useUserStore} from '../store/user';
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();
const emits = defineEmits (["changeLog"]);


async function  login() {
  try {
    await useUserStore().signIn(email.value, password.value);
    router.push({ path: "/" });
  }
  catch(e){
    alert(e.message);
  }
};

function changeLogin() {
  emits ("changeLog");
};

</script>

<style>

</style>