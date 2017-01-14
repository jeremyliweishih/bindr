// beach.js
var score = 0;
var scoreText;
var text;

var beachState = {
		preload: function() {

		game.load.image('g_bin_click', './states/bindr_designs/g_bin_open.png');
		game.load.image('b_bin_click', './states/bindr_designs/b_bin_open.png');
		game.load.image('y_bin_click', './states/bindr_designs/y_bin_open.png');
		game.load.image('bl_bin_click', './states/bindr_designs/bl_bin_open.png');
		game.load.image('g_bin', './states/bindr_designs/g_bin_closed.png');
		game.load.image('b_bin', './states/bindr_designs/b_bin_closed.png');
		game.load.image('y_bin', './states/bindr_designs/y_bin_closed.png');
		game.load.image('bl_bin', './states/bindr_designs/bl_bin_closed.png');
	    game.load.image('background', './states/bindr_designs/beach_background_REAL.png');
	   

	    game.load.image('t1', './states/bindr_icons/Artboard_1.png');
	    game.load.image('t2', './states/bindr_icons/Artboard_2.png');
	    game.load.image('t3', './states/bindr_icons/Artboard_3.png');
	    game.load.image('t4', './states/bindr_icons/Artboard_4.png');
	    game.load.image('t5', './states/bindr_icons/Artboard_5.png');
	    game.load.image('t6', './states/bindr_icons/Artboard_6.png');
	    game.load.image('t7', './states/bindr_icons/Artboard_7.png');
	    game.load.image('t8', './states/bindr_icons/Artboard_8.png');
	    game.load.image('t9', './states/bindr_icons/Artboard_9.png');
	    game.load.image('t10', './states/bindr_icons/Artboard_10.png');
	    game.load.image('t11', './states/bindr_icons/Artboard_11.png');
	    game.load.image('t12', './states/bindr_icons/Artboard_12.png');
	    game.load.image('t13', './states/bindr_icons/Artboard_13.png');
	    game.load.image('t14', './states/bindr_icons/Artboard_14.png');
	    game.load.image('t15', './states/bindr_icons/Artboard_15.png');
	    game.load.image('t16', './states/bindr_icons/Artboard_16.png');
	    game.load.image('t17', './states/bindr_icons/Artboard_17.png');
	    game.load.image('t18', './states/bindr_icons/Artboard_18.png');
	    game.load.image('t19', './states/bindr_icons/Artboard_19.png');
	    game.load.image('t20', './states/bindr_icons/Artboard_20.png'); },


	create: function () {
		var background = game.add.sprite(0, 0, 'beach');
		background.height = game.height;
		background.width = game.width;

		var background = game.add.sprite(0 , 0, 'background');
		 background.height = game.height;
		 background.width = game.width;
		  green_bin = game.add.sprite(game.world.centerX -270, game.world.centerY + 120, 'g_bin');
		  blue_bin = game.add.sprite(game.world.centerX -100, game.world.centerY + 120, 'b_bin');
		  yellow_bin = game.add.sprite(game.world.centerX +70, game.world.centerY + 120, 'y_bin');
		 black_bin = game.add.sprite(game.world.centerX + 240 , game.world.centerY + 120 , 'bl_bin');
	     //green_bin.events.onInputOver.add(over, this);
		 
		 green_bin.anchor.set(0.5);
		 green_bin.inputEnabled = true;
		 text = game.add.text(250, 16, '', { fill: '#000000' });
		 green_bin.events.onInputDown.add(green_listener, this);

		 blue_bin.anchor.set(0.5);
		 blue_bin.inputEnabled = true;
		 blue_bin.events.onInputDown.add(blue_listener, this);

		 yellow_bin.anchor.set(0.5);
		 yellow_bin.inputEnabled = true;
		 yellow_bin.events.onInputDown.add(yellow_listener, this);

		 black_bin.anchor.set(0.5);
		 black_bin.inputEnabled = true;
		 black_bin.events.onInputDown.add(black_listener, this);

		 create_trash();
		 scoreText = game.add.text(16, 16, 'Score: 0', { font: '50px fantasy', fill: '#000' });
	    

		answer = false;
		game.time.events.add(Phaser.Timer.MINUTE * .50, tempfunc, this);
	},



	render: function() {
		 // s = game.time.events.duration;
		 // var minutes = "0" + Math.floor(s / 60);
	    //    var seconds = "0" + (s - minutes * 60);
	    //Time elapsed in seconds

	    var timeElapsed = Math.abs(game.time.events.duration / 1000);
	 
	    //Convert seconds into minutes and seconds
	    var minutes = Math.floor(timeElapsed / 60);
	    var seconds = Math.floor(timeElapsed) - (60 * minutes);
	 
	    //Display minutes, add a 0 to the start if less than 10
	    var result = (minutes < 10) ? "0" + minutes : minutes; 
	 
	    //Display seconds, add a 0 to the start if less than 10
	    result += (seconds < 10) ? ":0" + seconds : ":" + seconds; 
	  
		game.debug.text("Time Left: " + result, game.width -155, 25, 32, "#000");
	},

	update: function() {

		if( answer == true ){
			trash.destroy();
			create_trash(); 
			answer = false;
		}
		scoreText.text = 'Score: ' + score;
	    
	}
};

