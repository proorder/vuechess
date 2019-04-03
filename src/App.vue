<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "assets/normalize.css";

.myshadow {
  -webkit-box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.3) !important;
  -moz-box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.3) !important;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.3) !important;
  transition: box-shadow 500ms !important;
  &:hover {
    -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3) !important;
    -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3) !important;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3) !important;
  }
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
</style>
