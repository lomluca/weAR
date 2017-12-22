<template>
<header>
  <div class="headerRow1">
    <div class="col">
      <div class="inlineCol">
        <a href="#"><el-button type="text" @click="newsletter_messagebox">sign up for newsletter</el-button></a>
      </div>
    </div>
    <div class="col">
      <div class="top">
        <div class="inlineCol">
          <el-button type="text">sign in</el-button>
        </div>
        <div class="inlineCol">
          <a href="#"><el-button type="text">register</el-button></a>
        </div>
      </div>
    </div>
  </div>
  <div class="headerRow2">
    <a :href="logo.href"><img :src="logo.asset" :alt="logo.alt" width="50px" height="50px"></a>
  </div>
  <div class="headerRow3">
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
      logo: getLogo()
    }
  },
  components: {
    'wear-nav': WearNav
  },
  methods: {
    newsletter_messagebox() {
      this.$prompt('Please input your e-mail', 'Sign up for the newsletter', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: 'Invalid Email'
      }).then(value => {
        this.$message({
          type: 'success',
          message: 'Your email is:' + value
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Input canceled'
        });
      });
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
  background: #fff
}
header .headerRow1 .col {
  float: left;
  width: 50%
}
header .headerRow1 .col .inlineCol {
  text-transform: uppercase;
  margin-right: 60px;
  margin-left: 10px;
  padding-right: 0;
  display: block;
  float: left
}
header .headerRow1 .col .top {
  float: right
}
header .headerRow1 .col .top .inlineCol {
  margin-right: 10px;
  margin-left: 60px
}

/* Header row 2 */
header .headerRow2  {
  text-align: center
}

</style>
