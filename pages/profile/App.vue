<template>
<el-container>
  <!-- Header -->
  <el-header height="auto">
    <wear-header />
  </el-header>


  <!-- Main content -->
  <el-main style="overflow: initial">
    <el-row :gutter="10">
      <el-col :sm="8">
        <div class="grid-content bg-purple">
          <p>Personal data</p>
          <ul>
            <li>fullname: {{ fullname }}</li>
            <li>email: {{ mail }}</li>
            <li>birthday: {{ birthday }}</li>
          </ul>
        </div>
      </el-col>
      <el-col :sm="16">
        <div class="grid-content bg-purple-light">
          <p>Payment options</p>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24">
        <div class="grid-content bg-purple">
          <p>Orders</p>
        </div>
      </el-col>
    </el-row>
  </el-main>

  <!-- Footer -->
  <el-footer height="auto">
    <wear-footer />
  </el-footer>
</el-container>
</template>

<script>
import WearHeader from '../../components/Header'
import WearFooter from '../../components/Footer'

var fieldsBirthday = localStorage.birthday.split(" ");
fieldsBirthday.splice(4, 3) //remove time, gmt and cet
fieldsBirthday.splice(0, 1) //remove day name
var newBirthday = fieldsBirthday.join(" ")

export default {
  name: 'app',
  data () {
    return {
      fullname: localStorage.fullname,
      mail: localStorage.email,
      birthday: newBirthday
    }
  },
  components: {
    'wear-header': WearHeader,
    'wear-footer': WearFooter
  },
  methods: {

  },
  beforeMount() {
    if(localStorage.loggedIn != 1) {
      window.location.href = 'index.html'
    }
  }
}
</script>

<style>
  .el-header{
    box-sizing: content-box;
    padding: 0px;
  }
  .el-footer{
    box-sizing: content-box;
    padding: 0px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
