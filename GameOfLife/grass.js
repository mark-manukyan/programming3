let LivingCreature = require("./LivingCreature")


 module.exports = class Grass extends LivingCreature {
    constructor(x, y) {
        super(x, y);
       
    }



    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        console.log(emptyCells);
        if (newCell && this.multiply >= 10) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
        if (weath == "winter") {
            this.energy -= 3;
            this.multiply -= 3;
        }
        if (weath == "spring") {
            this.energy += 4;
            this.multiply += 4;
        }
        if (weath == "summer") {
            this.energy += 2;
            this.multiply += 2;
        }
        if (weath == "autumn") {
            this.energy--;
            this.multiply--;
    }
    }

}