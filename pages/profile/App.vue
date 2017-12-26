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
        <div class="box">
          <img class="small" src="/assets/widget-personal-info1.png">
          <!--<img class="profile-img":src="sourceImg" v-if="showImg"></img>
          <input type="file" accept="image/*"@change="changePic($event)"></input>-->
          <ul class="list-info">
            <li><span class="ligth-text">fullname</span> <span class="bold-text">{{ fullname }}</span></li>
            <li><span class="ligth-text">email</span> <span class="bold-text">{{ mail }}</span></li>
            <li><span class="ligth-text">birthday</span> <span class="bold-text">{{ birthday }}</span></li>
            <li><span class="ligth-text">address</span> <span class="bold-text">{{ address }}</span></li>
          </ul>
          <el-button type="primary" @click="dialogFormVisible = true">Edit</el-button>
          <el-dialog title="Edit your personal info" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="fullname" :label-width="formLabelWidth">
                <el-input v-model="form.fullname" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="email" :label-width="formLabelWidth">
                <el-input v-model="form.email" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="birthday" :label-width="formLabelWidth">
                <el-input v-model="form.birthday" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="address" :label-width="formLabelWidth">
                <el-input v-model="form.address" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">Cancel</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
            </span>
          </el-dialog>
        </div>
      </el-col>
      <el-col :sm="16">
        <div class="box">
          <img class="small" src="/assets/credit-card-logo.png">
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24">
        <div class="box">
          <p class="block-title">ORDERS</p>
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
      birthday: newBirthday,
      dialogFormVisible: false,
      form: {
          fullname: this.fullname,
          email: this.mail,
          birthday: newBirthday,
          address: this.address
      },
      formLabelWidth: '120px',
    }
  },
  computed: {
    address: function() {
      return localStorage.address
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
  img.small {
    width: 75px;
    height: 75px;
    display: block;
    margin: auto;
  }
  .el-header{
    box-sizing: content-box;
    padding: 0px;
  }
  .el-footer{
    box-sizing: content-box;
    padding: 0px;
  }

  ul.list-info {
    list-style-type: none;
    text-align: left;
  }

  span.light-text {
    font-family: "Helvetica Neue";
    font-size: 14px;
    font-style: italic;
    font-variant: normal;
    font-weight: 400;
    line-height: 20px;
  }

  .block-title {
    font-family: "Helvetica Neue";
    font-size: 24px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 26px;
  }

  span.bold-text {
    font-family: "Helvetica Neue";
    font-size: 14px;
    font-style: normal;
    font-variant: normal;
    font-weight: 500;
    line-height: 15px;
  }

  .box {
    background-color: whitesmoke;
    padding: 10px;
    margin: 5px;
    min-height: 36px;
    border: 1px solid;
    border-color: rgb(202, 200, 204);
    box-shadow: 0 4px 5px 1px rgb(193, 186, 196)
  }

</style>
