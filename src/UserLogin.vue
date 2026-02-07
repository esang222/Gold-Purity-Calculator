<template>
  <div class="page-wrapper d-flex align-items-center justify-content-center">
    <div class="auth-card d-flex">

      <!-- LEFT PANEL -->
      <div class="auth-left d-flex align-items-center justify-content-center">
        <img :src="goldImage" alt="Login" class="img-fluid" />
      </div>

      <!-- RIGHT PANEL -->
      <div class="auth-right">
        <h4 class="text-center mb-4">
          LOGIN TO CALCULATE <br />YOUR GOLD PRICES
        </h4>

        <form @submit.prevent="login">
          <div class="form-group mt-2">
            <label>Email address</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="fas fa-envelope"></i>
              </span>
              <input type="text" class="form-control" placeholder="Enter email" v-model="email" />
            </div>
          </div>

          <div class="form-group mt-2">
            <label>Password</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="fas fa-lock"></i>
              </span>
              <input type="password" class="form-control" placeholder="Enter password" v-model="password" />
            </div>
          </div>

          <p class="text-center mt-2 fs-6">
            Don't have an account?
            <a href="#" @click.prevent="goToUserRegister">Register</a>
          </p>

          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-submit mt-2 px-5 fs-6">
              Login
            </button>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
import goldImage from "@/assets/gold-img.avif";

export default {
  name: "UserLogin",
  data() {
    return {
      goldImage,
      email: "",
      password: "",
    };
  },
  methods: {
    goToUserRegister() {
      // Redirect to the register page
      this.$router.push({ name: "UserRegister" });
    },
    login() {
      // Pure frontend redirect without backend
      this.$router.push({ name: "Calculator" });
    },
  },
};
</script>

