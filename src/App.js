import { useState } from "react";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [queryType, setQueryType] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    queryType: false,
    message: false,
    consent: false,
  });

  const [result, setResult] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newError = {
      firstName: !firstName,
      lastName: !lastName,
      email: !email,
      queryType: !queryType,
      message: !message,
      consent: !consent,
    };

    setError(newError);

    if (firstName && lastName && email && queryType && message && consent) {
      setResult("your info has been successfully sent to us");
    } else if (
      newError.firstName ||
      newError.lastName ||
      newError.email ||
      newError.queryType ||
      newError.message ||
      !consent
    ) {
      return;
    }
  }

  return (
    <div className="App">
      <div className="container">
        <Result result={result} />
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
  email,
  setEmail,
  queryType,
  setQueryType,
  message,
  setMessage,
  consent,
  setConsent,
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
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Query Type *</label>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="queryType"
                value="general enquiry"
                checked={queryType === "general enquiry"}
                onChange={(e) => setQueryType(e.target.value)}
              />
              General Enquiry
            </label>
            <label>
              <input
                type="radio"
                name="queryType"
                value="support request"
                checked={queryType === "support request"}
                onChange={(e) => setQueryType(e.target.value)}
              />
              Support Request
            </label>
          </div>
        </div>
        <div className="form-message">
          <label>Message *</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="form-consent">
          <label>
            <input
              type="checkbox"
              value={consent}
              onChange={(e) => setConsent(e.target.value)}
            />
            i consent to being contacted by the team
          </label>
        </div>
        <div className="form-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

function Result({ result }) {
  return <div>{result}</div>;
}
