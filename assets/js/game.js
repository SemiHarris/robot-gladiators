var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Teemo", "Shaco", "Yasuo"];
var enemyHealth = 50;
var enemyAttack = 12;

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max-min + 1)) + min;

  return value;
};


var fight = function(enemyNames) {

  while(enemyHealth > 0 && playerHealth > 0) {
    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney)
        break
      }
      // if no (false), ask question again by running fight() again
      else {
        fight();
      }
      // if player did not chose 1 or 2 in prompt
    }

// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    var damage = randomNumber(playerAttack - 3, playerAttack);
    enemyHealth = Math.max(0, enemyHealth - damage);
    console.log(
      playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyNames + " has died!");
      break;
    } else {
      window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = Math.max(0, playerHealth - damage);
    console.log(
      enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } 
   else {
    window.alert("You need to pick a valid option. Try again!");
  } 
  }

};

var startGame = function() {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyName = enemyNames[i];

      enemyHealth = randomNumber(40, 60);

      fight(pickedEnemyName);

      var shop = function() {
        var shopOptionPrompt = window.prompt(
          "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
        );

        switch (shopOptionPrompt) {
          
          case "REFILL": 
          case "refill": 
            if (playerMoney >= 7) {
              window.alert("Refilling player's health by 20 for 7 dollars.");
              playerHealth = playerHealth + 20;
              playerMoney = playerMoney - 7;
              }
            else{
              window.alert("You don't have enough money!");
            }
          break;

          case "UPGRADE":
          case "upgrade":
            if (playerMoney >= 7) {
              window.alert("Upgrading player's attack by 6 for 7 dollars. ");
              playerAttack = playerAttack + 6;
              playerMoney = playerMoney - 7;
              }
            else {
              window.alert("You don't have enough money!");
            }
          break;

          case "LEAVE":
          case "leave":
            window.alert("Leaving the store. ");
            break;

          default:
            window.alert("You did not pick a valid option. Try again. ");
            shop();
            break;
        }
      };
      

      if (playerHealth > 0 && i < enemyNames.length - 1) {
        
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        if (storeConfirm) {
        shop();
        }
      }
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  
  var endGame = function() {
    if (playerHealth > 0){
      window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
      window.alert("You've lost your robot in battle.")
    }
  };

  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    startGame();
  }
else {
  window.alert("Thank you for playing Robot Galdiators! Come back soon!");
}
endGame();
};

startGame(); 

console.log(Math.max(10, 20, 100));

console.log(Math.max(0, -50));