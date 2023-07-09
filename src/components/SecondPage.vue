<template>
  <div>
    <h2>Second page</h2>
    <router-link to="/secondPage/88/profile">second page 88</router-link>
    <router-link to="/secondPage/66/posts">second page 66</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'SecondPage',
  watch: {
    $route(to, from) {
      console.log('to, from: ', to, from);
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log('to, from, next: ', to, from);
    next();
  },
  beforeCreate() {
    console.log('================================beforeCreate', this.$route.params.id);
  },
  created() {
    console.log('================================created');
  },
  beforeMount() {
    console.log('================================beforeMount');
  },
  mounted() {
    console.log('================================mounted');
  },
  beforeUpdate() {
    console.log('================================beforeUpdate');
  },
  updated() {
    console.log('================================updated');
  },
  beforeDestroy() {
    console.log('================================beforeDestroy');
  },
  destroyed() {
    console.log('================================destroyed');
  }
}
</script>