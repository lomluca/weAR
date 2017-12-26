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
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
        <wear-filter-bar @filterChange="applyFiltering" style="padding-right: 10px">
      </el-col>

      <!-- Search results -->
      <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
        <el-container direction="vertical">
          <h1 class="query-result-label">Results for: {{ query }}</h1>
          <wear-list :items="items" />
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
import WearHeader from '../../components/Header'
import WearFooter from '../../components/Footer'
import WearFilterBar from '../../components/FilterBar'
import WearList from '../../components/List'

// Get query parameters
let params = (new URL(document.location)).searchParams

export default {
  name: 'app',
  data () {
    return {
      query: params.get('q'),
      items: query(params)['data'] // defined into model.js
    }
  },
  components: {
    'wear-header': WearHeader,
    'wear-footer': WearFooter,
    'wear-filter-bar': WearFilterBar,
    'wear-list': WearList
  },
  methods: {
    applyFiltering: function(p) {
      // Do nothing for now
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
