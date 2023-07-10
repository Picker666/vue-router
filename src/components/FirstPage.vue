<template>
  <div>
    <h2>First page</h2>
  </div>
</template>

<script>
export default {
  name: 'FirstPage',
  beforeRouteEnter(to, from, next) {
    console.log('FirstComponent == beforeRouteEnter == to, from: ', to, from);
    next();
    // ...
  },
  beforeRouteLeave(to, from, next) {
    console.log('FirstComponent == beforeRouteLeave == to, from: ', to, from);
    next();
    // ...
  },
}
</script>