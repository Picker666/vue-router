<template>
  <div>
    <h1>Four page</h1>
  </div>
</template>

<script>
export default {
  name: 'fourPage',
  props: {
    id: {
      type: String,
      require: true
    },
  },
  created() {
    console.log('this is four page, id is:', this.id);
  }
}
</script>