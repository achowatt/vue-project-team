<template>
  <section class="create-project-section">
    <h1>Build Your Dream team <span class="span">in 3 simple steps</span></h1>
    <form @submit.prevent="onSubmit">
      <div id="step-1" class="form-group">
        <label for="project-title">Step 1: Project Name</label>
        <input
          type="text"
          name="project-title"
          id="project-title"
          v-model="form.title"
          placeholder="enter project title here"
        />
      </div>
      <div id="step-2" class="form-group">
        <label for="project-description">Step 2: Add Description</label>
        <input
          type="text"
          name="project-description"
          id="project-description"
          v-model="form.description"
          placeholder="tell us about this awesome project"
        />
      </div>
      <div id="step-3" class="form-group">
        <label for="">Step 3: Choose your team members</label>
        <div class="team-images">
          <div v-for="{ id, imageUrl, fullName, jobTitle } in users" :key="id">
            <UserList
              :id="id"
              :imageUrl="imageUrl"
              :fullName="fullName"
              :jobTitle="jobTitle"
            />
          </div>
        </div>
      </div>
      <div id="step-4" class="confirm">
        <h1>
          Confirm and create <span class="span"> your amazing team!</span>
        </h1>
        <div class="confirm-description">
          <div class="flex-container">
            <h2>Project</h2>
            <p>{{ form.title }}</p>
          </div>
          <p><span>Description:</span> {{ form.description }}</p>
          <p><span>Team Members:</span></p>
        </div>
        <ul class="confirm-members">
          <li
            v-for="{ fullName, jobTitle, id } in form.chosenMembers"
            :key="id"
          >
            <span>{{ fullName }}</span
            >{{ jobTitle }}
          </li>
        </ul>
        <button type="submit">Create team</button>
      </div>
    </form>
  </section>
</template>

<script>
import UserList from "./UserList.vue";
import { reactive } from "vue";
import { useTeamMembers } from "@/addteam.js";
import { createProject, useLoadUsers } from "@/firebase.js";
export default {
  components: { UserList },
  setup() {
    const team = useTeamMembers();
    const users = useLoadUsers();
    const form = reactive({
      title: "",
      description: "",
      chosenMembers: team,
    });

    function onSubmit() {
      const saveInfo = {
        title: form.title,
        description: form.description,
        teamMembers: form.chosenMembers,
      };
      console.log("YAY Submitted!!");
      createProject(saveInfo);
    }

    return { form, onSubmit, users };
  },
};
</script>

<style lang="scss" scoped>
.span {
  color: #c9e3fc;
  display: block;
}

label {
  font-size: 1.5rem;
  color: #b4b3b3;
  font-weight: bold;
  font-family: "Bebas Neue", cursive;
  text-transform: uppercase;
  margin-bottom: 1rem;
  @media screen and (max-width: 740px) {
    font-size: 1.7rem;
  }
}

input {
  border: none;
  font-size: 2rem;
  color: rgb(68, 68, 68);
  border-bottom: solid 1px rgb(228, 228, 228);
  height: 4rem;
}

#step-3 {
  padding-bottom: 4rem;
  border-bottom: solid 1px rgb(228, 228, 228);
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #b4b3b3;
  opacity: 1; /* Firefox */
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
}

.team-images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 1rem;
  grid-row-gap: 1.5rem;
}

.confirm {
  max-width: 700px;
}

.confirm-members {
  max-width: 800px;
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  padding-left: 1rem;
  list-style: none;
  padding: 0;
  li {
    margin-right: 2rem;
    margin-bottom: 1rem;
  }
  span {
    font-weight: bold;
    display: block;
  }
}

.flex-container {
  display: flex;
  justify-content: center;
}
</style>
