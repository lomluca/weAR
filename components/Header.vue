<template>
<header>
  <div class="headerRow1">
    <div class="top">
      <div class="col">
        <a v-if="!username" :href="login_page"><el-button size="mini" type="text">login</el-button></a>
      </div>
      <div class="col">
        <a v-if="!username" :href="signup_page"><el-button size="mini" type="text">register</el-button></a>
      </div>
      <div class="col">
        <a v-if="username" :href="signup_page"><el-button size="mini" type="text">{{ username }}</el-button></a>
      </div>
      <div class="col">
        <a v-if="username" :href="home_page"><el-button @click="logout" size="mini" type="text">logout</el-button></a>
      </div>
    </div>
  </div>
  <div class="headerRow2">
    <a :href="home_page"><img :src="logo.asset" :alt="logo.alt" width="50px" height="50px"></a>
  </div>
  <div class="headerRow3">
    <div class="headerRow3_logo">
      <a :href="home_page"><img :src="logo.asset" :alt="logo.alt" width="25px" height="25px"></a>
    </div>
    <wear-nav/>
  </div>
</header>
</template>

<script>
import WearNav from './Nav'

export default {
  name: 'wear-header',
  data() {
    return {
      logo: getLogo(),
      signup_page: 'signup.html',
      home_page: 'index.html',
      login_page: 'login.html'
    }
  },
  computed: {
    username: function() {
      if (localStorage.loggedIn == 1) {
        return "Hi, " + localStorage.fullname
      }
      return null
    }
  },
  components: {
    'wear-nav': WearNav
  },
  methods: {
    logout: function() {
      localStorage.loggedIn = 0
    }
  }
}
</script>




<style>
header {
  width: 100%;
  background: #fff;
}

header .el-button {
  text-transform: uppercase;
  color: #303133
}

/* Header row 1 */
header .headerRow1, header .headerRow2, header .headerRow3 {
  width: 100%;
  display: inline-block;
  vertical-align: top;
  background: #fff;
}
header .headerRow1 .col {
  text-transform: uppercase;
  margin-right: 30px;
  margin-left: 50px;
  display: block;
  float: left;
}
header .headerRow1 .top {
  float: right;
}

/* Header row 2 */
header .headerRow2  {
  margin-top: -10px;
  text-align: center;
}

header .headerRow3 {
  padding: 0px 5px 10px 5px;
}

header .headerRow3_logo{
  float: left;
  display: none;
}

</style>
