// Object constructor
function warrior(name, attackValue, healthValue) {
  this.name = name,
  this.attackValue = attackValue,
  this.healthValue = healthValue,
  this.attack = function(enemy) {
    enemy.healthValue -= this.attackValue;
    alert(this.name + " attacked " + enemy.name + " ! He stays " + enemy.healthValue + " life points to " + enemy.name + " !");

    if (enemy.healthValue <= 0) {
      alert(enemy.name + " is dead...");
    } else if (this.healthValue <= 0) {
      alert(this.name + " is dead...");
    } else if (this.healthValue > 0 && enemy.healthValue > 0) {
      enemy.attack(this);
    }

  }
} // End of object warrior()

// Create character
var pixie = new warrior("Bell", 25, 100);
var goblin = new warrior("Ugly", 40, 50);

// Launch the fight
pixie.attack(goblin);
