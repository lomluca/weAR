<template>
<el-container direction="vertical" style="padding:20px">

  <h1 style="text-align:left" class="hidden-xs-only">Filters</h1>

  <el-checkbox v-model="fastShipping" label="Fast Shipping" border class="filter-bar-item"></el-checkbox>

  <div class="slider-label" class="filter-bar-item">Price Range</div>
  <el-slider
    v-model="priceRange"
    range
    :max="maxPrice">
  </el-slider>

  <el-select v-model="color" multiple placeholder="Colors" class="filter-bar-item">
    <el-option
      v-for="item in colors"
      :key="item.value"
      :label="item.name"
      :value="item.value">
      <span style="float: left">{{ item.name }}</span>
      <div class="color-box" :style="{ backgroundColor: item.value }"></div>
    </el-option>
  </el-select>

  <el-select v-model="brand" multiple placeholder="Brands" class="filter-bar-item">
    <el-option
      v-for="br in brands"
      :key="br.id"
      :label="br.name"
      :value="br.id">
      <span>{{ br.name }}</span>
    </el-option>
  </el-select>

</el-container>
</template>

<script>
let minPrice = 0.0
let maxPrice = 270.0

export default {
  name: 'wear-filter-bar',
  data: function() {
    return {
      minPrice,
      maxPrice,
      fastShipping: false,
      priceRange: [minPrice, maxPrice],
      color: null,
      brand: null,
      colors: getColors()['data'], // available in model.js
      brands: getBrands()['data'] // available in model.js
    }
  }
}
</script>

<style>
.filter-bar-item {
  margin-bottom: 10px;
}

.slider-label {

}

.color-box {
  width: 10px;
  height: 10px;
  display: inline-block;
  position: absolute;
  left: 5px;
  top: 10px;
}
</style>

