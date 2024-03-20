<template>
  <div className="w-full h-full">
    <img
      className="hidden sm:block absolute w-full h-full object-cover"
      src="https://safelyinsured.co.uk/Content/Images/pages/Taxi-Hire-Insurance-website-image-Safely-Insured.jpg"
      alt=""
    />
    <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
    <div className="fixed w-full px-4 py-24 z-50 ">
      <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 text-white">
        <div className="max-w-[320px] mx-auto py-16">
          <h1 className="text-3xl font-bold ">Sign Up</h1>
          <form @submit.prevent="signup" className="w-full flex flex-col py-4">
            <input
              id="email"
              name="email"
              type="email"
              required
              autofocus
              v-model="email"
              className="p-3
            my-2 bg-gray-700 rounded "
              text="email"
              placeholder="E-mail"
              autoComplete="email"
            />
            <input
              className="p-3 my-2 bg-gray-700 rounded
            "
              type="password"
              id="password"
              name="password"
              required
              autofocus
              v-model="password"
              placeholder="Password"
              autoComplete="current-password"
            />
            <button
              className="bg-green-600 py-3 my-6 rounded font-bold"
              type="submit"
            >
              Sign Up
            </button>
            <div
              className="flex justify-between items-center text-sm text-gray-600"
            >
              <p>
                <input className="mr-2" type="checkbox" />
                Remember me
              </p>
              <p>Need help ?</p>
            </div>
            <p className="py-8">
              <span className="text-gray-600">
                Already subscribe to netflix?
              </span>
              <router-link to="/">login</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "@/firebase";
import router from "@/router";
export default {
  data() {
    return {
      email: "",
      password: "",
      errorCode: null,
      errorMessage: null,
    };
  },
  methods: {
    signup() {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          // eslint-disable-next-line no-unused-vars
          const user = userCredential.user;
          console.log("signup");
          router.push("/ride");
          // ...
        })
        .catch((error) => {
          this.errorCode = error.code;
          this.errorMessage = error.message;
          // ..
        });
    },
  },
};
</script>
