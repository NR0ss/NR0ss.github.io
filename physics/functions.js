var script = document.createElement('script');
 
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script); 

var loadedTopics = ""

function loadTopic(name, idOfButton, divID) {
	$(document).ready(function(){
		
		name = "#" + name
		idOfButton = "#" + idOfButton
		divID = "#" + divID
		
		$(idOfButton).click(function(){
			if (loadedTopics.includes(name) == false) {
				$(divID).load("./Topics.html " + name);
				loadedTopics = name + " " +  loadedTopics;
			}
		});
	});
}
