<template>
  <div :id="id">
    <img :src="imageUrl" :alt="fullName" />
    <h3 class="name">{{ fullName }}</h3>
    <p class="job-title">{{ jobTitle }}</p>
    <p class="bio">{{ bio }}</p>
  </div>
</template>

<script>
export default {
  props: ["id", "imageUrl", "fullName", "jobTitle", "bio"],
};
</script>

<style lang="scss" scoped>
img:not(last-child) {
  margin-right: 1rem;
}
</style>
