<template>
  <div>
    <el-button id="menuIcon" size="small" v-if="isCollapsed" @click="hidden = !hidden">&#9776</el-button>
    <nav :class="[navClasses, {hide: hidden}]">
      <template
      v-for="category in categories"
      :category="category">
        <!-- Render a standard menu item if no subcategories are found  -->
        <div :class="[menuClasses, {hide: hidden}]" v-if="!category.subcategories">
          <a><el-button size="medium" type="text">{{ category.name }}</el-button></a>
        </div>

        <!-- Render a menu with sub items if subcategories are found -->
        <el-dropdown :class="[menuClasses, {hide: hidden}]" v-else>
          <el-button size="medium" type="text">{{ category.name }}<i class="el-icon-arrow-down el-icon--right"/></el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="subcategory in category.subcategories"
            :subcategory="subcategory">
              {{ subcategory.name }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>

      <div id="searchBox" :class="[menuClasses, {hide: hidden}]" @keyup.enter="searchItem">
        <el-input
        size="small"
        placeholder="Search item"
        prefix-icon="el-icon-search"
        v-model="searchbox">
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'wear-nav',
  data() {
    return {
      categories: getCategories()['data'], // Defined in static/js/model.js
      searchbox: '',
      windowWidth: 0,
      isCollapsed: false,
      hidden: false
    }
  },
  methods: {
    searchItem: function(event) {
      item = event.target.value; //do something with this
    }
  },
  computed: {
    navClasses: function() {
      return {
        verticalNav: this.isCollapsed,
        horizontalNav: !this.isCollapsed
      }
    },
    menuClasses: function() {
      return {
        verticalMenuItem: this.isCollapsed,
        horizontalMenuItem: !this.isCollapsed
      }
    }
  },
  watch: {
    windowWidth(newWidth, oldWidth) {
      this.isCollapsed = (newWidth < 768);
      this.hidden = this.isCollapsed;
    }
  },
  mounted() {
    let that = this;
    this.$nextTick(function() {
      window.addEventListener('resize', function(e) {
        that.windowWidth = window.innerWidth;
      });
    })
  }
}
</script>

<style>
/* HORIZONTAL NAV CSS */
.horizontalNav {
  display: inline-block;
  width: 100%;
  vertical-align: top;
  text-transform: uppercase;
  font-family: Arial, sans-serif;
}
.horizontalNav .horizontalMenuItem {
  display: inline-block;
  margin-left: 15px;
}
.horizontalNav #searchBox {
  margin-right: 20px;
  float: right;
}

/* VERTICAL NAV CSS */
.verticalNav {
  display: block;
}
.verticalNav .verticalMenuItem {
  float: left;
  clear: left;
}
.verticalNav #searchBox {

}

.hide {
  display: none;
}
#menuIcon {
  margin-left: 10px
}
</style>
