<template>
  <section class="create-project-section">
    <h1>Add new project</h1>
    <h2>Step 1: Choose team members</h2>

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
export default {};
</script>

<style lang="scss" scoped></style>
