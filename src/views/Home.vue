<template>
  <router-link to="/project">Project</router-link>
  <section class="project-list-section">
    <h1>Projects</h1>
  </section>

  <SigniflyEmployeeSection />
</template>

<script>
// @ is an alias to /src
import SigniflyEmployeeSection from "@/components/SigniflyEmployeeSection.vue";

export default {
  name: "Home",
  components: {
    SigniflyEmployeeSection,
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: auto;
}
</style>
