# Cine Painel - Organizador de Obras Cinematográficas🎭
## Criado e produzido por Eduardo Fontes (<a src="https://github.com/DuuhZero">DuuhZero</a>)

## 📑Sumário
- [Objetivo do Projeto](#objetivo-do-projeto)
- [Tecnologias Utilizadas](#tecnologias)
- [Video do Projeto](#video-projeto)
- [Tutorial de Instalação](#instalacao)

## 🚀Objetivo do Projeto <a name="objetivo-do-projeto"></a>
<p> Este projeto tem como objetivo a solução de um problema do cotidiano, que seria a organização de conteúdos cinematográficos, facilitando o entretenimento e poupando tempo do usuário. O foco seria de utilizar a aplicação como meio de armazenar futuros conteúdos que deseja consumir, evitando esquecer de alguma obra por causa de uma anotação perdida ou falha da memória.</p>

## 🖥️Tecnologias Utilizadas <a name="tecnologias"></a>
<div align="center">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/Node.Js-C1FE01?style=for-the-badge&logo=Node.JS">
<img src="https://img.shields.io/badge/Express.js-F9DE1C?style=for-the-badge&logo=Express">
</div>

## 📌Video do Projeto <a name="video-projeto"></a>
<img src="docs/CinePainelV1.gif">

## 🌐Tutorial de Instalação <a name="instalacao"></a>

1. [Node.JS](https://nodejs.org/en/download/): Será necessário a utilização do Node junto ao Nodemon.JS
2. [Git](https://git-scm.com/downloads): Utilize o git para poder clonar o repositório.

<details>
  <summary><b>Clonando Repositório</b></summary>

  Para clonar o projeto e utilizá-lo em seu computador, siga os seguintes passos:
  
  Crie uma pasta onde deseja armazenar nosso projeto, e então abra-a e clique no url da pasta, após isto, escreva em cima do url `cmd`, para abrir o prompt de comando. E então execute o comando abaixo:
  
  > _Obs.: Caso você esteja no LINUX, a parte de escrever "cmd" não irá funcionar, então clique com o botão direito na pasta que você criou e selecione a opção "Abrir no terminal"_

  
  ```
  git clone https://github.com/DuuhZero/Cine_Painel.git
  ``` 

</details>
<br>
<details>
  <summary><b>Instalando Dependencias</b></summary>
  Após a instalação do Node.Js, você terá acesso ao "npm" que será utilizado para instalar o Nodemon e o Express.

  O `Nodemon` é responsável por atualizar a página de maneira dinamica e o `Express` por criar um servidor local onde a aplicação possa rodar.

  Execute os comandos abaixo:

  > _Obs.: Os comandos serão iguais tanto para OS Windows ou Linux, basta selecionar o `cmd` ou o `terminal`_

  ```
  npm install express --save
  ```

  ```
  npm install nodemon -g
  ```

</details>

<details>
  <summary><b>Rodando Projeto</b></summary>
  Após a instalação das dependencias, você tem tudo necessário para rodar a aplicação.

  Estando dentro do diretório Cine Painel (`/Cine_Painel`) no seu cmd ou terminal, basta executar o comando abaixo:

  ```
  nodemon app.js
  ```

  Após executado irá ser dito `"Servidor Iniciado com sucesso"`.
  
  Agora em seu navegador basta apenas escrever na aba de endereço este URL:

  ```
  localhost:3000/
  ```

  Caso queira parar o projeto, apenas digite `Ctrl+C` no cmd ou terminal que o serviço será encerrado.

  > _O site utiliza a tecnologia de LocalStorage, então sua lista não irá ser apagada após desligar o programa, só irá ocorrer isto caso seja limpado o histórico de Cookies que o seu navegador salvou da página Cine Painel_.

</details>

### Bom proveito do Cine Painel, espero que não se esqueça de mais nenhum Filme ou Série! 🎭



