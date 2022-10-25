var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var fs = require("fs")
app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect("index.html")
})
server.listen(3000, () => {
    console.log("server run")
})

function generator(matLen, gr, grEat, pr, bomb, sp) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < bomb; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < sp; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }
    }
    return matrix;
}

matrix = generator(30, 100, 24, 10, 7, 5);

io.sockets.emit("send matrix", matrix)

grassArr = []
grassEaterArr = []
predatorArr = []
bomberArr = []
spikeArr = []

Grass = require("./grass")
GrassEater = require("./grasseater")
Predator = require("./predator")
Bomber = require("./bomber")
Spike = require("./spike")



function  createObject(){
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
    io.sockets.emit("send matrix", matrix)
}

function game(){
   
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

    io.sockets.emit("send matrix", matrix)

}


setInterval(game, 1000)