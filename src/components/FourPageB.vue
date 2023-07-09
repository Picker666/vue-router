<template>
  <div>
    <h1>Four page-B</h1>
  </div>
</template>

<script>
export default {
  name: 'fourPage',
  props: {
    objId: {
      type: String,
    },
  },
  created() {
    console.log('this is four page, id is:', this.objId);
  }
}
</script>