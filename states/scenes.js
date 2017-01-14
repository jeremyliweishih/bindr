// scenes.js

var scenesState = {

	create: function () {
		var instructionsTitle = game.add.text(80, 80, 'Pick a scene', 
			{font: '50px fantasy', fill: '#00600'} );

		// BEACH BUTTON
		var beachButton = game.add.button(150, game.world.centerY, 'beach', goToBeach, this, 2, 1, 0);
		beachButton.scale.setTo(0.4, 0.4);
		beachButton.anchor.setTo(0.5, 0.5);

		beachButton.onInputOver.add(over_beach, this);
		function over_beach() {
		    beachButton.scale.setTo(0.5, 0.5);
		    beachButton.onInputOut.add(out_beach, this);
		}
		function out_beach() {
		    beachButton.scale.setTo(0.4, 0.4);
		    beachButton.onInputOver.add(over_beach, this);
		}

		// TUFTS BUTTON
		var tuftsButton = game.add.button(400, game.world.centerY, 'tufts', goToTufts, this, 2, 1, 0);
		tuftsButton.scale.setTo(0.4, 0.4);
		tuftsButton.anchor.setTo(0.5, 0.5);

		tuftsButton.onInputOver.add(over_tufts, this);
		function over_tufts() {
		    tuftsButton.scale.setTo(0.5, 0.5);
		    tuftsButton.onInputOut.add(out_tufts, this);
		}
		function out_tufts() {
		    tuftsButton.scale.setTo(0.4, 0.4);
		    tuftsButton.onInputOver.add(over_tufts, this);
		}

		// CITY BUTTON
		var cityButton = game.add.button(650, game.world.centerY, 'city', goToCity, this, 2, 1, 0);
		cityButton.scale.setTo(0.4, 0.4);
		cityButton.anchor.setTo(0.5, 0.5);

		cityButton.onInputOver.add(over_city, this);
		function over_city() {
		    cityButton.scale.setTo(0.5, 0.5);
		    cityButton.onInputOut.add(out_city, this);
		}
		function out_city() {
		    cityButton.scale.setTo(0.4, 0.4);
		    cityButton.onInputOver.add(over_city, this);
		}
		
		function goToBeach() {
			game.state.start('beach');
		}
		function goToTufts() {
			game.state.start('tufts');
		}
		function goToCity() {
			game.state.start('city');
		}
	},

};