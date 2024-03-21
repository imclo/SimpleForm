import { useState } from "react";
import "./App.css";

import Footer from "./components/Footer";

function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Vos deux mots de passe ne sont pas identiques");
    }
  };

  return (
    <>
      <main className="container">
        <form onSubmit={handleSubmit}>
          <h1>Create account</h1>
          <p>Name</p>
          <input
            value={name}
            type="text"
            name="name"
            id="name"
            placeholder="Jean Dupont"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <p>Email</p>
          <input
            value={email}
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            onChange={(event) => {
              setEmail(event.target.email);
            }}
          />
          <p>Password</p>
          <input
            value={password}
            type="password"
            name="password"
            id="password"
            placeholder="AzErTy1234!"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <p>Confirm your password</p>
          <input
            value={confirmPassword}
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="AzErTy1234!"
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
          <button
            className={show === true ? "results" : "form"}
            onClick={() => {
              setShow(true);
              <div className="StepTwo">
                <h1>Results</h1>
                <span>Name: {name}</span>
                <span>Email: {email}</span>
                <span>Password: {password}</span>
                <button>Edit your information</button>
              </div>;
            }}
          >
            Register
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default App;
