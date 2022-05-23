import { createStore } from "vuex";
import { getUsers } from "@/services/getUsers";

export default createStore({
  state: {
    name: "Manas Soni",
    users: [
      { id: "user1", name: "Kunal Kapoor", gender: "male", active: true },
      { id: "user2", name: "Amit Shah", gender: "male", active: false },
      { id: "user3", name: "Shakshi Kumar", gender: "female", active: true },
    ],
    count: 0,
    number: 0,
    usersData: [],
  },
  getters: {
    // Normal getter
    getActiveUsers: (state) => {
      return state.users.filter((user) => user.active);
    },
    // Dependent getter
    getTotalActiveUsers: (state, getters) => {
      return getters.getActiveUsers.length;
    },
    // Arguments supported getter
    getUserById: (state) => (userId) => {
      return state.users.find((user) => user.id === userId);
    },
  },
  mutations: {
    incrementCount(state) {
      state.count++;
    },
    incrementCountBy(state, payload) {
      state.count += payload.value;
    },
    incrementNumber(state) {
      state.number++;
    },
    incrementNumberBy(state, payload) {
      state.number += payload.value;
    },
    decrementNumber(state) {
      state.number--;
    },
    decrementNumberBy(state, payload) {
      state.number -= payload.value;
    },
    updateUsersData(state, payload) {
      state.usersData = payload.usersData;
    },
    deleteAllUsersData(state) {
      state.usersData.length = 0;
    },
  },
  actions: {
    // Actions receives context as their first parameter
    async getUsersData({ commit }) {
      let usersData = await getUsers();

      commit("updateUsersData", { usersData });
    },
  },
  modules: {},
});
