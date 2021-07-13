<template>
  <router-link to="/project">Project</router-link>

  <h1>Welcome to Home Page</h1>

  <section class="project-list-section">
    <h1>Current Projects</h1>
  </section>

  <section class="create-project-section">
    <h1>Add new project</h1>
    <h2>Step 1: Choose team members</h2>
    <div class="team-images">
      <button v-for="user in users" :key="user.id" :id="user.id">
        <img :src="user.imageUrl" :alt="user.name" />
        <h3 class="name">{{ user.fullName }}</h3>
        <p class="job-title">{{ user.jobTitle }}</p>
        <p class="bio">{{ user.bio }}</p>
      </button>
    </div>
    <h2>Step 2: Create a project</h2>
    <form>
      <label for="project-title">Project Title</label>
      <input
        type="text"
        name="project-title"
        id="project-title"
        v-model="projectTitle"
      />
      <label for="project-description">Description</label>
      <input type="text" name="project-description" id="project-description" />
      <button type="submit">Create Team</button>
    </form>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      projectTitle: "",
      projectDescription: "",
      users: [
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
.team-images {
  display: grid;
  grid-template-columns: repeat(auto-fill, 389px);
  grid-gap: 1rem;
}
</style>
