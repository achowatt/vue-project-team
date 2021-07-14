<template>
  <div>
    <h3>Edit users</h3>
    <form @submit.prevent="update">
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
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getUser, updateUser } from "@/firebase";
export default {
  name: "EditEmployee",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const userId = computed(() => route.params.id);
    const form = reactive({
      fullName: "",
      imageUrl: "",
      jobTitle: "",
      bio: "",
    });
    onMounted(async () => {
      const user = await getUser(userId.value);
      console.log(user, userId.value);
      form.fullName = user.fullName;
      form.imageUrl = user.imageUrl;
      form.jobTitle = user.jobTitle;
      form.bio = user.bio;
    });
    const update = async () => {
      await updateUser(userId.value, { ...form });
      router.push("/");
      form.fullName = "";
      form.imageUrl = "";
      form.jobTitle = "";
      form.bio = "";
    };
    return { form, update };
  },
};
</script>
