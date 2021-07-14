<template>
  <div v-for="{ title, teamMembers, id } in projects" :key="id">
    <p>{{ title }}</p>
    <p v-for="{ fullName, id } in teamMembers" :key="id" class="name">
      {{ fullName }}
    </p>
  </div>
</template>

<script>
import { useLoadProjects, deleteProjects } from "@/firebase";
export default {
  name: "ProjectList",
  setup() {
    const projects = useLoadProjects();
    return { projects, deleteProjects };
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: auto;
}
</style>
