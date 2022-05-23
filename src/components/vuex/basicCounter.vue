<template>
  <div class="p-3">
    <h4>Basic Counter</h4>
    <p class="mb-4">
      Do some actions and navigate to some other pages, and come back to see the
      value remains the same as it is stored in the vuex store!
    </p>

    <div class="shadow-lg w-50 p-4">
      <div class="fw-bold fs-4">
        {{ number }}
      </div>

      <div class="mt-3">
        <button class="btn btn-success me-3" @click="incrementNumber">
          Increment
        </button>

        <button class="btn btn-danger me-3" @click="decrementNumber">
          Decrement
        </button>

        <button
          class="btn btn-primary me-3"
          @click="incrementNumberBy({ value: 10 })"
        >
          Increment by 10
        </button>

        <button
          class="btn btn-secondary me-3"
          @click="decrementNumberBy({ value: 5 })"
        >
          Decrement by 5
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "BasicCounter",
  computed: mapState({
    // One way is by using arrow functions:
    number: (state) => state.number,

    // Can also use another name/alias for the 'number' variable
    numberAlias: "number",

    // to access local state with `this`, a normal function must be used
    // numberPlusLocalState (state) {
    //   return state.number + this.localNumber
    // }
  }),

  // We can also pass a string array to mapState when the name of a mapped computed property is the same as a state sub tree name
  // computed: mapState([
  //   // map this.number to store.state.number
  //   "number",
  // ]),

  methods: mapMutations([
    "incrementNumber",
    "decrementNumber",
    "incrementNumberBy",
    "decrementNumberBy",
  ]),
};
</script>
