<template>
  <main class="container">
    <h1>{{ project.title }}<span class="span">Project</span></h1>
    <div class="description-wrapper">
      <p class="description-text">Description</p>
      <p class="project-description">
        {{ project.description }}
      </p>
    </div>
    <div class="description-wrapper">
      <p class="description-text">Team</p>
      <p class="project-description">
        {{ project.description }}
      </p>
    </div>

    <h2>Meet the team</h2>

    <div
      v-for="member in project.teamMembers"
      :key="member.id"
      :id="member.id"
      class="member-section"
    >
      <div>
        <img :src="member.imageUrl" :alt="member.name" class="member-image" />
      </div>
      <div class="member-info">
        <h3 class="name">{{ member.fullName }}</h3>
        <p class="job-title">{{ member.jobTitle }}</p>
        <p class="bio">{{ member.bio }}</p>
      </div>
    </div>
  </main>
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
.container {
  max-width: 1200px;
  margin: 9rem auto 0 auto;
  padding: 0 64px 64px;

  @media screen and (max-width: 700px) {
    padding: 1rem;
  }
}

.description-wrapper {
  display: flex;
  margin-bottom: 0rem;

  .description-text {
    font-size: 0.7rem;
    text-transform: uppercase;
    font-weight: bold;
    width: 17rem;
    flex: 1;
  }

  .project-description {
    position: relative;
    top: -8px;
    flex: 5;
  }
}

p {
  line-height: 1.7;
}

h2 {
  margin-bottom: 3rem;
  margin-top: 2rem;
}

.member-section {
  display: flex;
  margin-bottom: 5rem;
  align-items: center;

  &:nth-of-type(even) {
    div:nth-of-type(odd) {
      order: 2;
      padding-left: 5rem;
    }
    div:nth-of-type(even) {
      order: 1;
    }
  }

  &:nth-of-type(odd) {
    div:nth-of-type(odd) {
      padding-right: 5rem;
    }
  }

  .member-image {
    width: auto;
    max-height: 400px;
  }
  .job-title {
    font-weight: bold;
  }
}

.span {
  color: #ede6de;
  display: block;
}
.team-images {
  display: grid;
  grid-template-columns: repeat(auto-fill, 389px);
  grid-gap: 1rem;
}

.swipe-prev {
  left: -50px;
}
</style>
