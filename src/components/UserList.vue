<template>
  <!-- <img :src="imageUrl" :alt="fullName" /> -->
  <button
    v-if="chosen"
    class="remove team-buttons"
    @click="deleteMember()"
    type="button"
  >
    <span class="overlay" />
    <img :src="imageUrl" :alt="fullName" />
  </button>
  <button v-else class="add team-buttons" @click="addMember()" type="button">
    <span class="overlay" />
    <img :src="imageUrl" :alt="fullName" class="add-team" />
  </button>

  <p class="name">{{ fullName }}</p>
  <p class="job-title">{{ jobTitle }}</p>
  <div class="button-container">
    <!-- <router-link :to="`/bio/${id}`">
      <button type="button" class="read-bio">Bio & Details</button>
    </router-link> -->
    <button type="button" class="read-bio" @click="openBio()">
      Bio & Details
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

.team-buttons {
  width: 100%;
  background: grey;
  border: none;
  padding: 0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    font-size: 2.5em;
    font-weight: bold;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: rgba(0, 0, 0, 0.664);
    opacity: 0;
    transition: opacity 0.3s;
  }
  @media (hover: hover) {
    &:hover::after {
      opacity: 1;
    }
    &:hover.remove::after {
      content: "Remove";
    }
    &:hover.add::after {
      content: "Add to Team";
    }

    &:active::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: white;
    }
  }
  &.remove {
    background: rgb(0, 68, 255); //blue indicator for chosen
  }
  &.add {
    background: black; //indicator for not chosen
  }
}

.name {
  font-weight: bold;
}

.read-bio {
  background: white;
  font-style: italic;
  line-height: 0.7;
}
</style>
