<template>

    <header>
        <h2>Logo</h2>

        <nav>
            <ul>
                <li>Home</li>
                <li>Sobre nós</li>
                <li>Carrinho</li>
            </ul>
        </nav>
    </header>
    
</template>

<script>
export default {
    data(){
        return{

        }
    }    
}
</script>

<style>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 30px;
        background: rgba(1, 1, 1, .2);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    nav ul{
        list-style-type: none;
        display: flex;
        gap: 20px;
    }

    nav ul li{
        font-weight: bold;
    }
</style>