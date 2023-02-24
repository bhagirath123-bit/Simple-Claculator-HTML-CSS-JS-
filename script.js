


	let screen = document.querySelector('.screen');
	let buttons = document.querySelectorAll('.btn');
	let clear = document.querySelector('.btn-clear');
	let equal = document.querySelector('.btn-equal');



	buttons.forEach(function(button){
		button.addEventListener('click',function(e){
			
			let value =e.target.dataset.num;
			screen.value += value;
		})
	});
	

       
	// equal.addEventListener('click', function(e){
		  function onClick(){
			

		
		// console.log(screen.value);
		if(screen.value ===''){
			screen.value = "Please enter";

		}
		else {
			let answer = eval(screen.value).toString();
		
			 screen.value = answer;
			//  answer=screen.value;
			 
		}
		
	}
	// .toString();
	clear.addEventListener('click',function(e){
		
		// console.log("hello");
		screen.value = "";
	});

