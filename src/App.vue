<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>
      <router-link v-for="r in routes" :to="r.path" :key="r.path">{{ r.name }}</router-link>
      <router-link to="/secondPage/88">second Page 88</router-link>
      <router-link to="/secondPage/66">second Page 66</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import routes from './routes';
export default {
  name: 'App',
  data: function () {
    return {
      routes: routes.filter(r => !r.children)
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p a {
  display: inline-block;
  margin: 0 24px;
  color: #2c3e50;
  text-decoration: none;
}
p .router-link-active {
  color: red;
}
</style>
