<template>
<el-container direction="vertical">
  <wear-list-item v-for="item in items" :item="item" />
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
