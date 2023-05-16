// Seleciona o elemento com id canvas do html
let canvas = document.getElementById('canvas');
//armazena o contexto do elemento 2d
let ctx = canvas.getContext('2d');

/* Define as váriaveis */
let cols;
let rows;
let resolution = 10;
let grid = array2d(cols, rows); //array bidimensional cols x rows, ainda sem definir cols e rows, o array é vazio

/*
A função setup inicia os valores de rows e cols, são definidas com base nas dimensões do elemento canvas
divididas pela resolução definida.
    O loop inicializa cada célula do grid com um valor aleatório 0 ou 1.
 */

function setup() {
    cols = canvas.width/resolution;
    rows = canvas.height/resolution;

    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            grid[i][j] = Math.floor(Math.random() * 2);
        }
    }
}

/*
A função draw é responsável por desenhar as células na tela e atualizar o grid com base nas regras do jogo da vida.
O fundo é pintado na cor preta, em seguida um loop for é usado para percorrer cada célula do grid e desenhar um retângulo branco na posição
correspondente casa a célula esteja viva(1). O next é definido como uma nova matriz bidimensional com as mesmas dimensões de grid. Outro loop
é responsável por calcular o próximo estado de cada célula do grid. Por fim o grid é atualizado com o next.

*/
function draw(){
    background(0);

    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){

            let x = i*resolution;
            let y = j*resolution;
             
            if(grid[i][j] == 1){
                ctx.fillStyle = "white";
                ctx.fillRect(x, y, resolution-1, resolution-1);
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


        if(state == 0 && neighbors == 0){
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

function countNeighbors(grid, x, y){
    let sum = 0;

    for(let i =-1; i < 2; i++){
        for (let j = -1; j < 2; j++) {

            let col = (x+i + cols) % cols;
            let row = (y+j + rows) % rows;

            sum += grid[col][row];
        }
    }
    sum -= grid[x][y]; 
    return sum;
}

/*
A função array2d(), cria uma matriz (ou seja, um array bidimensional)
 com cols colunas e rows linhas, e a inicializa com valores nulos. Ela recebe dois argumentos:
 o número de colunas e o número de linhas da matriz.
 */

function array2d(cols, rows) {
    let arr = new Array(cols);
    return arr
}