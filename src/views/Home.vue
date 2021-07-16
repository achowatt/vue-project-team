<template>
  <main class="container">
    <AddProjectSection />
  </main>
</template>

<script>
import AddProjectSection from "@/components/AddProjectSection.vue";

export default {
  name: "Home",
  components: {
    AddProjectSection,
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: auto;
}

.container {
  max-width: 1200px;
  margin: 9rem auto 0 auto;
  padding: 0 64px 64px;

  @media screen and (max-width: 700px) {
    padding: 1rem;
  }
}
</style>
