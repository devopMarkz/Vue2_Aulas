<template>
  <h1>Usuário {{ id }}</h1>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    computed: {
        id(){
            return this.$route.params.id;
        }
    }
}
</script>

<style>

</style>