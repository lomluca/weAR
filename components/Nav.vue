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

      <div class="rightBlock" :class="[menuClasses, {hide: hidden}]">
        <div id="searchBox">
          <el-input
            size="mini"
            placeholder="Search item"
            prefix-icon="el-icon-search"
            v-model="searchbox"
            @keyup.enter.native="searchItem">
        </div>

        <div id="shoppingCart">
          <a :href="shopcart_page"><el-button size="small" icon="el-icon-goods"/></a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'wear-nav',
  data() {
    return {
      shopcart_page: 'shopcart.html',
      categories: getCategories()['data'], // Defined in static/js/model.js
      searchbox: '',
      windowWidth: window.innerWidth,
      isCollapsed: (window.innerWidth < 768),
      hidden: (window.innerWidth < 768)
    }
  },
  methods: {
    searchItem: function(event) {
      var item = event.target.value; //do something with this
      console.log(item + ' querty ')
      window.location.href = '/search.html?q=' + item
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
}
.horizontalNav .horizontalMenuItem {
  display: inline-block;
  margin-left: 15px;
}
.horizontalNav .rightBlock {
  float: right;
  margin-right: 20px;
}
.horizontalNav .rightBlock #searchBox, .horizontalNav .rightBlock #shoppingCart {
  display: inline-block;
  margin-left: 10px;
}

/* VERTICAL NAV CSS */
.verticalNav {
  display: block;
}
.verticalNav .verticalMenuItem {
  float: left;
  clear: left;
}

.hide {
  display: none;
}
</style>
