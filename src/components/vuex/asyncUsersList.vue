<template>
  <div class="p-3">
    <h4 class="mb-3">Asynchronous Users List (Fetching Data from Server)</h4>

    <p>
      This component will fetch users data only once from
      <a href="https://jsonplaceholder.typicode.com/" target="_blank">
        JSON Placeholder - Free Fake REST API</a
      >
      using
      <a href="https://axios-http.com/" target="_blank">Axios - Library</a>,
      when the component loads initially and will be stored in the vuex store
      and shown in the table!
      <br />
      <span class="text-secondary">
        <strong>NOTE: </strong>
        While loading data, the component will show loading symbol to indicate
        that data is being fetched from the server!</span
      >
    </p>

    <div>
      <button class="btn btn-primary me-4" @click="toggleLoading">
        Toggle Loading!
      </button>

      <button class="btn btn-warning me-4" @click="showNoData">
        Show No Data!
      </button>

      <button class="btn btn-secondary me-4" @click="resetList">
        Reset List!
      </button>
    </div>

    <div class="mb-2 mt-4">
      <table class="table table-striped table-bordered table-hover text-center">
        <thead class="fw-bold">
          <tr>
            <td>S.No</td>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>Address</td>
            <td>Phone</td>
            <td>Website</td>
            <td>Company</td>
            <td>Link</td>
          </tr>
        </thead>

        <!-- Only show this when loading usersData -->
        <tbody v-if="isLoadingUsersData">
          <tr>
            <td colspan="9" class="p-5">
              <LoadingData />
            </td>
          </tr>
        </tbody>

        <!-- Only show this table body, when not loading and usersData is not available! -->
        <tbody v-if="!isLoadingUsersData && usersData.length < 1">
          <tr>
            <td colspan="9" class="p-5">
              <div class="alert alert-secondary mt-3" role="alert">
                <div><i class="fa-solid fa-triangle-exclamation fs-1"></i></div>
                <div class="fs-5 mt-3">No user's data was found!</div>
              </div>
            </td>
          </tr>
        </tbody>

        <!-- Only show this table body, when not loading and users data is available -->
        <tbody v-if="!isLoadingUsersData && usersData.length > 0">
          <tr v-for="user in usersData" :key="`user-${user.id}`">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td class="text-lowercase">
              <a :href="`mailto:${user.email}`">{{ user.email }}</a>
            </td>
            <td>
              <address>
                <span>{{ user.address.street }}, {{ user.address.city }}</span>
              </address>
            </td>
            <td>
              <a :href="`tel:${user.phone}`">{{ user.phone }}</a>
            </td>
            <td>
              <a :href="`${user.website}`" target="_blank">{{
                user.website
              }}</a>
            </td>
            <td>{{ user.company.name }}</td>
            <td>
              <router-link :to="`/users/${user.id}`">View</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import LoadingData from "@/components/LoadingData.vue";

export default {
  name: "AsyncUsersList",
  components: {
    LoadingData,
  },
  data() {
    return {
      isLoadingUsersData: false,
    };
  },
  computed: {
    ...mapState(["usersData"]),
  },
  created() {
    if (this.$store.state.usersData.length < 1) this.getUsersData();
  },
  methods: {
    async getUsersData() {
      this.isLoadingUsersData = true;
      await this.$store.dispatch("getUsersData");
      this.isLoadingUsersData = false;
    },
    toggleLoading() {
      this.isLoadingUsersData = !this.isLoadingUsersData;
    },
    showNoData() {
      this.isLoadingUsersData = false;
      this.$store.commit("deleteAllUsersData");
    },
    resetList() {
      this.getUsersData();
    },
  },
};
</script>
