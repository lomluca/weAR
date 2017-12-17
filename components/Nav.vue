<template>
	<nav>
		<a href="#">Buy</a>
		<a href="#">Profile</a>
		<a href="#">Cart ({{ size_cart }})</a>
	</nav>
</template>

<script>
export default {
  name: 'wear-nav',
  data: function() {
    return {
      size_cart: 0
    }
  }
}
</script>

<style scope>
  nav a {
    background-color: rgb(69, 69, 69);
    width: 60px;
    vertical-align: middle;
    text-decoration: none;
    color: white;
  }

  a:hover {
    background-color: rgb(75, 75, 75);
  }
</style>
