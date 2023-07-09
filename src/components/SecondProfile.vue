<template>
  <div>
    <h1>Second Profile page</h1>
  </div>
</template>

<script>
export default {
  name: 'SecondProfile',
  beforeCreate() {
    console.log('================================beforeCreate', this.$route.params.id);
  },
}
</script>