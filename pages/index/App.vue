<template>
  <WearHeader/>
  <WearNav/>
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
    WearHeader, 
    WearNav
  }
}
</script>


