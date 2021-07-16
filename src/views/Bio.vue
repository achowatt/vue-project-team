<template>
  <header>
    <button @click="goBack">&#8592;</button>
    <h1>{{ user.fullName }}</h1>
    <p>{{ user.jobTitle }}</p>
  </header>
  <main class="container flex">
    <h2 class="bio">Biography</h2>
    <div>
      <h3 class="description-header">
        Generator of sustainable business transformations
      </h3>
      <p class="body-paragraph">
        {{ user.bio }}
      </p>
    </div>
  </main>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getUser } from "@/firebase";

export default {
  name: "Bio",
  components: {},
  setup() {
    const route = useRoute();
    const router = useRouter();
    const userId = computed(() => route.params.id);
    const user = reactive({ fullName: "", jobTitle: "", bio: "" });

    function goBack() {
      router.go(-1);
    }

    onMounted(async () => {
      const data = await getUser(userId.value);
      user.fullName = data.fullName;
      user.jobTitle = data.jobTitle;
      user.bio = data.bio;
    });
    return { user, goBack };
  },
};
</script>

<style lang="scss" scoped>
header {
  background: #d0d6c8;
  width: 100%;
  height: 500px;
  position: relative;
  h1 {
    position: absolute;
    bottom: 3rem;
    left: 3rem;
    color: white;
  }
  p {
    position: absolute;
    bottom: 2.5rem;
    left: 3rem;
    font-size: 2rem;
    color: white;
  }
  button {
    position: fixed;
    top: 3rem;
    left: 3rem;
    background: transparent;
    font-size: 2rem;
    color: white;
  }
  @media screen and (max-width: 700px) {
    h1 {
      font-size: 3rem;
      left: 2rem;
    }
    p {
      font-size: 1.5rem;
      left: 2rem;
    }
    button {
      left: 2rem;
    }
  }
}

.container {
  max-width: 1200px;
  margin: 5rem auto 0 auto;
  padding: 0 64px 64px;

  @media screen and (max-width: 700px) {
    padding: 2rem;
  }
}

.flex {
  display: flex;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }

  .bio {
    flex: 1;
    font-size: 2rem;
    padding-bottom: 3rem;
  }

  div {
    flex: 2;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    margin-top: 3rem;
    line-height: 2;
  }
}
</style>
