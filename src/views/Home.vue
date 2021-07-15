<template>
  <main class="container">
    <AddProjectSection />
  </main>
  <!-- <SigniflyEmployeeSection /> -->
</template>

<script>
// @ is an alias to /src
// import SigniflyEmployeeSection from "@/components/SigniflyEmployeeSection.vue";
import AddProjectSection from "@/components/AddProjectSection.vue";
// import ProjectList from "@/components/ProjectList.vue";

export default {
  name: "Home",
  components: {
    // SigniflyEmployeeSection,
    AddProjectSection,

    // ProjectList,
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
