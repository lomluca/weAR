<template>
  <div>
    <wear-header /> 
    <wear-nav />
  </div>
</template>

<script>
import WearHeader from '../../components/Header'
import WearNav from '../../components/Nav'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'wear-header': WearHeader,
    'wear-nav': WearNav
  }
}
</script>


