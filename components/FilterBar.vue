<template>
<el-container direction="vertical">

  <h1 style="float: left">Filters</h1>

  <el-checkbox v-model="fastShipping" label="Fast Shipping" border></el-checkbox>

  <div class="slider-label">Price Range</div>
  <el-slider
    v-model="priceRange"
    range
    :max="maxPrice">
  </el-slider>

  <el-select v-model="color" multiple placeholder="Colors">
    <el-option
      v-for="item in colors"
      :key="item.value"
      :label="item.name"
      :value="item.value">
      <span style="float: left">{{ item.name }}</span>
      <div class="color-box" style="background-color: item.value;"></div>
    </el-option>
  </el-select>

  <el-select v-model="brand" multiple placeholder="Brands">
    <el-option
      v-for="br in brands"
      :key="br.id"
      :label="br.name"
      :value="br.id">
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
.slider-label {

}

.color-box {
  width: 10px;
  height: 10px;
  display: inline-block;
  background-color: #ccc;
  position: absolute;
  left: 5px;
  top: 5px;
}
</style>