function create_trash () {
	
	var num = game.rnd.integerInRange(0, 20);
   
    if(num == 1) {
        trash = game.add.sprite(game.world.centerX -50, game.world.centerY + 190, 't1');

        trash.type = "blue";
        
    }
    else if (num == 2){
        trash = game.add.sprite(game.world.centerX -50, game.world.centerY + 190, 't2');
        trash.type = "green";
         
    }
    else if (num == 3){
        trash = game.add.sprite(game.world.centerX -50, game.world.centerY + 190, 't3');
        trash.type = "yellow";
         
    }
    else if (num == 4){
        trash = game.add.sprite(game.world.centerX -50, game.world.centerY + 190, 't4');
        trash.type = "black";
        
    }
    else if (num == 5){
        trash = game.add.sprite(game.world.centerX -50, game.world.centerY + 190, 't5');
        trash.type = "blue";
         
    }
    else if (num == 6){
        trash = game.add.sprite(game.world.centerX -50, game.world.centerY + 190, 't6');
        trash.type = "green";
         
    }
    else if (num == 7){
        trash = game.add.sprite(game.world.centerX -50, game.world.centerY + 190, 't7');
        trash.type = "yellow";
         
    }
    else if (num == 8){
        trash = game.add.sprite(game.world.centerX -50, game.world.centerY + 190, 't8');
        trash.type = "black";
         
    }
    else if (num == 9){
        trash = game.add.sprite(game.world.centerX -50, game.world.centerY + 190, 't9');
        trash.type = "blue";
         
    }
    else if (num == 10){
        trash = game.add.sprite(game.world.centerX -50, game.world.centerY + 190, 't10');
        trash.type = "green";
         
    }
    else if (num == 11){
        trash = game.add.sprite(game.world.centerX -50, game.world.centerY + 190, 't11');
        trash.type = "blue";
        
    }
    else if (num == 12){
        trash = game.add.sprite(game.world.centerX -50, game.world.centerY +190, 't12');
        trash.type = "yellow";
         
    }
    else if (num == 13){
        trash = game.add.sprite(game.world.centerX-50, game.world.centerY + 190, 't13');
        trash.type = "blue";
         
    }
    else if (num == 14){
        trash = game.add.sprite(game.world.centerX -50, game.world.centerY + 190, 't14');
        trash.type = "black";
         
    }
    else if (num == 15){
        trash = game.add.sprite(game.world.centerX -50, game.world.centerY + 190, 't15');
        trash.type = "yellow";
        
    }
    else if (num == 16){
        trash = game.add.sprite(game.world.centerX -50, game.world.centerY + 190, 't16');
        trash.type = "yellow";
         
    }
    else if (num == 17){
        trash = game.add.sprite(game.world.centerX -50, game.world.centerY + 190, 't17');
        trash.type = "blue";
         
    }
    else if (num == 18){
        trash = game.add.sprite(game.world.centerX -50, game.world.centerY + 190, 't18');
        trash.type = "green";
         
    }
    else if (num == 19){
        trash = game.add.sprite(game.world.centerX-50, game.world.centerY + 190, 't19');
        trash.type = "yellow";
         
    }
    else if (num == 20){
        trash = game.add.sprite(game.world.centerX -50, game.world.centerY + 190, 't20');
        trash.type = "yellow";
        
    }
    trash.height = trash.height/2;
    trash.width = trash.width/2;
}

function tempfunc (){
	text.text = "Game Over";
	game.state.start('gameover');

}

function green_listener () {
  
     trash.click = true;

    if (trash.type == "green"){
    	answer = true; 
    	score += 1;
    }
    else{
    	score = score - 1;
    }

}
function blue_listener () {

	trash.click = true;
    
    if (trash.type == "blue"){
    	answer = true; 
    	score += 1;

    }
     else{
    	score = score - 1;
    } 
}
function yellow_listener () {

	trash.click = true;

    if (trash.type == "yellow"){
    	answer = true; 
    	score += 1;
    }
     else{
    	score = score - 1;
    }
}

function black_listener () {

	trash.click = true;

    if (trash.type == "black"){
    	answer = true; 
    	score += 1;
    }
     else{
    	score = score - 1;
    }
}