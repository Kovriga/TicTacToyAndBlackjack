<template>
  <div id="app">
    <nav>
      <div>
        <router-link to="/">Home</router-link>
      </div>

      <div>
        <router-link to="/blackjack">Blackjack</router-link>
        <router-link to="/tic-tac-toe">Крестики нолики</router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}

nav {
  padding: 0;
  background-color: deepskyblue;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>
<script setup lang="ts">
</script>