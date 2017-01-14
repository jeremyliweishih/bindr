scoreText;

var score_display_state = {


  create: function(){

  	scores = localStorage.getItem("binjaminscores");
  	scores.sortObj(sort);

  	for (var c = 0; c < scores.length; c++)
    {
        scoreText.text += "city " + scores[c].city;
      
    }

	}
};

function sortObj(a, b){
	return (a.score - b.score);
}