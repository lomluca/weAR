<template>
  <nav>
    <el-button icon="el-icon-menu" class="menuIcon" size="small" @click="showMenu()"></el-button>
    <template
      v-for="category in categories"
      :category="category">
      <!-- Render a standard menu item if no subcategories are found  -->
      <div class="menuItem" v-if="!category.subcategories">
        <a><el-button size="medium" type="text">{{ category.name }}</el-button></a>
      </div>

      <!-- Render a menu with sub items if subcategories are found -->
      <el-dropdown class="menuItem" v-else>
        <el-button size="medium" type="text">{{ category.name }}<i class="el-icon-arrow-down el-icon--right"/></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="subcategory in category.subcategories"
            :subcategory="subcategory">
            {{ subcategory.name }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </template>

    <div id="searchBox" class="menuItem" @keyup.enter="searchItem">
      <el-input
        size="small"
        placeholder="Search item"
        prefix-icon="el-icon-search"
        v-model="searchbox">
    </div>
  </nav>
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
nav {
  display: inline-block;
  width: 100%;
  vertical-align: top;
  text-transform: uppercase;
  font-family: Arial, sans-serif;
}
nav .menuItem {
  display: inline-block;
  margin-left: 15px;
}

nav #searchBox {
  margin-right: 20px;
  float: right;
}

nav .menuIcon {
  float: left;
  display: none
}

</style>
