export default {
    name: "FormularioPessoa",

    data(){
        return {
            input_nome: '',
            input_idade: 0
        }
    },

    template:`
        <form>
            <label for="nome">Nome</label>
            <input type="text" id="nome" name="nome" v-model="input_nome">

            <label for="idade">Idade</label>
            <input type="number" id="idade" name="idade" v-model="input_idade">

            <button @click.prevent="enviarDados">Enviar</button>
        </form>
    `,

    methods: {
        enviarDados(){
            let pessoa = {
                nome: this.input_nome,
                idade: this.input_idade
            };

            this.$emit('emissao-pessoa', pessoa);

            this.input_nome = '';
            this.input_idade = 0;
        }
    }
}