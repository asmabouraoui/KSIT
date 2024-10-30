const scriptURL = 'https://script.google.com/macros/s/AKfycbzpdVMlqpySuKHoaax3Ns9CEljuGF0q8KlGNINFE3G3HM4w50yeFtaY-GzVpJuAH0Nw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

function emailSend(){


	var yourname = document.getElementById('your-name').value;
	var yournumber = document.getElementById('your-number').value;
	var youremail = document.getElementById('your-email').value;
  var message = document.getElementById('message').value;


	var messageBody = "your-name " + yourname +
	"<br/> your-number " + yournumber +
	"<br/> your-email " + youremail;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "KSIT-Website@gmail.com",
    Password : "D8B30426F629182A0895AFC27B5F61986A93",
    To : '2001asmabouraoui@gmail.com',
    From : "website@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}
