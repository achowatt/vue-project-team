<template>
  <div>
    <h1>{{ project.title }}<span class="span">Project</span></h1>
    <div class="description-wrapper">
      <p class="description-text">Description</p>
      <p class="project-description">
        {{ project.description }}
      </p>
    </div>

    <h2>Meet the Team</h2>

    <div class="team-images">
      <div
        v-for="member in project.teamMembers"
        :key="member.id"
        :id="member.id"
      >
        <img :src="member.imageUrl" :alt="member.name" />
        <h3 class="name">{{ member.fullName }}</h3>
        <p class="job-title">{{ member.jobTitle }}</p>
        <p class="bio">{{ member.bio }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { getProject } from "@/firebase";

export default {
  name: "Project",
  components: {},
  setup() {
    const route = useRoute();
    const projectId = computed(() => route.params.id);
    const project = reactive({ description: "", teamMembers: "", title: "" });

    onMounted(async () => {
      const data = await getProject(projectId.value);
      console.log(data);
      project.description = data.description;
      project.teamMembers = data.teamMembers;
      project.title = data.title;
    });
    return { project };
  },
};
</script>

<style lang="scss" scoped>
.span {
  color: #ede6de;
  display: block;
}
.team-images {
  display: grid;
  grid-template-columns: repeat(auto-fill, 389px);
  grid-gap: 1rem;
}

.swipe-button {
  position: absolute;
  border: none;
  width: 100px;
  height: 100px;
  background: white;
  border-radius: 50%;
  top: calc(50% - 100px);
}

.swipe-next {
  left: calc(389px * 3 - 10px);
}

.swipe-prev {
  left: -50px;
}

.description-wrapper {
  display: flex;
  margin-bottom: 7rem;

  .description-text {
    font-size: 0.7rem;
    text-transform: uppercase;
    font-weight: bold;
    width: 17rem;
  }

  .project-description {
    position: relative;
    top: -8px;
  }
}
</style>
