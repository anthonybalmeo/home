<template>
  <router-view/>
</template>

<script>
import homeData from './static/fixtures/home-data.json'

export default {
  name: 'app',
  data () {
    return {
      homeData
    }
  }
}
</script>

<style lang="scss" src="./styles/app.scss">
</style>
