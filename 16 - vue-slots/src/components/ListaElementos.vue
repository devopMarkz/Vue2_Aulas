<template>
    <ul>
        <li v-for="pessoa in pessoas" :key="pessoa.id">
            <slot :pessoa="pessoa"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props: {
        pessoas: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
</style>