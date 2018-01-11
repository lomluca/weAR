<template>
<el-container>
  <!-- Header -->
  <el-header height="auto">
    <wear-header />
  </el-header>


  <!-- Main content -->
  <el-main style="overflow: initial">
    <el-row>
      <!-- Filters bar -->

      <!-- Small screens collapse filters bar -->
      <el-collapse v-model="collapseActive" class="hidden-sm-and-up">
        <el-collapse-item title="Filters" name="Filters">
          <wear-filter-bar 
            :_brands="brands" :_colors="colors" :_sizes="sizes" :_minPrice="minPrice" :_maxPrice="maxPrice" 
            @filter-change="applyFiltering" style="padding-right: 10px">
        </el-collapse-item>
      </el-collapse>

      <el-col :xs="6" :sm="8" :md="8" :lg="6" :xl="6" class="hidden-xs-only">
        <wear-filter-bar 
          :_brands="brands" :_colors="colors" :_sizes="sizes" :_minPrice="minPrice" :_maxPrice="maxPrice" 
          @filter-change="applyFiltering" style="padding-right: 10px">
      </el-col>

      <!-- Search results -->
      <el-col :xs="24" :sm="16" :md="16" :lg="18" :xl="18">
        <el-container direction="vertical">
          <h1 v-if="items && items.length > 0"  class="query-result-label">Results for: {{ query }}</h1>
          <wear-list v-if="items && items.length > 0" :items="items" />
          <p v-else>No results found</p>
        </el-container>
      </el-col>

    </el-row>
  </el-main>

  <!-- Footer -->
  <el-footer height="auto">
    <wear-footer />
  </el-footer>
</el-container>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
import WearHeader from '../../components/Header'
import WearFooter from '../../components/Footer'
import WearFilterBar from '../../components/FilterBar'
import WearList from '../../components/List'

// Get query parameters
let params = (new URL(document.location)).searchParams

let distinctValues = distinctQueryValues(MODEL)

const MODEL_BASELINE = query(params)['data']

export default {
  name: 'app',
  data () {
    return {
      collapseActive: '',
      query: params.get('q'),
      items: query(params)['data'], // defined into model.js
      brands: distinctValues.brands,
      colors: distinctValues.colors,
      sizes: distinctValues.sizes,
      minPrice: distinctValues.minPrice,
      maxPrice: distinctValues.maxPrice
    }
  },
  components: {
    'wear-header': WearHeader,
    'wear-footer': WearFooter,
    'wear-filter-bar': WearFilterBar,
    'wear-list': WearList
  },
  methods: {
    applyFiltering: function(priceRange, colors, brands, sizes) {
      this.$data.items = query({ priceRange, colors, brands, sizes }, MODEL_BASELINE)['data']
    }
  }
}
</script>

<style>
.el-header{
  box-sizing: content-box;
  padding: 0px;
}
.el-footer{
  box-sizing: content-box;
  padding: 0px;
}
.query-result-label {
  text-align: left;
}

.el-main {
  height: auto;
  overflow: initial;
}
</style>
