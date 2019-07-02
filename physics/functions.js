var script = document.createElement('script');
 
script.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
document.getElementsByTagName('head')[0].appendChild(script); 

var loadedTopics = ""

function loadTopic(name, idOfButton, divID) {
	$(document).ready(function(){
		
		name = "#" + name;
		idOfButton = "#" + idOfButton;
		divID = "#" + divID;
		
			if (loadedTopics.includes(name) == false) {
				$(divID).load("./Topics.html " + name);
				loadedTopics = name + " " +  loadedTopics;
			}
	});
}

