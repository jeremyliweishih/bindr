// gameover.js
lat = 0;
long = 0;
var scoreText;

var gameoverState = {

	create: function () {
		var background = game.add.sprite(-200, 100, 'binjamin_crying');

		var binjaminMessage = game.add.text(80, 50, 'Game over', 
			{font: '50px fantasy', fill: '#00600'} );

		// PLAY AGAIN button
		var button = game.add.button(510, game.world.height - 80, 'play_again_button1');
		button.onInputOver.add(over, this);

		function over() {
		    button = game.add.button(510, game.world.height - 80, 'play_again_button2', play_again, this, 2, 1, 0);
		    button.onInputOut.add(out, this);
		}
		function out() {
		    button = game.add.button(510, game.world.height - 80, 'play_again_button1');
		    button.onInputOver.add(over, this);
		}
		function play_again() {
			game.state.start('welcome');
		}

		// HIGH SCORES button
		var hsbutton = game.add.button(80, game.world.height - 80, 'high_scores_button1');
		hsbutton.onInputOver.add(over_high, this);

		function over_high() {
		    hsbutton = game.add.button(80, game.world.height - 80, 'high_scores_button2', high_scores, this, 2, 1, 0);
		    hsbutton.onInputOut.add(out_high, this);
		}
		function out_high() {
		    hsbutton = game.add.button(80, game.world.height - 80, 'high_scores_button1');
		    hsbutton.onInputOver.add(over_high, this);
		}
		function high_scores() {
			window.location.assign('https://binjamin.herokuapp.com/scores');
		}

		// LOCAL SCORES button
		var lsbutton = game.add.button(290, game.world.height - 80, 'local_scores_button1');
		lsbutton.onInputOver.add(over_local, this);

		function over_local() {
		    lsbutton = game.add.button(290, game.world.height - 80, 'local_scores_button2', get_scores, this, 2, 1, 0);
		    lsbutton.onInputOut.add(out_local, this);
		}
		function out_local() {
		    lsbutton = game.add.button(290, game.world.height - 80, 'local_scores_button1');
		    lsbutton.onInputOver.add(over_local, this);
		}
		function get_scores() {
			window.location.assign('https://binjamin.herokuapp.com/local?city=' + city);
		}
		
		var scoreText = game.add.text(400, 50, 'You scored: ' + score, 
			{font: '50px fantasy', fill: '#00600'} );
		var username = window.prompt("Please enter your username!", "");
		
		navigator.geolocation.getCurrentPosition(function(position) {
		    lat = position.coords.latitude;
		    long = position.coords.longitude;
		    sendRequest();
		});

		//address = $.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + ", " + long + "&key=AIzaSyCkNB57b23Gmgyu2PFjMtqHFGUAhzI75FY");
		function sendRequest(){
			request = new XMLHttpRequest();
			request.open("get", "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + ", " + long + "&key=AIzaSyCkNB57b23Gmgyu2PFjMtqHFGUAhzI75FY", true);
			request.onreadystatechange = funex;
			request.send();
		}


		function funex() {
			if (request.readyState == 4 && request.status == 200) {
				theData = request.responseText;		
				parsedData = JSON.parse(theData);
				
				city = parsedData.results[2].address_components[1].long_name;
				var dataobj = {
					"username": username,
					"score": score,
					"city": city
				};

				$.post("http://binjamin.herokuapp.com/submit.json", dataobj,function(){});
				unparsed_scores = localStorage.getItem('binjaminscores');
		         
				if(unparsed_scores != null){
					scores = JSON.parse(unparsed_scores);
					scores.push(dataobj);
					localStorage.setItem('binjaminscores', JSON.stringify(scores));
					
				}
				
				else{
					var local = new Array();
					local.push(dataobj);
					localStorage.setItem('binjaminscores', JSON.stringify(local));
				}

			  	local_scores = JSON.parse(localStorage.getItem("binjaminscores"));
			  	local_scores.sort(sortObj);

			  	multiplier = 1;

			  	local_header = game.add.text(400, 120, "Scores On This Computer: ", {font: '30px fantasy', fill: '#00600'});
			  	for (var c = 0; c <= 5; c++) {
			        scoreText = game.add.text(425, 150 + 30 * multiplier, "Username: " + local_scores[c].username + "   Score: " + local_scores[c].score + "\n\n", {font: '25px fantasy', fill: '#00600'});
			      	multiplier++;
			    }
			}
		}
	}
};

function sortObj(a, b){
	return b.score - a.score;
}

