<template>
  <div class="p-3">
    <h4 class="mb-3">Conditional Rendering</h4>

    <p>
      This component will show the basic conditional rendering concept in vue.js
      using <strong>v-if, v-else, v-else-if</strong>!
    </p>

    <div class="mb-2">
      <div class="alert alert-success" role="alert" v-if="isLoggedIn">
        <h4 class="alert-heading">Logged In Successfully!</h4>
        <hr />
        <h5>Welcome User! Have a nice day!</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          optio, nisi molestias, ea doloribus a laboriosam aperiam asperiores
          sit velit accusamus reprehenderit eaque enim dicta aspernatur! Dicta
          nesciunt ratione laudantium!
        </p>
      </div>

      <div class="alert alert-danger" role="alert" v-if="!isLoggedIn">
        <h4 class="alert-heading">Logged Out Successfully!</h4>
        <hr />
        <h5>Good Bye User! See you later!</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          optio, nisi molestias, ea doloribus a laboriosam aperiam asperiores
          sit velit accusamus reprehenderit eaque enim dicta aspernatur! Dicta
          nesciunt ratione laudantium!
        </p>
      </div>

      <button
        class="btn btn-primary me-3 mt-4"
        @click="isLoggedIn = true"
        v-if="!isLoggedIn"
      >
        Login
      </button>

      <button
        class="btn btn-danger me-3 mt-4"
        @click="isLoggedIn = false"
        v-else
      >
        Log Out
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConditionalRendering",

  data() {
    return {
      isLoggedIn: false,
    };
  },
};
</script>
