<template>
<el-container>
  <!-- Header -->
  <el-header height="auto">
    <wear-header />
  </el-header>

  <!-- Page's main content -->
  <el-main>
  	<div class="leftContainer">
	    <div :class="filterContainer"
	      v-for="filter in filters"
	      :filter="filter">
	        <!-- Render a menu with sub items if subcategories are found -->
	        <el-dropdown :class="[verticalMenuItem, {hide: hidden}]">
	          <el-button size="medium" type="text">{{ filter.name }}<i class="el-icon-arrow-down el-icon--right"/></el-button>
	          <el-dropdown-menu slot="dropdown">
	            <el-dropdown-item v-for="subfilter in filter.subfilters"
	            :subfilter="subfilter">
	              {{ subfilter.name }}
	            </el-dropdown-item>
	          </el-dropdown-menu>
	        </el-dropdown>
	    </div>

	    <el-button class="addChart" type="primary">Add to Chart</el-button>
	</div>

	<div class="centerContainer">
		<img :src="center_img.asset" :alt="center_img.alt" width="100%" height="100%">
	</div>

	<div class="rightContainer">
		<div :class="clothesContainer"
	      v-for="item in clothes"
	      :item="item">
	      	<img :src="item.asset" width="100%" height="auto">
	    </div>

	    <div class="buttonsContainer">
	    	<el-button size="mini" type="text" class="invertCamera" type="primary">Invert Camera</el-button>
	    	<el-button size="mini" type="text" class="takePicture" type="primary">Take Picture</el-button>
	    	<el-button size="mini" type="text" class="shoppingChart" type="primary">Shopping Chart</el-button>
	    </div>
	</div>
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

export default {
  name: 'app',
  data () {
    return {
      center_img: getTryOnSample(),
      filters: getFilters()['data'], // Defined in static/js/model.js
      clothes: getClothes()['data'], // Defined in static/js/model.js
      hidden: (window.innerWidth < 768)
    }
  },
  components: {
    'wear-header': WearHeader,
    'wear-footer': WearFooter
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

.invertCamera, .takePicture, shoppingChart {
  display: inline-block;
}

</style>