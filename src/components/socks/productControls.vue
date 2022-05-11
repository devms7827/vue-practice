<template>
  <div>
    <h3>
      Controls
      <div class="fs-6">(Active for {{ selectedVariant.name }})</div>
    </h3>

    <div class="fs-5">
      <div class="mt-4">
        <span class="me-3">
          Inventory: <strong>{{ selectedVariant.inventory }}</strong>
        </span>

        <button class="btn btn-success me-2 me-3" @click="increaseInventory">
          <i class="fa-solid fa-circle-plus"></i>
        </button>

        <button class="btn btn-danger" @click="decreaseInventory">
          <i class="fa-solid fa-circle-minus"></i>
        </button>
      </div>

      <div class="mt-4">
        <span class="me-3">On Sale: </span>

        <button
          class="btn btn-primary me-2 me-3"
          @click="toggleOnSale"
          :disabled="selectedVariant.isOnSale"
        >
          Yes
        </button>

        <button
          class="btn btn-secondary"
          @click="toggleOnSale"
          :disabled="!selectedVariant.isOnSale"
        >
          No
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductControls",
  props: {
    selectedVariant: { type: Object, required: true },
  },
  methods: {
    increaseInventory() {
      this.$emit("increase-inventory");
    },
    decreaseInventory() {
      this.$emit("decrease-inventory");
    },
    toggleOnSale() {
      this.$emit("toggle-on-sale");
    },
  },
};
</script>
