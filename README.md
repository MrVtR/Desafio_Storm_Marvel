# Desafio Storm - Marvel API

## Conceito do projeto
O projeto consiste em efetuar um site responsivo que possa fazer requisições na [API criada pela a marvel](https://developer.marvel.com), sendo possível navegar pela biblioteca de personagens da Marvel. O site criado conta com três funções feitas:
1. **Lista de Personagens** - Página com a possibilidade de carregar todos os personagens da API, através de múltiplas requisições em formato de "Load More", ou seja, conforme o usuário quiser mais personagens na página, basta apertar o botão de "Carregar Mais"
2. **Filtragem de Resultados** - Função com o objetivo de pesquisar personagens que começam com a string inserida no Input de filtro, esta função é capaz de pesquisar na API toda e retornar os resultados desejados pelo usuário, sendo possível conferir os detalhes de cada personagem do filtro ao clicar no icone da sua divisão. 
3. **Detalhes do Personagem** - Página com a possibilidade de requisitar todos os principais detalhes do personagem na API, foi programado para que o usuário possa ver os seguintes itens: 
```Foto do personagem, Nome, Descrição,além dos Quadrinhos, Histórias, Séries e Eventos que o personagem participa```
  
## Pré-requisitos e recursos utilizados
Para o projeto ser realizado, foi utilizado as seguintes dependências para ReactJS:
1. [ReactJS: 0.17.1](https://github.com/facebook/react/releases)
2. [React-router-dom: 5.2.0](https://reactrouter.com/web/guides/quick-start)
3. [Node Sass: 4.14.1](https://www.npmjs.com/package/node-sass/v/4.14.1)
4. [Blueimp-md5: 2.18.0](https://www.npmjs.com/package/blueimp-md5)
5. [Axios: 0.21.1](https://github.com/axios/axios)
  
## Passo a passo
1. Estudei o esboço do projeto com base nas aulas e projetos feitos durante as aulas do [Estartando Devs](https://estartandodevs.com.br)
2. Criei o projeto e mapeei as rotas através do React-router-dom, além de fazer a configuração dos requests da API com o Axios e Blueimp-md5
3. Criei os componentes comuns que poderiam ser utilizados no projeto todo
4. Montei as páginas principais e estilizei usando Sass
5. Efetuei um Code Review em cada um dos componentes e páginas para buscar bugs e otimizar os códigos produzidos

## Instalação
Para instalar as dependências do projeto localmente, utilize a instrução abaixo:
1. Digite no terminal ```yarn install``` e espere pela instalação das dependências, após isso, siga para a etapa de [Execução](#Execução)

## Execução
Para executar o programa é necessário instalar as dependências utilizadas, que estão no package.json e após isso executar o projeto,para estar operações, utilize os comandos abaixo:
1. Digite no terminal ```yarn start``` para rodar o projeto em modo desenvolvimento.
2. Caso queira testar a aplicação em um ambiente de produção, utilize o [Deploy](https://marvel-api-mrvtr.netlify.app) totalmente funcional feito durante o projeto

## Autores
* Vítor Ribeiro ([MrVtR](https://github.com/MrVtR))

## Imagens/screenshots

![Imagem](https://github.com/MrVtR/Desafio_Storm_Marvel/blob/main/imagesGithub/home.PNG)

---
![Imagem](https://github.com/MrVtR/Desafio_Storm_Marvel/blob/main/imagesGithub/loading.PNG)

---
![Imagem](https://github.com/MrVtR/Desafio_Storm_Marvel/blob/main/imagesGithub/Detail.PNG)

---
![Imagem](https://github.com/MrVtR/Desafio_Storm_Marvel/blob/main/imagesGithub/filtro.PNG)
