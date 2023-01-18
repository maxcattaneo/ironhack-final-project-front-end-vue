<template>
    <form class="w-full max-w-xs">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" v-model="email">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="* * * * * * * * *" v-model="password">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="repeat-password">
          Repeat Password
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="repeatPassword" type="password" placeholder="* * * * * * * * *" v-model="repeatPassword">
      </div>
      <div class="flex flex-col items-center justify-between">
        <button @click="signUp" class="bg-white border-solid border-2 border-gray-400 w-[300px]  hover:bg-gray-400 text-black  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Sign up
        </button>
        <h1 class="m-3 font-semibold ">Already have an account? <button class="text-zinc-500 hover:text-black ">Login</button></h1>
      </div>
    </form>
</template>

<script setup>
import {ref} from "vue";
import {useUserStore} from '../store/user';
import { useRouter } from "vue-router";

const userStore = ref (useUserStore());
const email = ref("");
const password = ref("");
const repeatPassword = ref("");
const router = useRouter();

async function  signUp() {
  if (password.value === repeatPassword.value) {
  try {
    await userStore.signUp(email.value, password.value);
    router.push({ path: "/auth" })
  } catch(e) {
    alert(e.message);
  }}
};

</script>

<style>

</style>