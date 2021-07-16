<template>
  <BioModal v-if="modal.opened" :info="modal.info" @closeBio="closeBio" />
  <section class="create-project-section">
    <h1>Build Your team <span class="highlight-1">in 3 simple steps</span></h1>
    <svg
      class="happy-svg"
      version="1.1"
      id="__JzFRSX1__Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 301.1 423"
      style="enable-background: new 0 0 301.1 423"
      xml:space="preserve"
    >
      <g>
        <polygon
          points="162.4,124.8 152.7,123.3 156.9,95.7 139.7,122.2 149.4,123.6 145.2,151.3"
        ></polygon>
        <path
          d="M37.7,209.6c-0.4-1.9-2.3-3.1-4.2-2.7c-1.9,0.4-3.1,2.3-2.7,4.2c2.2,10.1,11.4,17.4,21.7,17.4s19.4-7.3,21.7-17.4c0.4-1.9-0.8-3.8-2.7-4.2s-3.8,0.8-4.2,2.7c-1.5,6.9-7.8,11.9-14.9,11.9S39.3,216.5,37.7,209.6z"
        ></path>
        <path
          d="M23.9,195.3c1.9,0,3.5-1.6,3.5-3.5c0-4.2,3.4-7.5,7.5-7.5s7.5,3.4,7.5,7.5c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5c0-8-6.5-14.5-14.5-14.5s-14.5,6.5-14.5,14.5C20.4,193.8,22,195.3,23.9,195.3z"
        ></path>
        <path
          d="M59.2,195.3c1.9,0,3.5-1.6,3.5-3.5c0-4.2,3.4-7.5,7.5-7.5s7.5,3.4,7.5,7.5c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5c0-8-6.5-14.5-14.5-14.5s-14.5,6.5-14.5,14.5C55.7,193.8,57.3,195.3,59.2,195.3z"
        ></path>
        <path
          d="M169.6,241c-1.9-0.4-3.8,0.8-4.2,2.7c-1.5,6.9-7.8,11.9-14.9,11.9s-13.3-5-14.9-11.9c-0.4-1.9-2.3-3.1-4.2-2.7c-1.9,0.4-3.1,2.3-2.7,4.2c2.2,10.1,11.4,17.4,21.7,17.4s19.4-7.3,21.7-17.4C172.7,243.3,171.5,241.4,169.6,241z"
        ></path>
        <path
          d="M140.5,225.9c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5c0-8-6.5-14.5-14.5-14.5s-14.5,6.5-14.5,14.5c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5c0-4.2,3.4-7.5,7.5-7.5S140.5,221.8,140.5,225.9z"
        ></path>
        <path
          d="M168.3,211.4c-8,0-14.5,6.5-14.5,14.5c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5c0-4.2,3.4-7.5,7.5-7.5s7.5,3.4,7.5,7.5c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5C182.8,217.9,176.3,211.4,168.3,211.4z"
        ></path>
        <path
          d="M233.8,272.7c-0.4-1.9-2.3-3.1-4.2-2.7s-3.1,2.3-2.7,4.2c2.2,10.1,11.4,17.4,21.7,17.4c10.3,0,19.4-7.3,21.7-17.4c0.4-1.9-0.8-3.8-2.7-4.2c-1.9-0.4-3.8,0.8-4.2,2.7c-1.5,6.9-7.8,11.9-14.9,11.9S235.3,279.6,233.8,272.7z"
        ></path>
        <path
          d="M219.9,258.5c1.9,0,3.5-1.6,3.5-3.5c0-4.2,3.4-7.5,7.5-7.5s7.5,3.4,7.5,7.5c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5c0-8-6.5-14.5-14.5-14.5s-14.5,6.5-14.5,14.5C216.4,256.9,218,258.5,219.9,258.5z"
        ></path>
        <path
          d="M255.2,258.5c1.9,0,3.5-1.6,3.5-3.5c0-4.2,3.4-7.5,7.5-7.5s7.5,3.4,7.5,7.5c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5c0-8-6.5-14.5-14.5-14.5s-14.5,6.5-14.5,14.5C251.7,256.9,253.3,258.5,255.2,258.5z"
        ></path>
        <path
          d="M32.3,320.7h69.3c0.1,0,0.1,0,0.2,0s0.1,0,0.2,0h97.6h0.5h72.3c15.8,0,28.7-12.9,28.7-28.7v-41c0-27.3-22.2-49.6-49.6-49.6h-5.9c-17.7,0-33.3,9.3-42.1,23.4v-3.9c0-27.3-22.2-49.6-49.6-49.6H148c-18.3,0-34.3,10-42.9,24.8v-11.5c0-27.3-22.2-49.6-49.6-49.6h-5.9C22.3,135,0,157.2,0,184.6v103.9C0,306.2,14.5,320.7,32.3,320.7z M245.6,208.5h5.9c23.5,0,42.6,19.1,42.6,42.6V292c0,12-9.7,21.7-21.7,21.7h-68.8v-69.4C206.8,224,224.4,208.5,245.6,208.5z M105.5,220.9c0-23.5,19.1-42.6,42.6-42.6h5.9c23.5,0,42.6,19.1,42.6,42.6v22.9c-0.3,2.4-0.5,4.8-0.5,7.2v62.7h-90.6L105.5,220.9L105.5,220.9zM7,184.6C7,161.1,26.1,142,49.6,142h5.9c23.5,0,42.6,19.1,42.6,42.6v129.1H32.3C18.4,313.7,7,302.4,7,288.4V184.6L7,184.6z"
        ></path>
      </g>
    </svg>
    <form @submit.prevent="onSubmit">
      <div id="step-1" class="form-group">
        <label for="project-title">Step 1: Project Name</label>
        <input
          type="text"
          name="project-title"
          id="project-title"
          v-model="title"
          placeholder="enter project title here"
          required
        />
      </div>
      <div id="step-2" class="form-group">
        <label for="project-description">Step 2: Add Description</label>
        <input
          type="text"
          name="project-description"
          id="project-description"
          v-model="description"
          placeholder="tell us about your awesome project"
          required
        />
      </div>
      <div id="step-3" class="form-group">
        <label for="">Step 3: Choose your team members</label>
        <div class="team-images">
          <div
            v-for="({ id, imageUrl, fullName, jobTitle }, index) in users"
            :key="id"
          >
            <UserList
              :id="id"
              :imageUrl="imageUrl"
              :fullName="fullName"
              :jobTitle="jobTitle"
              :index="index"
              @add="add"
              @remove="remove"
              @openBio="openBio"
            />
          </div>
        </div>
      </div>
      <div id="step-4" class="confirm">
        <h1>
          Confirm and create
          <span class="highlight-2"> your amazing team!</span>
        </h1>
        <div class="confirm-project">
          <div class="group">
            <p class="confirm-title">Project:</p>
            <p>{{ title }}</p>
          </div>
          <div class="group">
            <p class="confirm-title">Description:</p>
            <p>{{ description }}</p>
          </div>
          <p class="confirm-title">Team Members:</p>
        </div>
        <ul class="confirm-members">
          <li v-for="{ fullName, jobTitle, id } in chosenMembers" :key="id">
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
import BioModal from "./BioModal.vue";
import { createProject, fetchUsers } from "@/firebase.js";

