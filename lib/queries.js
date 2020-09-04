$(document).ready(function(){
	$('.submit').click(function(event){
		
		var name = $('.name').val()
		var email = $('.email').val()
		var subject = $('.subject').val()
		var message = $('.message').val()
		var statusElm = $('.status')
		statusElm.empty()
		
		/*if(email == undefined 
		&& email.length < 5 
		&& email.includes('@') 
		&& email.includes('.')){
			event.preventDefault()
			statusElm.append('<div>Email is not valid</div>')
		}
		
		if(subject.length < 2){
			event.preventDefault()
			statusElm.append('<div>Subject is too short</div>')
		}
		
		if(message.length < 10){
			event.preventDefault()
			statusElm.append('<div>Message is too short</div>')
		}
		*/
	
	})
	
})


