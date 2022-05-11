<template>
  <div class="p-3">
    <h4 class="mb-3">Event Handling with Parameter</h4>

    <p>
      This component will show event handling by passing a different value as a
      parameter to a single calling function as greeting!
    </p>

    <div class="mb-2">
      <h5 class="mb-4">
        Hello Manas<span class="text-capitalize">{{
          message ? `, ${message}` : ""
        }}</span>
      </h5>

      <button class="btn btn-success me-3" @click="greeting('good morning')">
        Good Morning
      </button>

      <button class="btn btn-primary me-3" @click="greeting('good afternoon')">
        Good Afternoon
      </button>

      <button class="btn btn-warning me-3" @click="greeting('good evening')">
        Good Evening
      </button>

      <button class="btn btn-dark me-3" @click="greeting('good night')">
        Good Night
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventHandlingWithParameter",

  data() {
    return {
      message: "",
    };
  },

  methods: {
    greeting(value) {
      this.message = value;
    },
  },
};
</script>
