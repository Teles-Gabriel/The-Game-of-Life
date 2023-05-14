# Game of Life

Este é um código em JavaScript que implementa o "Game of Life", um autômato celular criado pelo matemático britânico John Horton Conway em 1970. O jogo consiste em uma grade de células, onde cada célula pode estar viva (representada por um quadrado branco) ou morta (representada por um quadrado preto). A cada iteração, a grade é atualizada de acordo com algumas regras simples, que determinam se cada célula deve viver ou morrer.

## Função `array2d(cols, rows)`

Esta função cria uma matriz bidimensional (ou seja, uma grade) com o número de colunas e linhas especificados como argumentos. A matriz é inicializada com valores `undefined`.

## Variáveis `grid`, `cols`, `rows` e `resolution`

`grid` é uma matriz bidimensional que representa a grade do jogo. `cols` e `rows` são o número de colunas e linhas da grade, respectivamente, calculados a partir do tamanho da tela e da resolução dos quadrados. `resolution` é a largura e a altura dos quadrados da grade, em pixels.

## Função `setup()`

Esta função é executada uma vez no início do jogo e é usada para configurar a tela e a grade inicial do jogo. A tela é criada usando a função `createCanvas()`. A grade é inicializada usando a função `array2d()`, e cada célula da grade é inicializada com um valor aleatório de 0 ou 1 usando a função `floor()` e `random()`.

## Função `draw()`

Esta função é executada a cada quadro do jogo e é usada para desenhar a grade atual na tela e atualizar a grade para a próxima iteração do jogo. A grade é desenhada usando um loop `for` aninhado que percorre cada célula da grade e desenha um quadrado branco ou preto na tela, dependendo do valor da célula. A próxima grade é calculada usando um loop `for` aninhado que percorre cada célula da grade e conta o número de células vizinhas vivas usando a função `countNeighbors()`. A próxima grade é calculada de acordo com algumas regras simples, que dependem do estado atual da célula e do número de células vizinhas vivas.

## Função `countNeighbors(grid, x, y)`

Esta função conta o número de células vizinhas vivas em torno de uma célula especificada pelos índices `x` e `y`. A função usa um loop `for` aninhado que percorre as células vizinhas da célula especificada e calcula o número de células vivas. O índice de cada célula é calculado com base na largura e altura da grade e usando o operador `%` para lidar com casos em que a célula está na borda da grade. A função retorna o número total de células vizinhas vivas, subtraindo a própria célula (para evitar contar a célula em si duas vezes).