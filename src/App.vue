<template>
  <nav id="nav">
    <router-link to="/">
      <img class="logo" src="./assets/logo.svg" alt="" width="66" height="26" />
    </router-link>
  </nav>
  <router-view />
  <footer></footer>
</template>

<style lang="scss">
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 100%;
  @media screen and (max-width: 740px) {
    font-size: 85%;
  }
}

#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
button {
  font-family: "Raleway", sans-serif;
  border: none;
  font-size: 1rem;
  line-height: 2;
  cursor: pointer;
}

.logo {
  position: fixed;
  top: 3rem;
  right: 2.5rem;
  z-index: 7;
}

h1 {
  font-size: 5rem;
  line-height: 0.9;
  margin-bottom: 3rem;
  color: black;
}

h1,
h2 {
  text-transform: uppercase;
  font-family: "Bebas Neue", cursive;
}

p {
  margin: 0.5rem 0;
}

p,
button {
  @media screen and (max-width: 740px) {
    font-size: 1.2rem;
  }
}
</style>
