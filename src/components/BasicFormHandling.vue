<template>
  <div class="p-3">
    <h4 class="mb-3">Basic Form Handling</h4>

    <p>
      This component will show the basic form handling concept in vue.js using
      <strong>v-model</strong>!
    </p>

    <div class="card w-25 position-absolute" style="left: 50%">
      <div class="card-header fw-bold">
        See form elements 2 way binding with state date here:
      </div>

      <div class="card-body">
        <pre>{{ this.user }}</pre>
      </div>
    </div>

    <div class="mb-2">
      <div class="card w-25">
        <div class="card-header p-3 bg-success text-light fw-bold fs-5">
          Registration Form:
        </div>

        <div class="card-body">
          <form @submit.prevent="submitUserData">
            <div class="mb-3">
              <label for="name" class="mb-1">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter full name"
                class="form-control"
                v-model="user.name"
              />
            </div>

            <div class="mb-3">
              <label for="age" class="mb-1">Age:</label>
              <input
                type="number"
                name="age"
                id="age"
                placeholder="Enter age"
                min="0"
                max="100"
                class="form-control"
                v-model="user.age"
              />
            </div>

            <div class="mb-4 mt-4">
              <label for="male" class="mb-1 me-2">Gender:</label>

              <input
                type="radio"
                name="gender"
                id="male"
                class="mx-1"
                v-model="user.gender"
                value="male"
              />
              <label for="male" class="me-3">Male</label>

              <input
                type="radio"
                name="gender"
                id="female"
                class="mx-1"
                v-model="user.gender"
                value="female"
              />
              <label for="female">Female</label>
            </div>

            <div class="mb-3">
              <label for="email" class="mb-1">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                class="form-control"
                v-model="user.email"
              />
            </div>

            <div class="mb-3">
              <label for="password" class="mb-1">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                class="form-control"
                v-model="user.password"
              />
            </div>

            <div class="mb-3 mt-4">
              <input
                type="submit"
                value="Submit"
                class="btn btn-primary me-4"
              />

              <input type="reset" value="Reset" class="btn btn-secondary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicFormHandling",

  data() {
    return {
      user: {
        name: "",
        age: "",
        gender: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    submitUserData() {
      console.log("user data = ", this.user);
      alert("Data is submitted!");
    },
  },
};
</script>
