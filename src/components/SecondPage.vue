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
      console.log('SecondComponent == watch $route == to, from: ', to, from);
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('SecondComponent == beforeRouteEnter == to, from: ', to, from);
    next();
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    // next(vm => {
    //   // 通过 `vm` 访问组件实例
    // })
    // ...
  },
  beforeRouteLeave(to, from, next) {
    console.log('SecondComponent == beforeRouteLeave == to, from: ', to, from);
    next();
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  },
  beforeRouteUpdate(to, from, next) {
    console.log('SecondComponent == beforeRouteUpdate == to, from, next: ', to, from);
    next();
    // 在当前路由改变，但是该组件被复用时调用
    // 可以访问组件实例 `this`
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