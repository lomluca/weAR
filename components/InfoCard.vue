<template>
  <el-card>
    <div slot="header" class="box-card-header">
      <span>{{ headerTitle }}</span>
    </div>
    <template v-if="content.length > 0">
      <el-table
      ref="singleTable"
      :data="content"
      highlight-current-row
      @current-change="handleCurrentChange"
      :show-header="false"
      size="mini"
      style="width: 100%">
      <el-table-column
      :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <component :is="innerTable" :item="scope.row"></component>
        </template>
      </el-table-column>
      <el-table-column
        width="70">
        <template slot-scope="scope">
          <el-button class="el-icon-remove" size="mini" type="danger" @click="deleteBoxItem(scope.$index)"></el-button>
        </template>
      </el-table-column>
      </el-table>
      <hr>
    </template>
    <el-button class="el-icon-circle-plus" size="mini" type="success" @click="visible = true">New</el-button>
  </el-card>
</template>

<script>
export default {
  name: 'wear-info-box',
  props: ['headerTitle', 'getContent', 'deleteItem', 'visible','innerTable', 'selected'],
  data: function() {
    return {
      content: this.getContent()
    }
  },
  /*
  mounted: function() {
      if(this.content[0])
      this.$refs.singleTable.setCurrentRow(this.content[0]);
  },*/
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
    },
    handleCurrentChange(val) {
      this.$emit('update:selected', val);
    }
  }
}
</script>

<style>

</style>
