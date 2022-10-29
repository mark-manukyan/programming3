let LivingCreature = require("./LivingCreature")


module.exports = class spike extends LivingCreature {
    constructor(x, y,) {
       super(x, y, index)
        this.multiply = 0;
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
    chooseCell(character) {
       return super.chooseCell(character)
    }
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

        console.log(emptyCells);
        if (newCell && this.multiply >= 7) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;

            var sp = new Spike(newX, newY);
            spikeArr.push(sp);
            this.multiply = 0;
        }

        if (weath == "winter") {
            this.energy -= 4;
            this.multiply -= 4;
        }
        if (weath == "spring") {
            this.energy += 2;
            this.multiply += 2;
        }
        if (weath == "summer") {
            this.energy += 3;
            this.multiply += 3;
        }
        if (weath == "autumn") {
            this.energy -= 5;
            this.multiply -=5;
    }
    }
}
