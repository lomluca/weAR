<template>
  <div>
    <el-button id="menuIcon" class="collapse-menu-button" size="small" v-if="isCollapsed" @click="hidden = !hidden">&#9776</el-button>
    <nav :class="[navClasses, {hide: hidden}]">
      <!-- Render login, register, profile and logout links when collapsed -->
      <div v-if="isCollapsed && !username" :class="[menuClasses, {hide: hidden}]">
        <a><el-button size="medium" type="text" v-on:click="navigate(login_page)">LOGIN</el-button></a>
      </div>
      <div v-if="isCollapsed && !username" :class="[menuClasses, {hide: hidden}]">
        <a><el-button size="medium" type="text" v-on:click="navigate(signup_page)">REGISTER</el-button></a>
      </div>
      <div v-if="isCollapsed && username" :class="[menuClasses, {hide: hidden}]">
        <a><el-button size="medium" type="text" v-on:click="navigate(profile_page)">{{ username }}</el-button></a>
      </div>
      <div v-if="isCollapsed && username" :class="[menuClasses, {hide: hidden}]">
        <a><el-button size="medium" type="text" v-on:click="navigate(home_page)">LOGOUT</el-button></a>
      </div>

      <template
        v-for="category in categories"
        :category="category">
        <!-- Render a standard menu item if no subcategories are found  -->
        <div :class="[menuClasses, {hide: hidden}]" v-if="!category.subcategories || category.subcategories.length == 0">
          <a><el-button size="medium" type="text" v-on:click="navigate(category.href)">{{ category.name }}</el-button></a>
        </div>

        <!-- Render a menu with sub items if subcategories are found -->
        <el-dropdown :class="[menuClasses, {hide: hidden}]" v-else>
          <el-button size="medium" type="text">{{ category.name }}<i class="el-icon-arrow-down el-icon--right"/></el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="subcategory in category.subcategories"
            :subcategory="subcategory">
              <span style="text-transform:uppercase" v-on:click="navigate(subcategory.href)">{{ subcategory.name }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </template>

      <div class="rightBlock" :class="[searchBarClasses, {hide: hidden}]">
        <div id="searchBox">
          <el-input
            size="mini"
            placeholder="Search item"
            prefix-icon="el-icon-search"
            v-model="searchbox"
            @keyup.enter.native="searchItem">
        </div>

        <div id="shoppingCart" :class="[badgeClasses, {hide: hidden}]">
          <a :href="shopcart_page">
            <el-badge :value="badgeValue" class="red-badge"><el-button size="small" icon="el-icon-goods" @click="addItem"/></el-badge>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
let lastScrollTop = 0

export default {
  name: 'wear-nav',
  data() {
    return {
      signup_page: 'signup.html',
      home_page: 'index.html',
      login_page: 'login.html',
      profile_page: 'profile.html',
      shopcart_page: 'shopcart.html',
      categories: getCategories()['data'], // Defined in model.js
      searchbox: '',
      windowWidth: window.innerWidth,
      isCollapsed: (window.innerWidth < 768),
      hidden: (window.innerWidth < 768),
      badgeValue: getShopCartItemsCount() // Defined in model.js
    }
  },
  methods: {
    searchItem: function(event) {
      var item = event.target.value;
      console.log(item + ' querty ')
      window.location.href = '/search.html?q=' + item
    },
    navigate: function(href) {
      window.location.href = href
    },
    handleScroll: function(event) {
      // Hide nav bar in case of scrolling down when it is visible on small devices
      let st = $(window).scrollTop()
      if(!this.$data.hidden && this.$data.isCollapsed && st - lastScrollTop > 75) {
        this.$data.hidden = true
      }
      lastScrollTop = st
    },
    handleShoppingCartChange: function() {
      this.$data.badgeValue = getShopCartItemsCount()
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
    registerLsEvent('shoppingCartInsert', this.handleShoppingCartChange)
    registerLsEvent('shoppingCartRemove', this.handleShoppingCartChange)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
    unregisterLsEvent('shoppingCartInsert')
    unregisterLsEvent('shoppingCartRemove')
  },
  computed: {
    username: function() {
      if (localStorage.loggedIn == 1) {
        return "Hi, " + localStorage.fullname
      }
      return null
    },
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
    },
    searchBarClasses: function() {
      return {
        verticalNavSearchBar: this.isCollapsed,
        horizontalMenuItem: !this.isCollapsed
      }
    },
    badgeClasses: function() {
      return {
        verticalNavBadge: this.isCollapsed,
        horizontalNavBadge: !this.isCollapsed
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
.collapse-menu-button {
  float: right;
  margin-top: 5px;
  margin-right: 10px;
}

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

.horizontalNavBadge {
  
}

/* VERTICAL NAV CSS */
.verticalNav {
  display: block;
  width: 100%;
  padding: 10px;
}
.verticalNav .verticalMenuItem {
  float: left;
  clear: left;
}

.verticalNavSearchBar {
  float: left;
  clear: left;
  width: 100%;
}

.verticalNavBadge {
  padding-top: 15px;
}

.hide {
  display: none;
  position: absolute;
}

.red-badge {
  margin-top: 5px;
}
</style>
