<template>
  <NavBar />
  <AppBody />
  <FooterBar />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import AppBody from "@/components/AppBody.vue";
import FooterBar from "@/components/FooterBar.vue";

import store from "@/store/index";

export default {
  name: "App",
  store, // Adding the vuex store in the main app, now store is accessible to all its child components
  components: {
    NavBar,
    AppBody,
    FooterBar,
  },
};
</script>
