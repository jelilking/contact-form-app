import { useState } from "react";

export default function App() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="App">
      <div className="container">
        <Result />
        <h1>Contact Us</h1>
        <ContactForm
          handleSubmit={handleSubmit}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          queryType={queryType}
          setQueryType={setQueryType}
          message={message}
          setMessage={setMessage}
          consent={consent}
          setConsent={setConsent}
          error={error}
          setError={setError}
        />
      </div>
    </div>
  );
}

function ContactForm({
  handleSubmit,
  firstName,
  setFirstName,
  lastName,
  setLastName,
}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-name">
          <div>
            <label>First Name *</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label>Last Name *</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="form-email">
          <label>Email *</label>
          <input type="email" />
        </div>
        <div>
          <label>Query Type *</label>
          <div className="radio">
            <label>
              <input type="radio" name="queryType" value="query" />
              General Enquiry
            </label>
            <label>
              <input type="radio" name="queryType" value="query" />
              Support Request
            </label>
          </div>
        </div>
        <div className="form-message">
          <label>Message *</label>
          <textarea></textarea>
        </div>
        <div className="form-consent">
          <label>
            <input type="checkbox" /> i consent to being contacted by the team
          </label>
        </div>
        <div className="form-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

function Result() {
  return <div></div>;
}
