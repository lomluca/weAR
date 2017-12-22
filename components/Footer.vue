<template>
<footer>
  <div class="footerColumn1">
    <h4> Contact Us </h4>
    <div> <h5> Send us and email </h5> </div>
    <div> <h5> Customer service </h5> </div>
  </div>
  <div class="footerColumn2">
    <h4> Help & Info </h4>
    <div> <h5> Shipping </h5> </div>
    <div> <h5> Payment </h5> </div>
    <div> <h5> Size guide </h5> </div>
    <div> <h5> FAQ </h5> </div>
  </div>
  <div class="footerColumn3">
    <h4> About </h4>
    <div> <h5> About weAR </h5> </div>
    <div> <h5> Safety, Security and Privacy </h5> </div>
    <div> <h5> Terms & Conditions </h5> </div>
  </div>
  <div class="footerColumn4">
    <h4> Connect With Us </h4>
    <div><a href="#" @click="newsletter_messagebox"><h5>Sign up for newsletter</h5></a></div>
    <div class="social_icons"></div>
    <div> <h5> Careers </h5> </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'wear-footer',
  data: function() {
    return {
      msg: 'Contact us'
    }
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
          message: 'Thanks for joining our community'
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
footer {
  width: 100%;
  height: 100%;
  font-family: Helvetica, sans-serif;
  font-size: 12px;
}
/* Footer columns */
footer .footerColumn1, footer .footerColumn2, footer .footerColumn3, footer .footerColumn4 {
  display: inline-block;
  vertical-align: top;
  float: left;
  width: 25%
}
footer h4 {
  color: #303133
}
footer h5 {
  color: #909399;
  font-size: 80%
}

footer a {
  text-decoration: none;
}
</style>
