<template>

    <div class="modal">
        <slot name="logo"></slot>
        <slot></slot>
        <slot name="navigator"></slot>
    </div>

</template>

<script>
export default {
    name: 'ModalPrincipal',
    data(){
        return{

        }
    }
}
</script>

<style>
    .modal{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
</style>