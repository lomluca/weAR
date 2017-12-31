<template>
  <el-card class="box-card">
    <div slot="header" class="box-card-header">
      <span>{{ headerTitle }}</span>
    </div>
    <template v-if="content.length > 0">
      <el-radio-group v-model="contentChoice" v-for="(item, index) in content" :key="item">
        <el-radio :label="index">
          <component :is="innerTable" :item="item"></component>
        </el-radio>
        <div class='button-wrapper'>
          <el-button class="el-icon-remove" size="mini" type="danger" @click="deleteBoxItem(index)"></el-button>
        </div>
      </el-radio-group>
      <hr>
    </template>
    <el-button class="el-icon-circle-plus" size="mini" type="success" @click="visible = true">New</el-button>
  </el-card>
</template>

<script>
export default {
  name: 'wear-info-box',
  props: ['headerTitle', 'getContent', 'deleteItem', 'visible','innerTable'],
  data: function() {
    return {
      content: this.getContent(),
      contentChoice: 0
    }
  },
  watch: {
    visible: function() {
      // When the internal value changes, we $emit an event
      // v-model will automatically update the parent value
      this.$emit('update:visible', this.visible);
      if(!this.visible)
        this.content = this.getContent();
    }
  },
  methods: {
    deleteBoxItem(index) {
      this.deleteItem(index);
      this.content = this.getContent();
    }
  }
}
</script>

<style>
.el-radio-group {
  display: table;
  width: 100%;
}
.el-radio-group .el-radio {
  float: left;
}
.el-radio-group .el-radio .component {
  width: 100%;
}
.button-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.button-wrapper .el-button {
  vertical-align: middle;
  display: block;
  margin: 0 auto;
}
</style>
