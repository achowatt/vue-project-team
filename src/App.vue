<template>
  <div id="nav">
    <router-link to="/">
      <img class="logo" src="./assets/logo.svg" alt="" width="66" height="26" />
    </router-link>
  </div>
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
button {
  font-family: "Raleway", sans-serif;
  border: none;
  font-size: 1rem;
  background: #c9e3fc;
  line-height: 2;
  cursor: pointer;
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
  margin: 0.5rem 0;
}
</style>
