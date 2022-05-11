<template>
  <div class="p-3">
    <h4 class="mb-3">List Rendering</h4>

    <p>
      This component will show the basic list rendering technique
      <strong>(with v-bind:for/v-for, v-bind:key)</strong> directive! Als
      created a separate <strong>{{`<UserDetails />`}}</strong> component to
      display all the user details!
    </p>

    <div class="container mt-5 mb-5">
      <div class="row">
        <div v-for="user in users" :key="user.userId" class="col-3">
          <UserDetails
            :userId="user.userId"
            :name="user.name"
            :age="user.age"
            :gender="user.gender"
            :address="user.address"
            :imageUrl="user.imageUrl"
            :isActive="user.isActive"
          />
        </div>
      </div>
    </div>

    <p>Current state data is:</p>
    <pre>{{ title }} {{ users }}</pre>
  </div>
</template>

<script>
import UserDetails from "@/components/UserDetails.vue";

export default {
  name: "ListRendering",
  components: {
    UserDetails,
  },

  data: function () {
    return {
      title: "Showing state data in pre tag:",
      users: [
        {
          userId: "user1",
          name: "Kapil Dev",
          age: 43,
          gender: "male",
          address: "Some sample address for this user will come here!",
          imageUrl:
            "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
          isActive: true,
        },
        {
          userId: "user2",
          name: "Akshay Kumar",
          age: 52,
          gender: "male",
          address: "Some sample address for this user will come here!",
          imageUrl:
            "https://cdn1.iconfinder.com/data/icons/user-pictures/100/boy-512.png",
          isActive: false,
        },
        {
          userId: "user3",
          name: "Lata Mangeshkar",
          age: 87,
          gender: "female",
          address: "Some sample address for this user will come here!",
          imageUrl:
            "https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png",
          isActive: true,
        },
        {
          userId: "user4",
          name: "Manas Soni",
          age: 25,
          gender: "male",
          address: "Some sample address for this user will come here!",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLtdifYeywRo54PEZid8SrOliHnblV4GNEQ&usqp=CAU",
          isActive: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
pre {
  font-size: 0.6rem;
}
</style>
