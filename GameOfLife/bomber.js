let LivingCreature = require("./LivingCreature")


module.exports = class bomber extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 1;
        this.directions = [];
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(ch1, ch2, ch3, ch5) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch1) {
                    found.push(this.directions[i]);
                }
            }
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch2) {
                    found.push(this.directions[i]);
                }
            }
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch3) {
                    found.push(this.directions[i]);
                }
            }
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch5) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    
}

explode() {
    this.energy--
    var emptyCells = this.chooseCell(1, 2, 3, 5)
    var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

    if (newCell) {
        var newX = newCell[0]
        var newY = newCell[1]

        matrix[newY][newX] = matrix[this.y][this.x]
        matrix[this.y][this.x] = 0
        this.x = newX
        this.y = newY
        for (var i in grassArr) {
            if (newX == grassArr[i].x && newY == grassArr[i].y) {
                grassArr.splice(i, 1)
                this.die()
                break
            }
        }
        for (var i in grassEaterArr) {
            if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1)
                this.die()
                break
            }
        }
        for (var i in predatorArr) {
            if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                predatorArr.splice(i, 1)
                this.die()
                break
            }
        }
        for (var i in spikeArr) {
            if (newX == spikeArr[i].x && newY == spikeArr[i].y) {
                spikeArr.splice(i, 1)
                this.die()
                break
            }
        }
    }
}
die() {
    matrix[this.y][this.x] = 0;
    for (var i in bomberArr) {
        if (this.x == bomberArr[i].x && this.y == bomberArr[i].y) {
            bomberArr.splice(i, 1);
            break;
        }
    }
}
}