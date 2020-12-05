// Jenifer Lloyd
// Lab6

var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

var displayResults = $("display_results").innerHTML;
//var displayScores = $("scores_table").innerHTML;
//var addScore = $("add")

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


