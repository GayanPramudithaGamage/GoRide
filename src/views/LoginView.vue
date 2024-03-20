<template>
  <div class="w-full h-full">
    <img
      class="hidden sm:block absolute w-full h-full object-cover"
      src="https://safelyinsured.co.uk/Content/Images/pages/Taxi-Hire-Insurance-website-image-Safely-Insured.jpg"
      alt=""
    />
    <div class="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
    <div class="fixed w-full px-4 py-24 z-50">
      <div class="max-w-[450px] h-[600px] mx-auto bg-black/80 text-white">
        <div class="max-w-[320px] mx-auto py-16">
          <h1 class="text-3xl font-bold">Sign In</h1>
          <p v-if="error" class="p-3 bg-red-400 my-2">{{ error }}</p>
          <form @submit.prevent="login" class="w-full flex flex-col py-4">
            <input
              class="p-3 my-2 bg-gray-700 rounded"
              id="email"
              name="email"
              type="email"
              text="email"
              value
              required
              autofocus
              v-model="email"
              placeholder="E-mail"
              autoComplete="email"
            />
            <input
              class="p-3 my-2 bg-gray-700 rounded"
              id="password"
              name="password"
              value
              required
              autofocus
              v-model="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
            <button class="bg-green-600 py-3 my-6 rounded font-bold">
              Sign In
            </button>
            <div
              class="flex justify-between items-center text-sm text-gray-600"
            >
              <p>
                <input class="mr-2" type="checkbox" />
                Remember me
              </p>
              <p>Need help ?</p>
            </div>
            <p class="py-8">
              <span class="text-gray-600">Still not?</span>
              <router-link to="/signup">Sign Up</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from "@/router";
import app from "@/firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    methods: {
      login() {
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in
            // eslint-disable-next-line no-unused-vars
            const user = userCredential.user;
            console.log(this.email, this.password);
            router.push("/ride");
            // ...
          })
          .catch((error) => {
            this.error = error.message;
          });
      },
    },
  },
};
</script>

<style></style>
