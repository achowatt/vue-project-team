<template>
  <div>
    <h1>
      Lucky Brand<span class="project">{{ project.title }}</span>
    </h1>
    <div class="description-wrapper">
      <p class="description-text">Description</p>
      <p class="project-description">
        {{ project.description }}
      </p>
    </div>

    <h2>Meet the Team</h2>

    <div class="team-images">
      <div v-for="member in teamMembers" :key="member.id" :id="member.id">
        <img :src="member.imageUrl" :alt="member.name" />
        <h3 class="name">{{ member.fullName }}</h3>
        <p class="job-title">{{ member.jobTitle }}</p>
        <p class="bio">{{ member.bio }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  components: {},
  data() {
    return {
      project: {
        id: "111",
        title: "Lucky Brand",
        description:
          "Our team is composed of experts in the fields of strategy, design, and technology. We design strong concepts and bring them to life through confident digital craftsmanship.",
      },
      teamMembers: [
        {
          id: "123",
          imageUrl:
            "https://www.datocms-assets.com/7718/1562334980-ntk2870-edit.jpg?auto=compress&w=389&dpr=1&q=70",
          fullName: "Hello World",
          jobTitle: "Carpenter",
          bio: "something",
        },
        {
          id: "456",
          imageUrl:
            "https://www.datocms-assets.com/7718/1562334980-ntk2870-edit.jpg?auto=compress&w=389&dpr=1&q=70",
          fullName: "Hello World",
          jobTitle: "Carpenter",
          bio: "something",
        },
        {
          id: "456",
          imageUrl:
            "https://www.datocms-assets.com/7718/1562334980-ntk2870-edit.jpg?auto=compress&w=389&dpr=1&q=70",
          fullName: "Hello World",
          jobTitle: "Carpenter",
          bio: "something",
        },
        {
          id: "456",
          imageUrl:
            "https://www.datocms-assets.com/7718/1562334980-ntk2870-edit.jpg?auto=compress&w=389&dpr=1&q=70",
          fullName: "Hello World",
          jobTitle: "Carpenter",
          bio: "something",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: black;
}
.project {
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
