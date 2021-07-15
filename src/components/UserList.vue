<template>
  <img :src="imageUrl" :alt="fullName" />
  <p class="name">{{ fullName }}</p>
  <p class="job-title">{{ jobTitle }}</p>
  <div class="button-container">
    <button class="read-bio" type="button">Read Bio</button>
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

    function addMember(id) {
      const existingTeam = useTeamMembers();
      if (existingTeam.filter((user) => user.id === id).length > 0) {
        console.log("Already exists");
      } else {
        const user = users.value.filter((user) => user.id === id);
        addTeamMember(...user);
        chosen.value = true;
      }
    }

    function deleteMember(id) {
      deleteTeamMember(id);
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
  background: #c9e3fc;
  border: solid 2px #c9e3fc;
}

.name {
  font-weight: bold;
}

.read-bio {
  background: white;
  border: solid 2px #c9e3fc;
}
</style>
