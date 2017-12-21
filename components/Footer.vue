<template>
<el-footer>
  <h3 id="footer_msg"> {{msg}} </h3>
</el-footer>
</template>

<script>
export default {
  name: 'wear-footer',
  data: function() {
    return {
      msg: 'Contact us'
    }
  }
}
</script>

<style>
#footer_msg {
   text-align: left;
}
</style>
