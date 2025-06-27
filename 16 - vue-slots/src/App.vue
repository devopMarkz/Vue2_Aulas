<template>
  <div id="app">
    <modal-principal>
      <template v-slot:logo>
        <h2>Logo</h2>
      </template>

      <button>Adicionar</button>

      <template v-slot:navigator>
        <ul>
          <li>Home</li>
          <li>Sobre nós</li>
          <li>Contato</li>
        </ul>
      </template>
    </modal-principal>

    <ListaElementos :pessoas="pessoas" v-slot="{pessoa}">
      {{ pessoa }}
    </ListaElementos>

    <button @click="ativo = !ativo">
      Ativar
    </button>

    <transition mode="in-out">
      <p v-show="ativo">Ativar?</p>
    </transition>

  </div>
</template>

<script>

import ModalPrincipal from './components/ModalPrincipal.vue'

  export default {
    name: 'App',

    components: {
      ModalPrincipal,
      ListaElementos: function(){
        return import('./components/ListaElementos.vue');
      }
    },

    data(){
      return{
        pessoas: [
          new Pessoa(1, 'Marcos', 22),
          new Pessoa(2, 'Vitor', 20),
          new Pessoa(3, 'João Felipe', 28),
          new Pessoa(4, 'Felippe Saraiva', 24),
          new Pessoa(5, 'Matheus Vaz', 24)
        ],
        ativo: false
      }
    }
  }

  class Pessoa {
      constructor(id, nome, idade) {
        this.id=id;
        this.nome=nome;
        this.idade=idade;
      }
    }
</script>

<style>

</style>
