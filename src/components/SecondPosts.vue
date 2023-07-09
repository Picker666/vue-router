<template>
  <div>
    <h1>Second Posts page</h1>
  </div>
</template>

<script>
export default {
  name: 'SecondPosts',
  beforeCreate() {
    console.log('================================beforeCreate', this.$route.params.id);
  },
}
</script>