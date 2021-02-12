<template>
  <div id="app">
    <div style="display: none" id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

.button {
  border: 0.08rem solid rgba(128, 128, 128, 0.23);
  height: fit-content;
  width: fit-content;
  padding: 0.48rem;
  border-radius: 48rem;
  background: white;
  font-size: 1.2rem;
}
.button:hover {
  border: 0.08rem solid black;
  background: green;
  color: white;
}
</style>
