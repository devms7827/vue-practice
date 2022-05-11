import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

export async function getUsers() {
  try {
    const response = await axios.get(apiUrl);

    return response.data;
  } catch (error) {
    console.error(error);
    return []; // returning empty array for users data
  }
}

export async function getUserDataById(userId) {
  try {
    const response = await axios.get(`${apiUrl}/${userId}`);

    return response.data;
  } catch (error) {
    console.error(error);
    return {}; // returning empty object for user data
  }
}
