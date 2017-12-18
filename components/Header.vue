<template>
<el-header>
  <p>weAR - {{ msg }}</p>
  <wear-nav />
</el-header>
</template>

<script>
import WearNav from './Nav'

export default {
  name: 'wear-header',
  data: function() {
    return {
      msg: "Hello world!"
    }
  },
  components: {
    'wear-nav': WearNav
  }
}
</script>
