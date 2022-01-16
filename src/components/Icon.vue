<template>
  <svg class="icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>
<script>
  import './svg';
  export default {
    props: { name: String },
  };
</script>
<style scoped lang="scss">
  .icon {
    width: 1em;
    height: 1em;
  }
</style>
