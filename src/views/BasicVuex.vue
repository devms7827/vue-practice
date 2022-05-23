<template>
  <div class="basic-vuex">
    <ul class="list-group">
      <li class="list-group-item mb-5"><AsyncUsersList /></li>
      <li class="list-group-item mb-5"><BasicCounter /></li>
      <li class="list-group-item mb-5"><BasicSyntax /></li>
      <li class="list-group-item mb-5"><VuexArchitecture /></li>
    </ul>
  </div>
</template>

<script>
import BasicSyntax from "@/components/vuex/basicSyntax.vue";
import BasicCounter from "@/components/vuex/basicCounter.vue";
import AsyncUsersList from "@/components/vuex/asyncUsersList.vue";
import VuexArchitecture from "@/components/vuex/vuexArchitecture.vue";

export default {
  name: "BasicVuex",
  components: { VuexArchitecture, BasicSyntax, BasicCounter, AsyncUsersList },
};
</script>

<style scoped>
.basic-vuex {
  text-align: left;
}
</style>
