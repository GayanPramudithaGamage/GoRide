<template>
  <div class="p-5 w-full bg-black text-white text-lg font-bold">
    <router-link class="p-5 text-2xl font-extrabold text-green-500" to="/home"
      >Go<span class="text-white">Ride</span></router-link
    >
    <router-link class="p-5" to="/home">Home</router-link>
    <router-link class="p-5" to="/ride">Ride</router-link>
    <router-link class="p-5" to="/aboutus">About Us</router-link>
    <button @click="signout">Log Out</button>
  </div>
</template>
<script>
import { getAuth, signOut } from "firebase/auth";
import app from "@/firebase";
import router from "@/router";

export default {
  methods: {
    signout() {
      const auth = getAuth(app);
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          router.push("/");
        })
        .catch((error) => {
          // An error happened.
          console.log((this.error = error.code));
        });
    },
  },
};
</script>
<style></style>
