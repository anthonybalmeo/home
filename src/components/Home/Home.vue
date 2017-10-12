<template>
  <section class="home__container">
      <h1>TITLE: {{pageData.title}}</h1>
      <p>{{userInfo.name}}</p>
      <p>{{userInfo.email}}</p>
      <p>{{userInfo.phone}}</p>
      <p>{{userInfo.address}}</p>
  </section>
</template>

<script>

export default {
  name: 'home',
  computed: {
    pageData () {
      return this.$store.state.pageData
    },
    userInfo () {
      return this.$store.state.userInfo
    }
  }
}
</script>

<style lang="scss" src="../../styles/app.scss">
</style>
