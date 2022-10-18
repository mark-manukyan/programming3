var socket = io()



let side = 20;



function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            }
            else if (matrix[y][x] == 3) {
                let pr = new Predator(x, y)
                predatorArr.push(pr)
            }
            else if (matrix[y][x] == 4) {
                let bomb = new Bomber(x, y)
                bomberArr.push(bomb)
            }
            else if (matrix[y][x] == 5) {
                let sp = new Spike(x, y)
                spikeArr.push(sp)
            }

        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            } else if (matrix[y][x] == 0) {
                fill("#acacac");
            } else if (matrix[y][x] == 2) {
                fill("yellow");
            } else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("black")
            }
            else if (matrix[y][x] == 5) {
                fill("orange");
            }
            rect(x * side, y * side, side, side);
        }
    }

    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].mul()
        grassEaterArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].mul()
        predatorArr[i].eat()
    }
    for (let i in bomberArr) {
        bomberArr[i].explode()
    }
    for (let i in spikeArr) {
        spikeArr[i].mul()
    }
}

