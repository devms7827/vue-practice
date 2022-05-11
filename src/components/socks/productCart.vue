<template>
  <div class="cart-parent">
    <div class="cart-box fw-bold">
      Cart ({{ cart }})

      <button
        class="btn btn-danger ms-3 cart-button"
        @click="removeCartItem"
        v-if="cart > 0"
      >
        <i class="fa-solid fa-circle-minus"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCart",
  props: {
    cart: {
      type: Number,
      required: true,
    },
  },
  methods: {
    removeCartItem() {
      this.$emit("remove-cart-item");
    },
  },
};
</script>

<style>
.cart-parent {
  position: absolute;
  right: 0;
  float: right;
  margin: 2rem;
  top: 0;
}

.cart-box {
  border: 1px solid #d8d8d8;
  padding: 10px 30px;
  background-color: lightgrey;
  -webkit-box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.57);
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.57);
}

.cart-button {
  border-radius: 50%;
}
</style>
