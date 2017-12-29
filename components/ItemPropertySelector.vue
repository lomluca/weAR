<template>
<el-container direction="vertical">

  <!-- Item's name -->
  <h1>{{ item.name }}</h1>

  <!-- Color selector -->
  <el-select v-model="color" placeholder="Color" class="property-color" v-on:change="propertyChange">
    <el-option
      v-for="c in item.colors"
      :key="c"
      :label="c"
      :value="c">
      <span style="float: left">{{ c }}</span>
    </el-option>
  </el-select>

  <!-- Size selector -->
  <el-select v-model="size" placeholder="Size" class="property-size" v-on:change="propertyChange">
    <el-option
      v-for="s in item.sizes"
      :key="s"
      :label="s"
      :value="s">
      <span>{{ s }}</span>
    </el-option>
  </el-select>


  <!-- Bottom bar -->
  <el-container class="property-bottombar" direction="vertical">
    <p class="property-price">{{ item.price }} €</p>
    <el-button type="primary">Add to Cart</el-button>
  </el-container>

</el-container>
</template>

<script>
export default {
  name: 'wear-item-property-selector',
  props: [ 'item' ],
  data() {
    return {
      color: this.item.colors[0],
      size: this.item.sizes[0]
    }
  },
  methods: {
    propertyChange() {
      this.$emit('property-change', this.$data.color, this.$data.size)
    }
  }
}
</script>

</style>
.property-color {
}

.property-size {
}

.property-bottombar {
}

.property-price {
}
</style>
