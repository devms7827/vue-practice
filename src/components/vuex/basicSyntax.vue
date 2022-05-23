<template>
  <div class="p-3">
    <h4>Basic Vuex Syntax Practice</h4>

    <h5 class="mt-4">Hello {{ name }}</h5>

    <div class="mt-4">
      <div class="fw-bold">Note:</div>
      <ul>
        <li>
          The name "Manas Soni" is coming from vuex state variable -> "name"!
        </li>

        <li>
          As soon as this component is created, some code output will be
          generated in the console to play with the state variable -> "users"
          &amp; "count"!
        </li>

        <li>Check the console for outputs!</li>

        <li>
          Also in code, some other ways of doing the same operation is mention
          as comments!
        </li>

        <li>Also this component will leave the count value to 16 at last!</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicSyntax",
  created() {
    console.log("Component created!");

    // Printing the vuex store's state
    console.log("store = ", this.$store.state);

    // Accessing store's getters to get active users
    console.log(
      "getActiveUsers getter data: ",
      this.$store.getters.getActiveUsers
    );

    // Accessing a getter, which uses another getter from vuex state to return dependent getter output
    console.log(
      "getTotalActiveUsers getter data from another getter: ",
      this.$store.getters.getTotalActiveUsers
    );

    // Accessing a getter, by passing a user id as argument and getting back that user's data
    console.log(
      "getUserById getter data by id: ",
      this.$store.getters.getUserById("user3")
    );

    console.log("Calling mutations now:");

    // Accessing the store -> state -> count
    console.log("Current count value: ", this.$store.state.count);

    console.log(
      "Calling/Committing a mutation -> incrementCount to increase the count by: 1"
    );

    // Calling/Committing a mutation -> incrementCount to increase the count by: 1
    this.$store.commit("incrementCount");

    // Showing the updates store's state count value
    console.log("Updated count value: ", this.$store.state.count);

    console.log(
      "Calling/Committing a mutation -> incrementCountBy to increase the count by: 5 (A value passed as argument)"
    );

    // Calling/Committing a mutation -> incrementCountBy to increase the count by: 5 (A value passed as argument)
    this.$store.commit("incrementCountBy", { value: 5 });

    // Showing the updates store's state count value
    console.log("Updated count value: ", this.$store.state.count);

    // Another way of calling a mutation, in a object syntax with type
    console.log("Another way of calling a mutation -> incrementCountBy: 10");
    this.$store.commit({
      type: "incrementCountBy",
      value: 10,
    });

    // Showing the updates store's state count value
    console.log("Updated count value: ", this.$store.state.count);
  },
  computed: {
    name() {
      return this.$store.state.name;
    },
  },
  // One way: to write computed properties to access store data variable or (import mapState from "vuex")
  //   computed: mapState({
  //     name: (state) => state.name,
  //     someName: "name",
  //   }),
  // Second way, to write computed properties as array syntax!
  //   computed: mapState(["name"]),
};
</script>
