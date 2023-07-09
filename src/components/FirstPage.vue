<template>
  <div>
    <h2>First page</h2>
  </div>
</template>

<script>
export default {
  name: 'FirstPage',
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    }
  }
}
</script>