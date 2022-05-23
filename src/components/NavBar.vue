<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand me-5" to="/">
          <img
            src="../assets/logo.png"
            alt="Vue Icon"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          Vue Js Practice
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item custom-nav-item">
              <router-link class="nav-link" aria-current="page" to="/">
                Home
              </router-link>
            </li>

            <li class="nav-item custom-nav-item">
              <router-link class="nav-link" to="/basic">Basic</router-link>
            </li>

            <li class="nav-item custom-nav-item">
              <router-link class="nav-link" to="/socks-cart"
                >Socks Cart</router-link
              >
            </li>

            <li class="nav-item custom-nav-item">
              <router-link class="nav-link" to="/task-tracker"
                >Task Tracker</router-link
              >
            </li>

            <li class="nav-item custom-nav-item">
              <router-link class="nav-link" to="/basic-vuex"
                >Vuex (Basic)</router-link
              >
            </li>

            <li class="nav-item custom-nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.custom-nav-item {
  margin: 0 0.8rem;
}
</style>
