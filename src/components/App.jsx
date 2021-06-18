import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const makeChange = (event) => {
    const [firstName, lastName, email] = event.target;
    event.preventDefault();
    setContact({
      fName: firstName.value,
      lName: lastName.value,
      email: email.value
    });
  };

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={makeChange}>
        <input name="fName" placeholder="First Name" />
        <input name="lName" placeholder="Last Name" />
        <input name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
