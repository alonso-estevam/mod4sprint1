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