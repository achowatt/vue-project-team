<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/project">Project</router-link>
  </div> -->
  <img class="logo" src="./assets/logo.svg" alt="" width="66" height="26" />
  <div class="container">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.logo {
  position: fixed;
  top: 3rem;
  right: 2.5rem;
}
.container {
  max-width: 1200px;
  margin: 9rem auto 0 auto;
  padding: 0 64px;
}

h1 {
  font-size: 5rem;
  line-height: 0.9;
  margin-bottom: 3rem;
}

h1,
h2 {
  text-transform: uppercase;
  font-family: "Bebas Neue", cursive;
}

p {
  font-family: "Raleway", sans-serif;
}
</style>
