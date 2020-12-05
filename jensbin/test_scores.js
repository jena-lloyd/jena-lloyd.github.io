// Jenifer Lloyd
// Lab6

var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

var displayResults = $("display_results").innerHTML;

var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.getElementById("results");
var child = document.getElementById("p1");
element.insertBefore(para,child);

//var displayScores = $("scores_table").innerHTML;
//var addScore = $("add")

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


