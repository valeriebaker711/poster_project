var myWords;
var myTextColor;
var myFontSize;
var myBkgdColor;


$('document').ready(function(){
	// console.log("ready");

	$('#submit').click(function(){
		// console.log("click");

		if($('#words').val() === ""){
			alert('please enter text');
		}else{
		// 	
		// }
		// return false;

		// collect user input from the #words input and store it in the "myWords" variable.
		myWords = $('#words').val();
		myTextColor = $('#text_color').val();
		myFontSize = $('#font_size').val();
		myBkgdColor = $('#bkgdColor').val();

		// INSTRUCTIONS: add statements like above to collect information from the rest of 
		// the inputs and store that information in the supplied variables.

		// trigger the createPoster() function below
		createPoster();
		// need this to prevent default behavior of input element.
		return false;
	}	
	});

	function createPoster(){
		// console.log('createPoster');

		// assigns the value of the myWords variable to the poster text html element
		$('#poster_text').html(myWords);

		// same as above - "myFontSize" stores just a number, so we needed to add "px"
		// to give us "50px," for example for the value of "font-size"
		$('#poster_text').css('font-size', myFontSize + "px");

		// INSTRUCTIONS: add statements like the above to assign the values of the 
		// 'myFontSize' and 'myBkgdColor' variables to the #poster element

		$('#poster').css('background-color', myBkgdColor);

		$('#poster_text').css('color', myTextColor);

		
	}

	// sets the default color of the poster's background to white
	$('#bkgdColor').val('#FFFFFF');

	// use below for debugging with console.log()
	$('#submit').click(buttonClick);

	function buttonClick(){
		console.log($('#bkgdColor').val());
		return false;
	}

	// BONUS INSTRUCTIONS- Add a validator to make sure user has entered text in the text input
});



