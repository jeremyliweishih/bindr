// welcome state

// load images, call binjamin state

var welcomeState = {

	preload: function() {

		// load buttons
		game.load.image('start_button1', './states/buttons/start2.png');
		game.load.image('start_button2', './states/buttons/start1.png');
		game.load.image('play_button1', './states/buttons/play1.png');
		game.load.image('play_button2', './states/buttons/play2.png');
		game.load.image('learn_button1', './states/buttons/learn1.png');
		game.load.image('learn_button2', './states/buttons/learn2.png');
		game.load.image('back_button1', './states/buttons/back1.png');
		game.load.image('back_button2', './states/buttons/back2.png');
		game.load.image('play_again_button1', './states/buttons/again1.png');
		game.load.image('play_again_button2', './states/buttons/again2.png');
		game.load.image('high_scores_button1', './states/buttons/high_scores1.png');
		game.load.image('high_scores_button2', './states/buttons/high_scores2.png');
		game.load.image('local_scores_button1', './states/buttons/local_scores1.png');
		game.load.image('local_scores_button2', './states/buttons/local_scores2.png');

		// load binjamin
		game.load.image('binjamin', './states/images/binjamin.png');
		game.load.image('binjamin_crying', './states/images/benji_cry.png');

		// load scenes
		game.load.image('beach', './states/images/beach_background_REAL.png');
		game.load.image('tufts', './states/images/tufts_background.png');
		game.load.image('city', './states/images/city_background.png');
	},

	create: function () {
		
		var binjamin = game.add.sprite(game.world.centerX-30, game.world.centerY + 60, 'binjamin');
		binjamin.scale.setTo(0.8, 0.8);
		binjamin.anchor.setTo(0.5, 0.5);

		var binjaminMessage = game.add.text(40, 60, 'Hi, my name is Binjamin Frankbin. \n Welcome to Bindr.', 
			{font: '50px fantasy', fill: '#00600', align: 'center'} );

		game.stage.backgroundColor = '#00cc00';

		var button = game.add.button(game.world.centerX - 95, 480, 'start_button1');
		button.onInputOver.add(over, this);
	}

};

function over() {
    button = game.add.button(game.world.centerX - 95, 480, 'start_button2', actionOnClick, this, 2, 1, 0);
    button.onInputOut.add(out, this);
}

function out() {
    button = game.add.button(game.world.centerX - 95, 480, 'start_button1');
    button.onInputOver.add(over, this);
}

function actionOnClick () {
    game.state.start('binjamin');
}