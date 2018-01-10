<template>
  <el-card>
    <div slot="header" class="box-card-header">
      <span>{{ headerTitle }}</span>
    </div>
    <template v-if="content.length > 0">
      <el-radio-group v-model="contentChoice" v-for="(item, index) in content" :key="item">
        <el-row :gutter="5">
          <!-- RADIO BUTTON + LABEL -->
          <el-col :span="18">
            <div class="grid-content">
              <el-radio :label="index">
                <component :is="innerTable" :item="item"></component>
              </el-radio>
            </div>
          </el-col>
          <!-- DEL BUTTON -->
          <el-col :span="6">
            <div class='grid-content'>
              <el-button class="el-icon-remove" size="mini" type="danger" @click="deleteBoxItem(index)"></el-button>
            </div>
          </el-col>
        </el-row>
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
  width: 100%
}
.el-radio-group .el-radio {
  width: 100%;
  display: table;
}
.el-radio-group .el-radio__input {
  width: 10%;
  display: table-cell;
  vertical-align: middle;
}
.el-radio-group .el-radio__label {
  width: 90%;
  display: table-cell;
}
</style>
