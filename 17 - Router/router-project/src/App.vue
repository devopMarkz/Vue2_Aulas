<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/cursos">Cursos</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
</style>
