<template>
  <div class="card custom-card p-5">
    <div class="card-body">
      <h2 class="mb-5">User Details:</h2>

      <div v-if="isLoadingData">
        <LoadingData />
      </div>

      <div v-if="!isLoadingData && !user?.id">
        <div class="alert alert-secondary mt-3" role="alert">
          <div><i class="fa-solid fa-triangle-exclamation fs-1"></i></div>
          <div class="fs-5 mt-3">No user's data was found!</div>
        </div>
      </div>

      <div v-if="!isLoadingData && user?.id">
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Username:</strong> {{ user.username }}</p>
        <p>
          <strong>Email: </strong>
          <a class="text-lowercase" :href="`mailto:${user.email}`">{{
            user.email
          }}</a>
        </p>
        <p>
          <strong>Address: </strong>
          <span>{{ user.address.street }}, {{ user.address.city }}</span>
        </p>
        <p>
          <strong>Phone: </strong>
          <a :href="`tel:${user.phone}`">{{ user.phone }}</a>
        </p>
        <p>
          <strong>Website: </strong>
          <a :href="`${user.website}`" target="_blank">{{ user.website }}</a>
        </p>
        <p>
          <strong>Company: </strong>
          {{ user.company.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserDataById } from "@/services/getUsers";
import LoadingData from "@/components/LoadingData.vue";

export default {
  name: "SingleUserDetails",

  components: {
    LoadingData,
  },

  data() {
    return {
      user: {},
      isLoadingData: false,
    };
  },

  mounted() {
    const { userId } = this.$route.params;
    this.getUserDetailsById(userId);
  },

  methods: {
    async getUserDetailsById(id) {
      this.isLoadingData = true;
      this.user = await getUserDataById(id);
      this.isLoadingData = false;
    },
  },
};
</script>

<style>
.custom-card {
  width: 30%;
  left: 35%;
}
</style>
