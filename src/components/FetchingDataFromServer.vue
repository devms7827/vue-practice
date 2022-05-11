<template>
  <div class="p-3">
    <h4 class="mb-3">Fetching Data from Server</h4>

    <p>
      This component will fetch some users data from
      <a href="https://jsonplaceholder.typicode.com/" target="_blank">
        JSON Placeholder - Free Fake REST API</a
      >
      using
      <a href="https://axios-http.com/" target="_blank">Axios - Library</a> and
      show the data in a table!
      <br />
      <span class="text-secondary">
        <strong>NOTE: </strong>
        While loading data, the component will show loading symbol to indicate
        that data is being fetched from the server!</span
      >
    </p>

    <button class="btn btn-primary me-4" @click="showLoading">
      Show Loading!
    </button>
    <button class="btn btn-warning me-4" @click="showNoData">
      Show No Data!
    </button>
    <button class="btn btn-secondary me-4" @click="resetList">
      Reset List!
    </button>

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

        <!-- Only show this when loading data -->
        <tbody v-if="isLoadingData">
          <tr>
            <td colspan="9" class="p-5">
              <LoadingData />
            </td>
          </tr>
        </tbody>

        <!-- Only show this table body, when not loading and users data is not available! -->
        <tbody v-if="!isLoadingData && users.length < 1">
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
        <tbody v-if="!isLoadingData && users.length > 0">
          <tr v-for="user in users" :key="`user-${user.id}`">
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
import { getUsers } from "@/services/getUsers";
import LoadingData from "@/components/LoadingData.vue";

export default {
  name: "FetchingDataFromServer",

  components: {
    LoadingData,
  },

  data() {
    return {
      users: [],
      isLoadingData: false,
    };
  },

  mounted() {
    this.getUsersData();
  },

  methods: {
    async getUsersData() {
      this.isLoadingData = true;
      this.users = await getUsers();
      this.isLoadingData = false;
    },
    showLoading() {
      this.isLoadingData = true;
    },
    showNoData() {
      this.isLoadingData = false;
      this.users = [];
    },
    resetList() {
      this.getUsersData();
    },
  },
};
</script>
