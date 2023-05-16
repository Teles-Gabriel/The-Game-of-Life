/*
Esta função cria uma matriz bidimensional (ou seja, uma grade) com o número de colunas e linhas especificados como argumentos. A matriz é inicializada com valores `undefined`.
*/

function array2d(cols, rows) {
    let arr = new Array(cols);
    for(let i = 0; i < arr.length; i++){
        arr[i] = new Array(rows);
    }
    return arr;
}

/*
grid` é uma matriz bidimensional que representa a grade do jogo. `cols` e `rows` são o número de colunas e linhas da grade, respectivamente, calculados a partir do tamanho da tela e da resolução dos quadrados. `resolution` é a largura e a altura dos quadrados da grade, em pixels.
*/

let grid;
let cols;
let rows;
let resolution = 10;

/*
Esta função é executada uma vez no início do jogo e é usada para configurar a tela e a grade inicial do jogo. A tela é criada usando a função `createCanvas()`. A grade é inicializada usando a função `array2d()`, e cada célula da grade é inicializada com um valor aleatório de 0 ou 1 usando a função `floor()` e `random()`.
*/

function setup() {
    createCanvas(1830,950);
    
    cols = width / resolution;
    rows = height / resolution;

    grid = array2d(cols, rows);
    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            if(i>3 && j>3){
                grid[i][j]=1
            }
             //floor(random(2));
        }
    }
} 

//console.table(grid)


/*
Esta função é executada a cada quadro do jogo e é usada para desenhar a grade atual na tela e atualizar a grade para a próxima iteração do jogo. 
A grade é desenhada usando um loop `for` aninhado que percorre cada célula da grade e desenha um quadrado branco ou preto na tela, dependendo do valor da célula. 
A próxima grade é calculada usando um loop `for` aninhado que percorre cada célula da grade e conta o número de células vizinhas vivas usando a função `countNeighbors()`.
 A próxima grade é calculada de acordo com algumas regras simples, que dependem do estado atual da célula e do número de células vizinhas vivas.
*/
function draw(){
    background(0);


    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){

            let x = i*resolution;
            let y = j*resolution;
             
            if(grid[i][j] == 1){
                fill(255);
                stroke(0);
                rect(x,y,resolution-1,resolution-1);
            }
         }
    }
    
     let next = array2d(cols,rows);
     // calcular next com base no grid

     for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            
            let state = grid[i][j];

        //count live neighnors
        let sum = 0;
        let neighbors = countNeighbors(grid,i,j);


        if(state == 0 && neighbors == 3){
            next[i][j]=1;
        } else if(state==1 && (neighbors < 2 || neighbors > 3)){
            next[i][j]=0;
        } else {
            next[i][j]=state;
        }

        /*
        sum += grid[i-1][j-1];
        sum += grid[i][j-1];
        sum += grid[i+1][j-1];
        sum += grid[i+1][j];
        sum += grid[i+1][j+1];
        sum += grid[i][j+1];
        sum += grid[i-1][j+1];
        sum += grid[i-1][j];
        */
        }
         
    }
     grid=next;

     
}

/*
Esta função conta o número de células vizinhas vivas em torno de uma célula especificada pelos índices `x` e `y`.
 A função usa um loop `for` aninhado que percorre as células vizinhas da célula especificada e calcula o número de células vivas. 
 O índice de cada célula é calculado com base na largura e altura da grade e usando o operador `%` para lidar com casos em que a célula está na borda da grade. 
 A função retorna o número total de células vizinhas vivas, subtraindo a própria célula (para evitar contar a célula em si duas vezes).
*/

function countNeighbors(grid, x, y){
    let sum = 0;

    for(let i =-1; i < 2; i++){
        for (let j = -1; j < 2; j++) {

            let col = (x + i + cols) % cols;
            let row = (y + j + rows) % rows;

            sum += grid[col][row];
        }
    }
    sum -= grid[x][y]; 
    return sum;
}