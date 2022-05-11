<template>
  <div>
    <!-- Product Title -->
    <h3 class="mb-5 text-center">
      <u>{{ getPageTitle }} - Product Details</u>
    </h3>

    <!-- Product Name and On-sale information -->
    <div class="mb-3">
      Name: {{ selectedVariant.name }}
      <strong class="ms-2 text-primary" v-show="selectedVariant.isOnSale">
        <i class="fa-solid fa-rocket"></i> On Sale
      </strong>
    </div>

    <!-- Product In-stock information -->
    <div class="mb-2">
      <p v-if="selectedVariant.inventory >= 5">
        <span class="stock-icon">
          <i class="fa-solid fa-face-smile text-success fs-3"></i
        ></span>
        <strong>In Stock</strong>
      </p>

      <p
        v-else-if="
          selectedVariant.inventory < 5 && selectedVariant.inventory > 0
        "
      >
        <span class="stock-icon">
          <i class="fa-solid fa-face-surprise text-primary fs-3"></i
        ></span>
        <strong>Almost Sold Out, Hurry Up</strong>
      </p>

      <p v-else>
        <span class="stock-icon">
          <i class="fa-solid fa-face-frown text-danger fs-3"></i
        ></span>
        <strong>Out of Stock</strong>
      </p>
    </div>

    <!-- Product Features information -->
    <div class="mb-2">
      Features:
      <ul>
        <li
          v-for="(feature, index) in selectedVariant.features"
          :key="`feature-${index}`"
        >
          {{ feature }}
        </li>
      </ul>
    </div>

    <!-- Product Colors information -->
    <div class="mb-2">
      Colors:
      <span class="text-secondary">(Hover over colors to select them)</span>
      <ul type="none">
        <li v-for="variant in variants" :key="variant.id">
          <div
            class="color-circle"
            @mouseover="updateCurrentVariant(variant.id)"
            :style="{ backgroundColor: variant.color }"
          ></div>
        </li>
      </ul>
    </div>

    <!-- Add to cart -->
    <button
      class="btn btn-primary p-3 m-3"
      @click="addCartItem"
      :disabled="!selectedVariant.inventory"
      :class="{ disabledButton: !selectedVariant.inventory }"
    >
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  props: {
    getPageTitle: { type: String, required: true },
    selectedVariant: { type: Object, required: true },
    variants: { type: Array, required: true },
  },
  methods: {
    updateCurrentVariant(variantId) {
      this.$emit("update-current-variant", variantId);
    },
    addCartItem() {
      this.$emit("add-cart-item");
    },
  },
};
</script>

<style scoped>
.stock-icon {
  position: relative;
  top: 4px;
  margin-right: 0.4rem;
}

.color-circle {
  width: 50px;
  height: 50px;
  margin-top: 8px;
  border: 2px solid #d8d8d8;
  border-radius: 50%;
}

.disabledButton {
  background-color: #d8d8d8;
  cursor: no-drop;
}
</style>
