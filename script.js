/* -------------- PROJETO SEMANAL 1 - MÓDULO 4------------------------

Que tal criar uma ferramenta no terminal que vai auxiliar desenvolvedores no dia a dia com CSS?
Vamos usar o Node para montar um código que vai receber uma lista de propriedades de CSS (ex: background-color, font-size,
text-align) e vai devolver essa lista ordenada de A-Z. Ordenar o CSS ajuda a encontrar mais rápido a propriedade que precisamos alterar.

O código deve rodar em um laço que vai receber propriedades até a pessoa digitar a palavra “SAIR”, quando isso acontecer vai ser impresso no terminal a lista das propriedades ordenadas de A-Z uma em cada linha
=======================================================================
*/
// --------------- SOLUÇÃO ------------------------
// Primeiro, inicializei o pacote do projeto com o comando "npm init", para criar o arquivo package.json.
// Depois, no arquivo package.json inseri o script "type":"module", para permitir a forma mais atualizada de importação
// Em seguida, executei o comando "npm install prompt-sync" no terminal, para instalar o pacote que possibilita ao terminal do node receber inputs da pessoa usuária. Essa ação criou a pasta node_modules, que não deve ser subida para o github

// Para importar o pacote prompt-sync, adicionei o seguinte comando:
import promptSync from 'prompt-sync';

// O módulo prompt-sync é uma função que cria funções de prompt, portanto, é preciso "chamá-lo", adicionando os parênteses após o nome da função: promptSync(). Fiz isso e criei uma constante para armazená-lo:
const prompt = promptSync();

// Como vou usar a biblioteca chalk para enfeitar o terminal, também instalei-a com o comando:
import chalk from 'chalk';

// e criei algumas variáveis para armazenar as cores que vou usar, facilitando o processo:
const success = chalk.hex('#99ff99'); // verde claro
const question = chalk.hex('#FFA500'); // laranja
const warning = chalk.bold.red; // vermelho
const emphasis = chalk.blue.underline.bold; // azul, negrito e sublinhado para destacar as propriedades

// Agora, vou trabalhar no código que efetivamente pedirá o input e o processará:
let arr = []; // essa variável armazena um array vazio
let exit = false; // essa variável armazena um valor booleano falso e será usada para controlar o while

// No trecho abaixo, o loop while inicia com a condição verdadeira (o contrário de false)
while(!exit) {
    // Criei a variável "property" para receber o input da pessoa usuária:
    let property = prompt(question("Digite uma propriedade CSS: "));
    // A propriedade digitada será adicionada ao array:
    arr.push(property);
    // Será perguntado se a pessoa deseja prosseguir...
    let proceed = prompt(warning("Deseja continuar? Sim: [S] Não: [N]  "));
    console.log(arr);
    // Se a resposta for "não" (N):
    if(proceed === "N" || proceed === "n") {
      // Imprimirá a mensagem avisando que as propriedades serão ordenadas
      console.log(question("Ok, agora vamos ordenar as propriedades para você!"));
      // Mudará o valor da variável "exit" para true, tornando falsa a condição do while e tirando-o do loop
      exit = true;
      // os itens do array serão ordenados através do método .sort(),
      // convertidos em string com método .join() e iniciarão em nova linha (\n)
      let orderedArr = arr.sort().join("\n");
      // Finalmente, serão imprimidas as propriedades em ordem alfabética:
      console.log(success(`As propriedades CSS em ordem alfabética são: \n${orderedArr}`))
    } else {
      console.log(success(`Propriedade ${emphasis(property)} adicionada com sucesso`));
    }
  }