var script = document.createElement('script');
 
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script); 



function loadTopic(name, idOfButton, divID) {
	$(document).ready(function(){
		
		name = "#" + name
		idOfButton = "#" + idOfButton
		divID = "#" + divID
		
		$(idOfButton).click(function(){
			
			$(divID).load("./Topics.html " + name);

		});
	});
}
