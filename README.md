# Campo-Minado minimalista em JavaScript
Campo-Minado com design minimalista implementado em javascript, com diferentes tabuleiros: triangular, quadrado e hexagonal.
 
 ![Flow Game](https://github.com/alexsandertech/minimalist-minesweeper-javascript/blob/main/assetsReadme/animateGame.gif)

### Como executar em seu computador
Para executar localmente, é necessário configurar um servidor local. 
Se faz necessário a utilização de servidor pela utilização de módulos do ES6 neste projeto, pois os múdulos estão sujeitos á politica da mesma origem, logo não é possivel realizar import  via sistema de arquivos, ou de origem cruzada sem CORS header.
Reforçando, se deseja executar, é necessário configurar um servidor local, aqui algumas sugestões:
* Utilização da extensão Live Server para Visual Studio Code.
* Se tiver python instalado execute o comando na pasta do projeto:
```sh
python3 -m http.server 3000
```
* Há diversas extensões para navegadores que permitem criar um servidor local.
* Também é possivel forçar os navegadores contornarem o CORS, mas não é algo que recomendo, 
fica á seu critério e responsabilidade, este tópico é como aviso, não informarei detalhes.
### Detalhes da implementação

Em uma abordagem top-down se pode abstrair os diretórios e arquivos implementados na seguinte forma
            
            📦js
            ┣ 📂components
            ┃ ┣ 📂generic-components
            ┃ ┃ ┗ ...
            ┃ ┣ 📜createHTML.js
            ┃ ┗ 📜createSTYLE.js
            ┣ 📂modules
            ┃ ┣ 📂final-modules
            ┃ ┃ ┗ ...
            ┃ ┣ 📂home-modules
            ┃ ┃ ┗ ...
            ┃ ┣ 📂main-loop-modules
            ┃ ┃ ┗ ...
            ┃ ┣ 📂structure-modules
            ┃ ┃ ┗ ...
            ┃ ┣ 📜final.js
            ┃ ┣ 📜home.js
            ┃ ┣ 📜mainGameLoop.js
            ┃ ┗ 📜structure.js
            ┗ 📜game.js

# Minimalist Minesweeper in Javascript
## EN:
Minesweeper with minimalist design in pure javascript, with different boards: triangular, square and hexagonal.
