<template>
<!--<el-container class="releated-container" direction="vertical"> -->
<virtual-list :size="200" :remain="3">

  <!-- Item Definition -->
  <el-container class="releated-item" direction="vertical" style="height: 200px"
    v-for="item in items">
    <img class="releated-item-img" :src="item.assets[0]" :alt="item.name" />
    <p class="releated-item-label">{{ item.name }}</p>
  </el-container>

</virtual-list>
<!-- </el-container> -->
</template>

<script>
import virtualList from 'vue-virtual-scroll-list'

export default {
  name: 'wear-releated-items-list',
  props: [ 'item' ],
  data() {
    return {
      items: getReleatedItems(this.item)['data'] // Defined in model.js 
    }
  },
  components: {
    'virtual-list': virtualList
  },
  methods: {
    
  }
}
</script>

<style>
.releated-container {
  height: 100%;
}

.releated-item {

}

.releated-item-img {
  width: 80%;
  height: 70%;
  display: inline;
  align-self: center;
}

.releated-item-label {
  font-size: 0.8em;
  line-height: 1em;
}
</style>
