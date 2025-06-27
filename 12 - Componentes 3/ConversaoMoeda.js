export default {
    name: 'ConversaoMoeda',
    data(){
        return {
            valorEmReal: 0,
            valorEmDolar: 5.51
        }
    },
    template: 
    `<div>
        <input type="text" v-model="valorEmReal">
        <p>{{total}}</p>
    </div>`,
    computed: {
        total(){
            return this.valorEmReal * this.valorEmDolar;
        }
    }
}