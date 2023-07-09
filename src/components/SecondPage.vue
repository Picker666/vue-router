<template>
  <div>
    <h2>Second page</h2>
    <router-link to="/secondPage/88/profile">second page 88</router-link>
    <router-link to="/secondPage/66/posts">second page 66</router-link>
    <router-view></router-view>
    <p>
      <button @click="handleHomeClick">home</button>
      <button @click="handle200Click">second page 00</button>
      <button @click="handle2Click">second page</button>

    </p>
  </div>
</template>

<script>
export default {
  name: 'SecondPage',
  methods: {
    handleHomeClick() {
      this.$router.push('/firstPage')
    },
    handle200Click() {
      this.$router.push({
        name: 'second profile page',
        params: {id: 6}
      })
    },
    handle2Click() {
      this.$router.push({
        path: '/secondPage/:id',
        query: { id: 6 }
      })
    }
  },
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