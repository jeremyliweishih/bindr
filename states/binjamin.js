// binjamin.js

var binjaminState = {

	create: function () {
		var binjamin = game.add.sprite(-20, 250, 'binjamin');

		var message = game.add.text(80, 80, 'Here is a fun fact:', 
			{font: '50px fantasy', fill: '#00600', align: 'center'});

		var funfact = game.add.text(150, 180, 'Between 1990 and 2010, \n paper recycling increased \n by almost 90%.', 
			{font: '40px fantasy', fill: '#00600', align: 'center'});

		// LEARN button
		var learnButton = game.add.button(80, game.world.height - 80, 'learn_button1');
		learnButton.onInputOver.add(over_intro, this);
		
		function over_intro() {
		    learnButton = game.add.button(80, game.world.height - 80, 'learn_button2', goToInstructions, this, 2, 1, 0);
		    learnButton.onInputOut.add(out_intro, this);
		}
		function out_intro() {
		    learnButton = game.add.button(80, game.world.height - 80, 'learn_button1');
		    learnButton.onInputOver.add(over_intro, this);
		}
		function goToInstructions() {
			game.state.start('instructions');
		}

		// PLAY GAME button
		var playgameButton = game.add.button(500, game.world.height - 80, 'play_button1');
		playgameButton.onInputOver.add(over_play, this);

		function over_play() {
		    playgameButton = game.add.button(500, game.world.height - 80, 'play_button2', goToScenes, this, 2, 1, 0);
		    playgameButton.onInputOut.add(out_play, this);
		}
		function out_play() {
		    playgameButton = game.add.button(500, game.world.height - 80, 'play_button1');
		    playgameButton.onInputOver.add(over_play, this);
		}
		function goToScenes() {
			game.state.start('scenes');
		}

	}

};
