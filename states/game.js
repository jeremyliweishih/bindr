// game.js
// creates Phaser.Game object, adds states, starts welcome state

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

game.state.add('welcome', welcomeState);
game.state.add('binjamin', binjaminState);
game.state.add('instructions', instructionsState);
game.state.add('scenes', scenesState);
game.state.add('beach', beachState);
game.state.add('tufts', tuftsState);
game.state.add('city', cityState);
game.state.add('gameover', gameoverState);

game.state.start('welcome');