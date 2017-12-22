<template>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <div
    v-for="category in categories"
    v-bind:category="category"
    v-bind:index="category.id"
    v-bind:key="category.id">

    <!-- Render a standard menu item if no subcategories are found  -->
    <el-menu-item v-if="!category.subcategories" :index="category.id">
      {{ category.name }}
    </el-menu-item>

    <!-- Render a menu with sub items if subcategories are found -->
    <el-submenu v-else :index="category.id">
      <template slot="title">{{ category.name }}</template>
      <el-menu-item v-for="subcategory in category.subcategories"
        v-bind:subcategory="subcategory"
        v-bind:index="subcategory.id"
        v-bind:key="subcategory.id" >
        {{ subcategory.name }}
    </el-submenu>
  </div>

  <el-menu-item id="searchbox" v-on:keyup.enter="searchItem">
    <el-input
      placeholder="Search item"
      prefix-icon="el-icon-search"
      v-model="searchbox">
  </el-menu-item>

</el-menu>
</template>

<script>
export default {
  name: 'wear-nav',
  data() {
    return {
      categories: getCategories()['data'], // Defined in static/js/model.js
      searchbox: ''
    }
  },
  methods: {
    searchItem: function(event) {
      item = event.target.value; //do something with this
    }
  }
}
</script>

<style>
.el-menu {
  text-transform: uppercase;
  font-family: Arial, sans-serif
}
</style>
