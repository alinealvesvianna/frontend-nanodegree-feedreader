## BDD Jasmine - Aplicativo Feedreader
Esse projeto faz parte da formação Nanodegree Frontend da Udacity, onde o objetivo é testar as funcionalidades de um aplicativo de feed, usando o framework de teste Jasmine.

### Instruções

1. Clone o repositório para sua máquina ou abra o [projeto](https://alinealvesvianna.github.io/frontend-nanodegree-feedreader/).

2. Na parte inferior da página, o resultado do teste será exibido, mostrando que o aplicativo passou nos seguintes teste:

  * Suite de Teste 'RSS Feeds':
    * Existe pelo menos um objeto no Array allFeeds;
    * A propriedade "url" está definida em todos os objetos do Array allFeeds;
    * A propriedade "name" está definida em todos os objetos do Array allFeeds;

  * Suite de Teste 'The Menu':
    * O menu está escondido por default;
    * A visibilidade do menu muda ao clicar no ícone de sanduíche;

  * Suite de Teste 'Initial Entries':  
    * Quando a função assíncrona "loadFeed" é executada com sucesso, pelo menos um elemento ".entry" é carregado/exibido.
    * Quando o parâmetro da função assíncrona "loadFeed" muda, o conteúdo exibido no container ".feed" também muda.
