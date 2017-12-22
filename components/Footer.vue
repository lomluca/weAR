<template>
<footer>
  <div class="footerColumn1">
    <h4> Contact Us </h4>
    <div> <h5> Send us and email </h5> </div>
    <div> <h5> Customer service </h5> </div>
  </div>
  <div class="footerColumn2">
    <h4> Help & Info </h4>
    <div> <h5> Contact Us </h5> </div>
    <div> <h5> Shipping </h5> </div>
    <div> <h5> Payment </h5> </div>
    <div> <h5> FAQ </h5> </div>
    <div> <h5> Men's size guide </h5> </div>
    <div> <h5> Women's size guide </h5> </div>
  </div>
  <div class="footerColumn3">
    <h4> About </h4>
    <div> <h5> About weAR </h5> </div>
    <div> <h5> Safety, Security and Privacy </h5> </div>
    <div> <h5> Terms & Conditions </h5> </div>
    <div> <h5> Careers </h5> </div>
    <div> <h5> Men's size guide </h5> </div>
    <div> <h5> Women's size guide </h5> </div>
  </div>
  <div class="footerColumn4">
    <h4> Connect With Us </h4>
    <div class="social_icons"></div>
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
</style>
