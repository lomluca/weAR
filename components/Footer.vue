<template>
<footer>
  <el-row :gutter="10">
    <el-col :sm="6">
      <div class="footerColumn1">
        <div class="footerListContainer">
          <div class="footerHeader"><h4> Contact Us </h4></div>
          <ul>
            <li><el-button size="mini" type="text"> Send us an email </el-button></li>
            <li><el-button size="mini" type="text"> Customer service </el-button></li>
          </ul>
        </div>
      </div>
    </el-col>
    <el-col :sm="6">
      <div class="footerColumn2">
        <div class="footerListContainer">
          <div class="footerHeader"><h4> Help & Info </h4></div>
          <ul>
            <li><el-button size="mini" type="text"> Shipping </el-button></li>
            <li><el-button size="mini" type="text"> Payment </el-button></li>
            <li><el-button size="mini" type="text"> Size guide </el-button></li>
            <li><el-button size="mini" type="text"> FAQ </el-button></li>
          </ul>
        </div>
      </div>
    </el-col>
    <el-col :sm="6">
      <div class="footerColumn3">
        <div class="footerListContainer">
          <div class="footerHeader"><h4> About </h4></div>
          <ul>
            <li><el-button size="mini" type="text"> About weAR </el-button></li>
            <li><el-button size="mini" type="text"> Safety, Security and Privacy </el-button></li>
            <li><el-button size="mini" type="text"> Terms & Conditions </el-button></li>
          </ul>
        </div>
      </div>
    </el-col>
    <el-col :sm="6">
      <div class="footerColumn4">
        <div class="footerListContainer">
          <div class="footerHeader"><h4> Connect With Us </h4></div>
          <ul>
            <li><el-button size="mini" type="text" @click="newsletter_messagebox">Sign up for newsletter</el-button></li>
            <li><el-button size="mini" type="text"> Safety, Security and Privacy </el-button></li>
            <li><el-button size="mini" type="text"> Careers </el-button></li>
          </ul>
        </div>
      </div>
    </el-col>
  </el-row>
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
footer .footerListContainer {
  margin-left: 30px;
}
footer .footerListContainer .footerHeader {
  width: 100%
}
footer .footerListContainer .footerHeader h4 {
  float: left;
  color: #303133;
}
footer .footerListContainer ul {
  display: block;
  clear: left;
  list-style-type: none;
  padding: 0;
}
footer .footerListContainer ul li {
  display: block;
}
footer .footerListContainer ul li .el-button {
  display: block;
  color: #909399;
}
</style>
