<template>
  <div v-for="{ title, id, teamMembers } in projects" :key="id">
    <p>{{ title }}</p>
    <p v-for="{ fullName, id } in teamMembers" :key="id" class="name">
      {{ fullName }}
    </p>
  </div>
</template>

<script>
import { useLoadProjects, deleteProjects } from "@/firebase";
export default {
  setup() {
    const projects = useLoadProjects();
    console.log(projects);
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
