import React from "react";
import { useState } from "react";


const Form = () => {
	const [contact, setContact] = useState({
		fullName: "",
		email: "",
	})

	const [showError, setShowError] = useState(false);
	const [showSubmited, setShowSubmited] = useState(false);

	function validateEmail(email) {
		const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
		return emailRegex.test(email);
	}
	function validateName(name) {
		const nameRegex = /^[a-zA-Z ]{6,}$/;
		return nameRegex.test(name);
	}
	function handleSubmit(e) {
		e.preventDefault();
		if(!validateEmail(contact.email) || !validateName(contact.fullName)) {
			setShowError(true);
		} else {
			setShowSubmited(true);
		}
	}

	function handleChange(e) {
		setContact({
			...contact,
			[e.target.name]: e.target.value,
		})
	}
  
	function handleOnFocus() {
		setShowError(false);
		setShowSubmited(false);
	}

  return (
    <div className="form">
        <form onSubmit={handleSubmit}>
					  <input name="fullName" onFocus={handleOnFocus} onChange={handleChange} type="text" minLength={6} placeholder="Nombre completo" />
					  <input name="email" onFocus={handleOnFocus} onChange={handleChange} type="email" placeholder="Email" />
					  <button className="send">Send</button>
        </form>
			      {showError && <p>Verify introduced info.</p>}
			      {showSubmited && <p>{contact.fullName}, thank you! We will contact you as soon as possible</p>}
	</div>
  );
};

export default Form;