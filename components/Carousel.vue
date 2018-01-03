<template>
<el-carousel indicator-position="outside">
  <el-carousel-item
    v-for="item in items"
    :item="item"
    :key="item.id" >
    <a :href="item.href"><img :src="item.asset" :alt="item.alt"></a>
  </el-carousel-item>
</el-carousel>
</template>

<script>
export default {
  name: 'wear-carousel',
  props: ['items'],
  data() {
    return {
    }
  }
}
</script>

<style>
.el-carousel__item a {
  width: 100%;
  height: 100%;
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
}
</style>
