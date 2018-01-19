<template>
<el-container direction="vertical">
  <el-row>
    <el-col v-for="item in items" :xs="24" :sm="12" :md="8" :lg="8" :xl="4">
      <wear-list-item :item="item" />
    </el-col>
  </el-row>
</el-container>
</template>

<script>
import WearListItem from './ListItem'

export default {
  name: 'wear-list',
  props: [ 'items' ],
  data: function() {
    return {
    }
  },
  components: {
    'wear-list-item': WearListItem
  }
}
</script>

<style>
</style>
