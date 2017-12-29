<template>
<el-container>
  <!-- Header -->
  <el-header height="auto">
    <wear-header />
  </el-header>

  <!-- Page's main content -->
  <el-main>
    <!-- Medium/Large displays -->
    <el-row class="hidden-sm-and-down">
      
      <el-col :md="4" :lg="3" :xl="2">
        <wear-item-property-selector :item="item" />
      </el-col>
      
      <el-col :md="16" :lg="18" :xl="20">
        <wear-arcabin :item="item" />
      </el-col>

      <el-col :md="4" :lg="3" :xl="2">
        <wear-releated-items-list :item="item" />
      </el-col>
    
    </el-row>

    <!-- Small displays -->
    <el-row class="hidden-md-and-up">
      
      <el-col :xs="24" :sm="24">
        <wear-arcabin :item="item" />
      </el-col>
      
      <el-col :xs="12" :sm="12">
        <wear-item-property-selector :item="item" />
      </el-col>

      <el-col :xs="12" :sm="12">
        <wear-releated-items-list :item="item" />
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
import WearHeader from '../../components/Header'
import WearFooter from '../../components/Footer'
import WearARCabin from '../../components/ARCabin'
import WearItemPropertySelector from '../../components/ItemPropertySelector'
import WearReleatedItemsList from '../../components/ReleatedItemsList'

// Get query parameters
let params = (new URL(document.location)).searchParams

export default {
  name: 'app',
  data () {
    return {
      item: getItem(params.get('id'))['data'] // Defined in model.js  
    }
  },
  components: {
    'wear-header': WearHeader,
    'wear-footer': WearFooter,
    'wear-arcabin': WearARCabin,
    'wear-item-property-selector': WearItemPropertySelector,
    'wear-releated-items-list': WearReleatedItemsList
  }
}
</script>

<style>

.el-main {
  height: 100%;
  overflow: initial;
}

.verticalMenuItem {
  float: left;
  clear: left;
}

.hide {
  display: none;
}

.leftContainer, .rightContainer, .centerContainer{
  height: 100%;
  display: inline-block;
  vertical-align: top;
}

.leftContainer {
  width: 15%;
  margin-right: 3%;
}

.centerContainer {
  width: 55%;
}

.rightContainer {
  width: 20%;
  overflow: auto;
}

.addChart {
  margin-top: 10%;
}

.buttonsContainer {
  width: 100%;
}

.invertCamera, .takePicture, .shoppingChart {
  display: inline-block;
}

</style>
