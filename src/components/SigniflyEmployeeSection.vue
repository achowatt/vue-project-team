<template>
  <section class="user-list-section">
    <h1>Signifly Employees</h1>
    <div class="team-images">
      <UserList />
      <UserCreate />
    </div>
  </section>
</template>

<script>
import UserCreate from "./UserCreate.vue";
import UserList from "./UserList.vue";
// import reactive from "vue";

export default {
  name: "SigniflyEmployeeSection",
  components: { UserCreate, UserList },
};
</script>

<style lang="scss" scoped>
.team-images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 1rem;
}
</style>
