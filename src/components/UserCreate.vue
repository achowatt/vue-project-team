<template>
  <div class="add-employee">
    <h2>New Employee</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="">Image URL</label>
        <input v-model="form.imageUrl" required />
      </div>
      <div class="form-group">
        <label for="">Full Name</label>
        <input v-model="form.fullName" required />
      </div>
      <div class="form-group">
        <label for="">Job Title</label>
        <input v-model="form.jobTitle" required />
      </div>
      <div class="form-group">
        <label for="">Biography</label>
        <input v-model="form.bio" required />
      </div>
      <button type="submit">Add New Employee</button>
    </form>
  </div>
</template>

<script>
import { createUser } from "@/firebase";
import { reactive } from "vue";
export default {
  setup() {
    const form = reactive({
      fullName: "",
      imageUrl: "",
      jobTitle: "",
      bio: "",
    });
    const onSubmit = async () => {
      await createUser({ ...form });
      form.fullName = "";
      form.imageUrl = "";
      form.jobTitle = "";
      form.bio = "";
    };
    return { form, onSubmit };
  },
};
</script>

<style lang="scss" scoped>
.add-employee {
  border: solid 2px #c9e3fc;
  padding: 1rem;
  padding-bottom: 2rem;
  button {
    margin-top: 2rem;
    width: 100%;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    input {
      height: 1.5rem;
    }
  }
}
</style>
