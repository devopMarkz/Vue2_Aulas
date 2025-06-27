export default {
    name: "ListaNomes",
    props: ["lista"],
    template: `
        <ul>
            <li v-for="item in lista">
                {{item}}
            </li>
        </ul>
    `
}