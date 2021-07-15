<template>
  <AddProjectSection />
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
</style>
