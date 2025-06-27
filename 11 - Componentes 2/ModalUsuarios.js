export default {
    name: 'ModalUsuarios',
    props: {
        lista: {
            type: Array,
            required: true
        }
    },
    template: `
        <ul>
            <li v-for="item in lista"> {{item}} </li>
        </ul>
    `
}