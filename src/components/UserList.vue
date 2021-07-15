<template>
  <img :src="imageUrl" :alt="fullName" />
  <p class="name">{{ fullName }}</p>
  <p class="job-title">{{ jobTitle }}</p>
  <div class="button-container">
    <router-link :to="`/bio/${id}`">
      <button type="button" class="read-bio">Bio & Details</button>
    </router-link>
    <button
      v-if="chosen"
      class="delete-team"
      @click="deleteMember(id)"
      type="button"
    >
      Remove
    </button>
    <button v-else class="add-team" @click="addMember(id)" type="button">
      Add to Team
    </button>
  </div>
</template>

<script>
import { useLoadUsers } from "@/firebase";
import { addTeamMember, useTeamMembers, deleteTeamMember } from "@/addteam";
import { ref } from "vue";
export default {
  name: "UserList",
  props: ["fullName", "jobTitle", "id", "imageUrl"],
  setup() {
    const users = useLoadUsers();
    const chosen = ref(false);
    const existingTeam = useTeamMembers();

    function addMember(id) {
      if (existingTeam.filter((user) => user.id === id).length > 0) {
        console.log("Already exists");
      } else {
        const user = users.value.filter((user) => user.id === id);
        addTeamMember(...user);
        console.log(existingTeam);
        chosen.value = true;
      }
    }

    function deleteMember(id) {
      deleteTeamMember(id);
      console.log(existingTeam);
      chosen.value = false;
    }

    return { users, addMember, deleteMember, chosen };
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: auto;
}
button {
  width: 50%;
  background: #eeeeee;
  border: solid 2px #eeeeee;
}

.name {
  font-weight: bold;
}

.read-bio {
  background: white;
  border: solid 2px #eeeeee;
}
</style>
