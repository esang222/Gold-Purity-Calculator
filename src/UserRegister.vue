<template>
  <div class="page-wrapper d-flex align-items-center justify-content-center">
    <div class="auth-card d-flex">

      <!-- LEFT PANEL -->
      <div
        class="auth-left"
      ></div>

      <!-- RIGHT PANEL -->
      <div class="auth-right">
        <h4 class="text-center mb-4">
          REGISTER TO CALCULATE <br />
          YOUR GOLD PRICES
        </h4>

        <form @submit.prevent="goToUserLogin">
          <div class="form-group">
            <label>Full Name:</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="fas fa-user"></i>
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Enter full name"
              />
            </div>
          </div>

          <div class="form-group mt-2">
            <label>Email address:</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                class="form-control"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div class="form-group mt-2">
            <label>Password:</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="fas fa-lock"></i>
              </span>
              <input
                type="password"
                class="form-control"
                placeholder="Enter password"
              />
            </div>
          </div>

          <div class="form-group mt-2">
            <label>Confirm Password:</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="fas fa-lock"></i>
              </span>
              <input
                type="password"
                class="form-control"
                placeholder="Re-enter password"
              />
            </div>
          </div>

          <p class="text-center mt-2 fs-6">
            Already have an account?
            <a href="#" @click.prevent="goToUserLogin">Login</a>
          </p>

          <div class="d-flex justify-content-center">
            <button class="btn btn-submit mt-2 px-5 fs-6">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import goldImage from "@/assets/gold-img.avif"; 

export default {
  name: "UserRegister",
   data() {
    return {
      goldImage,
    };
  },
  methods: {
    goToUserLogin() {
      this.$router.push({ name: "UserLogin" });
    },
  },
};
</script>