export default {
  components: { UserList, BioModal },
  data() {
    return {
      title: "",
      description: "",
      chosenMembers: [],
      users: [],
      modal: { opened: false, info: {} },
    };
  },
  methods: {
    onSubmit() {
      const saveInfo = {
        title: this.title,
        description: this.description,
        teamMembers: this.chosenMembers,
      };
      createProject(saveInfo).then((docRef) => {
        this.$router.push({ path: `/project/${docRef.id}` });
      });
    },
    add(id) {
      const user = this.users.filter((user) => user.id == id)[0];
      this.chosenMembers.push(user);
    },
    remove(id) {
      this.chosenMembers = this.chosenMembers.filter((user) => user.id !== id);
    },
    openBio(id) {
      this.modal.info = this.users.filter((user) => user.id == id)[0];
      this.modal.opened = true;
    },
    closeBio() {
      this.modal.opened = false;
    },
  },
  created() {
    fetchUsers().then((users) => (this.users = users));
  },
};
</script>

<style lang="scss" scoped>
.create-project-section {
  position: relative;
  .happy-svg {
    display: none;
    @media screen and (min-width: 800px) {
      display: block;
      max-width: 180px;
      width: 18vw;
      position: absolute;
      right: 0;
      top: -60px;
      fill: #c9e3fc;
    }
  }
}

span {
  display: block;
}
.highlight-1 {
  color: #c9e3fc;
}

.highlight-2 {
  color: #ede6de;
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

  input:focus + label {
    color: green;
  }
}

.team-images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
  grid-row-gap: 1.5rem;
}

.confirm {
  max-width: 700px;
}

.confirm-project {
  p {
    font-weight: bold;
    line-height: 2;
  }
  .confirm-title {
    color: grey;
    border-bottom: solid 1px rgb(228, 228, 228);
  }
  .group {
    margin-bottom: 2rem;
  }
}

.confirm-members {
  max-width: 800px;
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  padding-left: 1rem;
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  li {
    margin-right: 2rem;
    margin-bottom: 1rem;
    text-transform: lowercase;
  }
  span {
    font-weight: bold;
    display: block;
    text-transform: uppercase;
  }
}

.flex-container {
  display: flex;
}

button[type="submit"] {
  margin-top: 2rem;
  width: 100%;
  padding: 1rem;
  background: #80c2ff;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: rgb(0, 68, 255);
  }
}
</style>
