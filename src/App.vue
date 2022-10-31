<template lang="pug">
  .container
    router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  body {
    font-family: 'Balsamiq Sans', Tahoma, sans-serif;
    font-size: 16px;
    line-height: 1.42;
    -webkit-font-smoothing: antialiased;
    background: url('./assets/len.jpg') fixed no-repeat;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
    }
  }

  .container {
    max-width: 600px;
    margin: 0 auto;
  }
</style>
