// instructions.js

var instructionsState = {

	create: function () {

		var background = game.add.sprite(-100, 100, 'binjamin');
		background.angle = 18;
		
		var instructionsTitle = game.add.text(80, 80, 'Instructions', 
			{font: '50px fantasy', fill: '#00600'} );

		var instructionsMessage = game.add.text(350, 180, "Here's how to play... \n 1. Pick a scene to clean \n 2. Sort the trash into the \n correct bin (compost, \n recycling, or landfill) \n 3. Have a bintastic time!",
			{font: '30px fantasy', fill: '#00600', align: 'right'} );

		// BACK button
		var backButton = game.add.button(80, game.world.height - 80, 'back_button1');
		backButton.onInputOver.add(over, this);

		function over() {
		    backButton = game.add.button(80, game.world.height - 80, 'back_button2', this.start, this, 2, 1, 0);
		    backButton.onInputOut.add(out, this);
		}
		function out() {
		    backButton = game.add.button(80, game.world.height - 80, 'back_button1');
		    backButton.onInputOver.add(over, this);
		}
	},

	start: function () {
		game.state.start('binjamin');
	},

};
