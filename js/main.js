// Objects constructor
function warrior(name, attackValue, healthValue) {
  this.name = name,
  this.attackValue = attackValue,
  this.healthValue = healthValue,
  this.attack = function(enemy) {
    enemy.healthValue -= this.attackValue;

    if (enemy.healthValue <= 0) {
      alert(this.name + " attacked " + enemy.name + " ! " + enemy.name + " is dead...");
    } else if (this.healthValue <= 0) {
      alert(this.name + " attacked " + enemy.name + " ! " + this.name + " is dead...");
    } else if (this.healthValue > 0 && enemy.healthValue > 0) {
      alert(this.name + " attacked " + enemy.name + " ! He stays " + enemy.healthValue + " life points to " + enemy.name + " !");
      if (this.name === "Bell") {
        enemy.attack(goblin);
      } else if (this.name === "Ugly") {
        enemy.attack(pixie);
      }

    }

  }
} // End of object warrior()

function magician(name, attackValue, healthValue, magicValue) {
  this.name = name,
  this.attackValue = attackValue,
  this.healthValue = healthValue,
  this.magicValue = magicValue,
  this.attack = function(enemy) {
    enemy.healthValue -= this.attackValue;

    if (enemy.healthValue <= 0) {
      alert(this.name + " attacked " + enemy.name + " ! " + enemy.name + " is dead...");
    } else if (this.healthValue <= 0) {
      alert(this.name + " attacked " + enemy.name + " ! " + this.name + " is dead...");
    } else if (this.healthValue > 0 && enemy.healthValue > 0) {

      if (this.healthValue <= 75 && this.magicValue >= 20) {
        this.healing();
        alert("Healing: " + this.name + " has " + this.healthValue + " life points !");
      } else if (this.magicValue < 20) {
        alert("Healing impossible: " + this.name + " has no more life points ! ");
      }

      alert(this.name + " attacked " + enemy.name + " ! He stays " + enemy.healthValue + " life points to " + enemy.name + " !");
      enemy.attack(this);
    }

  },
  this.healing = function() {
    this.magicValue -= 20;
    this.healthValue += 10;
  }
} // End of object magician()


// Create character
var pixie = new warrior("Bell", 25, 120);
var goblin = new warrior("Ugly", 40, 100);
var wizard = new magician("Lazy", 30, 150, 100);

// Launch the fight
wizard.attack(pixie);



//
