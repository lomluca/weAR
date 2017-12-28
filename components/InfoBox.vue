<template>
  <el-card class="box-card">
    <div slot="header" class="box-card-header">
      {{ headerContent }}
    </div>
    <template v-if="bodyContent.length > 0">
      <el-radio-group v-model="choice" v-for="item in bodyContent" :key="item">
        <el-radio :label="item">{{ item }}</el-radio>
        <el-button class="el-icon-remove" size="mini" type="danger"></el-button>
      </el-radio-group>
      <hr>
    </template>
    <el-button class="el-icon-circle-plus" size="mini" type="success">New</el-button>
  </el-card>
</template>

<script>
export default {
  name: 'wear-info-box',
  props: [ '_headerContent', '_bodyContent' ],
  data: function() {
    return {
      headerContent: this._headerContent,
      bodyContent: this._bodyContent,
      choice: this._bodyContent[0]
    }
  }
}
</script>

<style>
.box-card .el-radio-group {
  width: 100%;
}
.box-card .el-radio-group .el-radio {
  float: left;
}
.box-card .el-button {
  float: right;
}
</style>
