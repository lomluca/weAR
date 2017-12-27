<template>
<el-container direction="vertical" style="padding:20px">

  <h1 style="text-align:left" class="hidden-xs-only">Filters</h1>

  <div class="slider-label" class="filter-bar-item">Price Range</div>
  <el-slider
    v-model="priceRange"
    range
    :max="_maxPrice"
    v-on:change="filterChange">
  </el-slider>

  <el-select v-model="colors" multiple placeholder="Colors" class="filter-bar-item" v-on:change="filterChange">
    <el-option
      v-for="item in _colors"
      :key="item"
      :label="item"
      :value="item">
      <span style="float: left">{{ item }}</span>
      <div class="color-box" :style="{ backgroundColor: item.value }"></div>
    </el-option>
  </el-select>

  <el-select v-model="brands" multiple placeholder="Brands" class="filter-bar-item" v-on:change="filterChange">
    <el-option
      v-for="br in _brands"
      :key="br"
      :label="br"
      :value="br">
      <span>{{ br }}</span>
    </el-option>
  </el-select>

  <el-select v-model="sizes" multiple placeholder="Sizes" class="filter-bar-item" v-on:change="filterChange">
    <el-option
      v-for="item in _sizes"
      :key="item"
      :label="item"
      :value="item">
      <span>{{ item }}</span>
    </el-option>
  </el-select>

  <el-button type="primary" v-on:click="reset">
    Reset
  </el-button>
</el-container>
</template>

<script>
export default {
  name: 'wear-filter-bar',
  props: ['_brands', '_colors', '_sizes', '_minPrice', '_maxPrice' ],
  data: function() {
    return {
      priceRange: [ this._minPrice, this._maxPrice ],
      colors: [],
      brands: [],
      sizes: []
    }
  },
  methods: {
    filterChange: function() {
      this.$emit('filter-change', this.$data.priceRange, this.$data.colors, this.$data.brands, this.$data.sizes)
    },
    reset: function() {
      this.$data.priceRange = [ this._minPrice, this._maxPrice ] 
      this.$data.colors = []
      this.$data.brands = []
      this.$data.sizes = []
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

