<template>
<el-container>
  <!-- Header -->
  <el-header height="auto" style="padding:unset">
    <wear-header />
  </el-header>

  <!-- Page's main content -->
  <el-main>
    <!-- On small screens item's property selector is collapsible -->
    <el-collapse class="collapsible-selector hidden-md-and-up" v-model="collapseActive">
      <el-collapse-item title="Pick Size and Color">
        <wear-item-property-selector :item="item" />
      </el-collapse-item>
    </el-collapse>

    <!-- Item's property selector and AR viewer -->
    <el-row>
      <el-col :md="8" :lg="6" :xl="6" class="hidden-sm-and-down">
        <wear-item-property-selector :item="item" />
      </el-col>

      <el-col :xs="24" :sm="24" :md="16" :lg="18" :xl="18">
        <wear-arcabin :item="item" />
      </el-col>
    </el-row>

    <!-- Releated Items -->
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <h1 class="releated-label">Releated Items</h1>
        <wear-list :items="releatedItems" />
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
import 'element-ui/lib/theme-chalk/display.css';
import WearHeader from '../../components/Header'
import WearFooter from '../../components/Footer'
import WearARCabin from '../../components/ARCabin'
import WearItemPropertySelector from '../../components/ItemPropertySelector'
import WearList from '../../components/List'

// Get query parameters
let params = getAllUrlParams()

let releatedItems = getReleatedItems(getItem(params['id']))['data'] // Defined in model.js

export default {
  name: 'app',
  data () {
    return {
      item: getItem(params['id'])['data'], // Defined in model.js  
      releatedItems,
      collapseActive: false
    }
  },
  components: {
    'wear-header': WearHeader,
    'wear-footer': WearFooter,
    'wear-arcabin': WearARCabin,
    'wear-item-property-selector': WearItemPropertySelector,
    'wear-list': WearList
  }
}
</script>

<style>
.el-main {
  height: auto;
  overflow: initial;
}

.releated-label {
  text-align: left;
}

.collapsible-selector {
  margin: 10px;
}
</style>
