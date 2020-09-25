## Considerações iniciais

Projeto inspirado no projeto publicado no repositório [https://github.com/coder787/coin-finder](https://github.com/coder787/coin-finder)

esta aplicação destina-se a mostrar a cotação de uma criptomoeda em relação a outra moeda escolhida.
Fizemos algumas alterações para utilização com a api atravéz da requisição do seu método publico: [https://poloniex.com/public?command=returnTicker](https://poloniex.com/public?command=returnTicker)
Criada uma lista com as moedas disponíveis atravez da requisição [https://poloniex.com/public?command=returnCurrencies](https://poloniex.com/public?command=returnCurrencies)

## Ambiente

Como ferramente de codificação recomendamos a utilização deo Visual Studio Code
para instalá-la basta baixar a vestão para o seu SO no site [https://code.visualstudio.com/#alt-downloads](https://code.visualstudio.com/#alt-downloads)
Dica: é interessante colocá-lo na versão portable para evitar comflitos com outro ambiente que ja esteja instalado, [procedimento](https://code.visualstudio.com/docs/editor/portable)
Dica: instale a extensão Prettier - Code Formatter, na aba de extensões do VS Code.

Instalar o node.js:
baixe a versão estavel do node neste [link](https://nodejs.org/en/)
execute o arquivo baixado e marque todas as features existentes na janela de custom Setup
para testar se o node foi instalado corretamente: abra um prompt de comando e use o comando node -v, a resposta deverá ser a versão do node instalada.
verifique tambem a instalação do pacote npm: ainda no prompt de comando digite npm -v a resposta deverá ser a versão do npm instalada.

Instalar o Yarn:
Baixe a versão estável do yarn atravez do [link](https://classic.yarnpkg.com/pt-BR/docs/install#windows-stable) e execute a instalação.

## Montar o app

Para executar o projeto é necesário baixar o arquivo compactado do repositório [https://github.com/lacerdarenato/smarttBot](https://github.com/lacerdarenato/smarttBot) e descompactá-lo em um diretório.

navegue até o diretório principal do projeto e abra um console nele e digite o comando yarn, este comando vai ler todas as dependencias contidas no arquivo package.json e instalá-las.

depois de montado o projeto basta iniciá-lo com o comando yarn start
