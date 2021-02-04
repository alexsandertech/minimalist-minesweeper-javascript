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

Em uma abordagem top-down se pode abstrair os diretórios e arquivos de códigos codificados na seguinte forma:

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
#### import { game } from 'js/game.js'

A função **game()** que engloba todo jogo, mantendo-o em loop, responsável por invocar as principais funções do jogo, sendo elas:

* Função *home()* from 'js/modules/home.js'
    Responsável por gerar a janela inicial de apresentação do jogo, junto com as opções de menu. 
    Retorna para função *game()* todos valores de configurações setadas no menu, como: formato do tabuleiro, dificuldade e tema de coloração geral.

* Função *inicializeBoard()* from 'js/modules/structure.js'
    Responsável por gerar a estrutura de dados do jogo, bem como inicializar com valores de acordo com as configurações recebidas.
    Retorna um objeto contendo a estrutura do tabuleiro inicializado, preenchido com bombas, números, e junto de um segundo tabuleiro para interação com o jogador, apenas para vizualização.
    
* Função *mainGameLoop()* from 'js/modules/mainGameLoop.js'
    Responsável por imprimir o tabuleiro de vizualização, e revelar as celulas de acordo com o clique do usuário, em sintese tem o loop principal de jogo.
    Retorna uma variável resultado, podendo ser: vitória, derrota, restart, menu. Cada uma com uma ação na função *final()*

* Função *final()* from 'js/modules/final.js'
    Recebe como argumento uma variável contendo um valor de ação a ser realizado, podendo ser:
    1. Vitoria: Exibe janela de vitória com o tempo de jogo, e retorna um valor para o loop da função *game()*, que fara voltar a tela inicial do  jogo.
    2. Derrota: Exibe janela de derrota, e retorna um valor para o loop da função *game()*, que fara voltar a tela inicial do  jogo.
    3. Restart: Retorna um valor para o loop da função *game()*, que fara voltar ao ponto de geração do tabuleiro, sem necessitar ir a tela inicial do  jogo.
    4. Menu: Retorna um valor para o loop da função *game()*, que fara voltar imediatamente a tela inicial do  jogo.

#### 'js/components'

Utilizando a abstrata ideia de componentização, esta pasta contém arquivos responsáveis por implementar componentes utilizados e reutilizados dinamicamente por todas outras funções.

            📂components
            ┣ 📂generic-components
            ┃ ┣ 📜alignmentElement.js
            ┃ ┣ 📜boxTemplate.js
            ┃ ┣ 📜buttonTemplate.js
            ┃ ┣ 📜createDivHTML.js
            ┃ ┣ 📜createRadioHTML.js
            ┃ ┣ 📜modalTemplate.js
            ┃ ┗ 📜titleTemplate.js
            ┣ 📜createHTML.js
            ┗ 📜createSTYLE.js

A ideia básica seria sempre que necessitasse de algum componente, utilizar a função para criar uma estrutura HTML e na sequência aplicar estilização padrão, e caso necessitasse utilizar *stylesheet* para definir caracteristicas particulares . 

O cabeçalho de declaração da função createHTML() e createSTYLE()
```sh
    createHTML(type, local, father, className, text){}
    createSTYLE(type, className, ...attributes){}
```

Exemplo de código que cria uma janela, com fundo desfocado:

```sh
    createHTML( "DIV", "afterend", "#game", "instruction", "" );
    createSTYLE("MODAL", "instruction");
    alignmentFlex(".instruction", "flex", "row", "center", "center");
    
    createHTML( "DIV", "beforeEnd", ".instruction", "instructionBox", "" );
    createSTYLE("BOX", "instructionBox", 430, 800, 1, 7, "var(--bg-box-color)", "var(--line-box-color)");
    document.querySelector(".instructionBox").style.animation = "animationArise 1s";
```

# Minimalist Minesweeper in Javascript
## EN:
Minesweeper with minimalist design in pure javascript, with different boards: triangular, square and hexagonal.
