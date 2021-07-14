<template>
  <div v-for="{ id, imageUrl, fullName, jobTitle } in users" :key="id" :id="id">
    <img :src="imageUrl" :alt="fullName" />
    <p class="name">{{ fullName }}</p>
    <p class="job-title">{{ jobTitle }}</p>
    <p class="bio">bio</p>
    <router-link :to="`/editEmployee/${id}`">
      <button>Edit</button>
    </router-link>
    <button @click="deleteUser(id)">Delete</button>
  </div>
</template>

<script>
import { useLoadUsers, deleteUser } from "@/firebase";
export default {
  setup() {
    const users = useLoadUsers();
    return { users, deleteUser };
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: auto;
}
</style>
