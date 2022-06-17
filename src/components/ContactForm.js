import React, { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  return (
    <section className="component-container">
      <h1>Contact Me </h1>
      <p>
        Feel free to leave any message or ask any questions that you might have
        😄
      </p>
      <form className="container">
        <div>
          <label className="field field_v1">
            <input
              value={email}
              onChange={handleInputChange}
              type="email"
              name="email"
              placeholder="email"
              className="field__input"
              required
            />
            <span className="field__label-wrap">
              <span className="field__label">Email</span>
            </span>
          </label>
        </div>
        <div>
          <label className="field field_v1">
            <input
              value={name}
              onChange={handleInputChange}
              type="name"
              name="name"
              placeholder="name"
              className="field__input"
              required
            />
            <span className="field__label-wrap">
              <span className="field__label">Name</span>
            </span>
          </label>
        </div>
        <div>
          <label className="field field_v1">
            <textarea
              value={message}
              onChange={handleInputChange}
              type="message"
              name="message"
              placeholder="message"
              className="field__input"
              style={{ height: "4rem", width: "253.33px" }}
              required
            />
            <span className="field__label-wrap">
              <span className="field__label">Message</span>
            </span>
          </label>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </section>
  );
}
