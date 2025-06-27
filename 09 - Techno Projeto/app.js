const vm = new Vue({

    el: "#app",

    data: {
        produtos: [],
        produto: false,
        carrinho: [],
        mensagemAlerta: '',
        alertaAtivo: false,
        carrinhoAtivo: false
    },

    filters: {
        numeroPreco(valor){
            return valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
        }
    },

    methods: {
        buscarProdutos(){
            fetch("http://127.0.0.1:5500/api/produtos.json")
            .then(response => response.json())
            .then(data => this.produtos = data);
        },

        buscarProduto(id){
            fetch(`./api/produtos/${id}/dados.json`)
            .then(response => response.json())
            .then(data => this.produto = data);
        },

        fecharModal({target, currentTarget}){
            if(target === currentTarget){
                this.produto = false;
            }
        },

        clickForaCarrinho({target, currentTarget}){
            if(target === currentTarget){
                this.carrinhoAtivo = false;
            }
        },

        abrirModal(id){
            this.buscarProduto(id);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        },

        adicionarItem(){
            this.produto.estoque--;
            const {id, nome, preco} = this.produto;
            this.carrinho.push({id, nome, preco});
            this.ativarAlerta(`${nome} foi adicionado ao carrinho!`);
        },

        ativarAlerta(mensagem){
            this.mensagemAlerta = mensagem;
            this.alertaAtivo = true;
            setTimeout(() => {
                this.alertaAtivo = false;
            }, 2000);
        },

        removerItem({nome}, index){
            this.produto.estoque++;
            this.carrinho.splice(index, 1);
            this.ativarAlerta(`${nome} foi removido do carrinho!`);
        },

        carregarCarrinho(){
            if(window.localStorage.carrinho){
                this.carrinho = JSON.parse(window.localStorage.carrinho);
            }
        },

        router(){
            const hash = document.location.hash;
            if(hash){
                this.buscarProduto(hash.replace('#', ''));
            }
        },

        compararEstoque(){
            const items = this.carrinho.filter(item => {
                if(item.id === this.produto.id){
                    return true;
                }
            });
            this.produto.estoque -= items.length;
        }
    },

    created(){
        this.buscarProdutos();
        this.router();
        this.carregarCarrinho();
    },

    computed: {
        carrinhoTotal(){
            let sum = 0;
            this.carrinho.forEach(element => sum += element.preco);
            return sum;
        }
    },

    watch: {
        carrinho(){
            window.localStorage.carrinho = JSON.stringify(this.carrinho);
        },
        produto(){
            document.title = this.produto.nome || "Techno";
            const hash = this.produto.id || "";
            history.pushState(null, null, `#${hash}`);
            if(this.produto){
                this.compararEstoque();
            }
        }
    }
});