<template>
  <header>
    <p>weAR - {{ msg }}</p>
  </header>
</template>

<script>
export default {
  name: 'wear-header',
  data: function() {
    return {
      msg: "Hello world!"
    }
  }
}
</script>

<style scope>
  body {
    margin: 0px auto;
  }

  header {
    position: fixed;
    background-color: rgb(69, 69, 69);
    width: 100%;
    height: 45px;
    font-size: 15px;
    color: white;
  }
</style>
