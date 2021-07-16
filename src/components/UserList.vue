<template>
  <img :src="imageUrl" :alt="fullName" />
  <p class="name">{{ fullName }}</p>
  <p class="job-title">{{ jobTitle }}</p>
  <div class="button-container">
    <!-- <router-link :to="`/bio/${id}`">
      <button type="button" class="read-bio">Bio & Details</button>
    </router-link> -->
    <button type="button" class="read-bio" @click="openBio()">
      Bio & Details
    </button>
    <button
      v-if="chosen"
      class="delete-team"
      @click="deleteMember()"
      type="button"
    >
      Remove
    </button>
    <button v-else class="add-team" @click="addMember()" type="button">
      Add to Team
    </button>
  </div>
</template>

<script>
export default {
  name: "UserList",
  props: ["fullName", "jobTitle", "id", "imageUrl", "index"],
  emits: ["add", "remove", "openBio"],
  data() {
    return {
      chosen: false,
    };
  },
  methods: {
    addMember() {
      this.$emit("add", this.id);
      this.chosen = true;
    },
    deleteMember() {
      this.$emit("remove", this.id);
      this.chosen = false;
    },
    openBio() {
      this.$emit("openBio", this.id);
    },
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
