"use strict";
class GerenciadorDeFilmes {
    constructor() {
        this.filmes = [];
        this.generocontainer = {};
        this.titulocontainer = {};
        this.cardcontainer = document.getElementById('card-container');
        this.modal = document.getElementById('modal');
        this.add = document.getElementById('add');
        this.closemodal = document.getElementById('close-modal');
        this.seletorGenero = document.getElementById('seletor');
        this.movieform = document.getElementById('cine-form');
        this.initcontainer();
        this.add.addEventListener('click', () => this.abrirmodal());
        this.closemodal.addEventListener('click', () => this.fecharmodal());
        window.addEventListener('click', (event) => this.fecharmodalexterno(event));
        this.movieform.addEventListener('submit', (event) => this.adicionarfilme(event));
        this.carregarFilmes();
    }
    initcontainer() {
        ['acao', 'drama', 'comediaromantica', 'ficcao', 'terror', 'animacao', 'comedia'].forEach(genero => {
            const container = document.getElementById(`card-container-${genero}`);
            const titulo = document.getElementById(`title-${genero}`);
            if (container && titulo) {
                this.generocontainer[genero] = container;
                this.titulocontainer[genero] = titulo;
                this.titulocontainer[genero].style.display = 'none';
            }
        });
    }
    abrirmodal() {
        this.modal.style.display = 'block';
    }
    fecharmodal() {
        this.modal.style.display = 'none';
    }
    fecharmodalexterno(event) {
        if (event.target === this.modal) {
            this.fecharmodal();
        }
    }
    adicionarfilme(event) {
        event.preventDefault();
        const nomeInput = document.getElementById('nome');
        const imagemInput = document.getElementById('imagem');
        const generoSelecionado = this.seletorGenero.value;
        if (generoSelecionado === '') {
            alert(`Por favor, selecione um gênero.`);
            return;
        }
        const novoFilme = {
            nome: nomeInput.value,
            imagemURL: imagemInput.value,
            genero: generoSelecionado
        };
        this.filmes.push(novoFilme);
        this.salvarFilmes();
        this.criarCartao(novoFilme);
        this.movieform.reset();
        this.fecharmodal();
    }
    criarCartao(filme) {
        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement('img');
        img.src = filme.imagemURL;
        img.alt = filme.nome;
        const titulo = document.createElement('h3');
        titulo.textContent = filme.nome;
        const removerBotao = document.createElement('button');
        removerBotao.textContent = 'X';
        removerBotao.classList.add('remover-botao');
        removerBotao.addEventListener('click', () => this.removerFilme(filme, card));
        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(removerBotao);
        const containerGenero = this.generocontainer[filme.genero];
        const titulocontainer = this.titulocontainer[filme.genero];
        if (containerGenero) {
            containerGenero.appendChild(card);
            titulocontainer.style.display = containerGenero.children.length > 0 ? 'block' : 'none';
        }
    }
    removerFilme(filme, card) {
        this.filmes = this.filmes.filter(f => f !== filme);
        this.salvarFilmes();
        const containerGenero = this.generocontainer[filme.genero];
        const titulocontainer = this.titulocontainer[filme.genero];
        if (containerGenero) {
            containerGenero.removeChild(card);
            titulocontainer.style.display = containerGenero.children.length > 0 ? 'block' : 'none';
        }
    }
    salvarFilmes() {
        localStorage.setItem('filmes', JSON.stringify(this.filmes));
    }
    carregarFilmes() {
        const filmesArmazenados = localStorage.getItem('filmes');
        if (filmesArmazenados) {
            this.filmes = JSON.parse(filmesArmazenados);
            this.filmes.forEach(filme => this.criarCartao(filme));
        }
    }
}
const gerenciadordeFilmes = new GerenciadorDeFilmes();
