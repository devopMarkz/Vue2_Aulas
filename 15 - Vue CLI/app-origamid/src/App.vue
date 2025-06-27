<template>
  <div id="app">
    
    <HeaderGeral></HeaderGeral>
    <first-component-vue></first-component-vue>

  </div>
</template>

<script>
import FirstComponentVue from './components/FirstComponent.vue'


export default {
  name: 'App',
  components: {
    FirstComponentVue
  }
}
</script>

<style>

</style>
