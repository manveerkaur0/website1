
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");

    function validate(e) {
      // Hides all error elements on the page
      hideErrors();
    
      // Determine if the form has errors
      if (formHasErrors()) {
        // Prevents the form from submitting
        e.preventDefault();
    
        // When using onSubmit="validate()" in markup, returning false would prevent
        // the form from submitting
        return false;
      }
    
      // When using onSubmit="validate()" in markup, returning true would allow
      // the form to submit
      return true;
    
    }
  
    form.addEventListener("submit", function(event) {
      let isValid = true;
  
      if (nameInput.value.trim() === "") {
        isValid = false;
        showError(nameInput, "Name is required");
      }
  
      if (!/^\d{10}$/.test(phoneInput.value)) {
        isValid = false;
        showError(phoneInput, "Please enter a valid 10-digit phone number");
      }
  
      if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
        isValid = false;
        showError(emailInput, "Please enter a valid email address");
      }
  
      if (!isValid) {
        event.preventDefault();
      }
    });
  
    function showError(input, message) {
      const errorDiv = document.createElement("div");
      errorDiv.className = "error-message";
      errorDiv.textContent = message;
  
      input.classList.add("error");
      input.parentNode.insertBefore(errorDiv, input.nextSibling);
  
      input.addEventListener("input", function() {
        input.classList.remove("error");
        if (input.nextSibling === errorDiv) {
          input.parentNode.removeChild(errorDiv);
        }
      });
  
      input.focus();
      input.select();
    }
  ;
  var noti = document.querySelector('h1');
	var select = document.querySelector('.select');
	var button = document.getElementsByTagName('button');
	for(var but of button){
		but.addEventListener('click', (e)=>{
			var add = Number(noti.getAttribute('data-count') || 0);
			noti.setAttribute('data-count', add +1);
			noti.classList.add('zero')

			// image --animation to cart ---//
			var image = e.target.parentNode.querySelector('img');
			var span = e.target.parentNode.querySelector('span');
			var s_image = image.cloneNode(false);
			span.appendChild(s_image);
			span.classList.add("active");
			setTimeout(()=>{
				span.classList.remove("active");
				span.removeChild(s_image);
			}, 500); 
			

			// copy and paste //
			var parent = e.target.parentNode;
			var clone = parent.cloneNode(true);
			select.appendChild(clone);
			clone.lastElementChild.innerText = "Buy-now";
			
			if (clone) {
				noti.onclick = ()=>{
					select.classList.toggle('display');
				}	
			}
		})
	}
	
  