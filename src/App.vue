<template>
  <NavBar />
  <AppBody />
  <FooterBar />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import AppBody from "@/components/AppBody.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    AppBody,
    FooterBar,
  },
};
</script>
