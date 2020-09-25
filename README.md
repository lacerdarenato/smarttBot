## Considerações iniciais

Projeto inspirado no projeto publicado no repositório [https://github.com/coder787/coin-finder](https://github.com/coder787/coin-finder)

Esta aplicação destina-se a mostrar a cotação de uma criptomoeda em relação a outra moeda escolhida.
Fizemos algumas alterações para utilização com a api atravéz da requisição do seu método publico: [https://poloniex.com/public?command=returnTicker](https://poloniex.com/public?command=returnTicker)
O retorno será um objeto json no padrão:

```json

    {
        
        "BTC_BTS": {
            "id": 14,
            "last": "0.00000237",
            "lowestAsk": "0.00000238",
            "highestBid": "0.00000235",
            "percentChange": "0.04405286",
            "baseVolume": "0.77530820",
            "quoteVolume": "332228.88561852",
            "isFrozen": "0",
            "high24hr": "0.00000237",
            "low24hr": "0.00000225"
        },
       
    }

```

Criada uma lista com as moedas disponíveis atravez da requisição [https://poloniex.com/public?command=returnCurrencies](https://poloniex.com/public?command=returnCurrencies)

## Ambiente

Como ferramente de codificação recomendamos a utilização deo Visual Studio Code
para instalá-la basta baixar a vestão para o seu SO no site [https://code.visualstudio.com/#alt-downloads](https://code.visualstudio.com/#alt-downloads)
_`Dica:` é interessante colocá-lo na versão portable para evitar comflitos com outro ambiente que ja esteja instalado, [procedimento](https://code.visualstudio.com/docs/editor/portable)
_`Dica:` instale a extensão Prettier - Code Formatter, na aba de extensões do VS Code.

### Instalar o node.js:

baixe a versão estavel do node neste [link](https://nodejs.org/en/)
execute o arquivo baixado e marque todas as features existentes na janela de custom Setup
para testar se o node foi instalado corretamente: abra um prompt de comando e use o comando node -v, a resposta deverá ser a versão do node instalada.
verifique tambem a instalação do pacote npm: ainda no prompt de comando digite npm -v a resposta deverá ser a versão do npm instalada.

### Instalar o Yarn:

Baixe a versão estável do yarn atravez do [link](https://classic.yarnpkg.com/pt-BR/docs/install#windows-stable) e execute a instalação.

## Montar o app

Para executar o projeto é necessário usar o comando `git clone https://github.com/lacerdarenato/smarttBot` no diretório em deseja instalá-lo. Em seguida digite o comando yarn, este comando vai ler todas as dependencias contidas no arquivo package.json e instalá-las. Depois de instaladas as dependencias do projeto, basta iniciá-lo com o comando yarn start, o app abrirá no seu browser atravez do [http://localhost:3000/](http://localhost:3000/)

## Utilização

Na aplicão existem apenas um formuário com dois inputs que deverão receber.

> o 1º a sigla da moeda que servirá de referência para determinar o valor<br>
> o 2º a sigla da moeda que deseja-se saber o valor, baseado no primeiro input.<br>

Após preencher os inputs e clicar no botão `Buscar Cotação`, o app exibirá os dados daquele par de moedas.

> Preço mais recente: <br>
> Menor Compra: <br>
> Maior Venda: <br>
> Volume Básico: <br>
> Percentual na troca: <br>

Para facilitar a utilização do App é possível listar as siglas disponíveis na API atravéz do botão `Lista de siglas` , este botão ocultará a lista do ranking, caso esteja visível e fará uma requisição GET atravéz do endpoint [https://poloniex.com/public?command=returnCurrencies](https://poloniex.com/public?command=returnCurrencies) cujo retorno será um json no formato:

```json
    {
        
        1CR: {
        id: 1,
        name: "1CRedit",
        humanType: "BTC Clone",
        currencyType: "address",
        txFee: "0.01000000",
        minConf: 10000,
        depositAddress: null,
        disabled: 1,
        delisted: 1,
        frozen: 0,
        hexColor: "068485",
        isGeofenced: 0
        },
        
    }
```

Para Listar o ranking do valores das boedas é possível basta clicar no botão `Ranking`, este botão criará uma lista ordenada a partir do atributo "last" e a exiirá na tela, caso a lista de siglas esteja aberta essa será ocultada.
