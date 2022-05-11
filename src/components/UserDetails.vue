<template>
  <div class="card" :key="userId">
    <img
      :src="imageUrl"
      class="card-img-top bg-light"
      :alt="`${name}'s image`"
    />

    <div class="card-body">
      <h5 class="card-title mb-2">{{ name }}</h5>

      <div class="card-text">
        <div>Age: {{ age }}</div>
        <div>Gender: {{ gender }}</div>
        <div>Address: {{ address }}</div>
      </div>

      <button class="btn mt-3" :class="isActive ? 'btn-success' : 'btn-danger'">
        <span v-if="isActive"
          ><i class="fa-solid fa-circle-check me-2"></i>Active</span
        >
        <span v-if="!isActive"
          ><i class="fa-solid fa-circle-xmark me-2"></i>Not Active</span
        >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDetails",
  props: {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    imageUrl: { type: String, required: true },
    isActive: { type: Boolean, required: true },
  },
};
</script>
