<template>
  <div>
    <h2>this is home page</h2>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  beforeCreate() {
    console.log('================================beforeCreate', this.$route);
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