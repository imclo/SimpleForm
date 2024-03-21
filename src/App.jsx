import { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import Footer from "./components/Footer";

function App() {
  const [email, setEmail] = useState("chloe@mail.com");
  const [name, setName] = useState("Chloe");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);
  const [errorPassword, setErrorPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("hey");
    if (password !== confirmPassword) {
      // alert("Vos deux mots de passe ne sont pas identiques");
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
      setStep(2);
    }
  };

  return (
    <>
      <main className="container">
        {step === 1 ? (
          <Form
            handleSubmit={handleSubmit}
            setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            setErrorPassword={setErrorPassword}
            name={name}
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            errorPassword={errorPassword}
          />
        ) : (
          <StepTwo
            name={name}
            email={email}
            password={password}
            setStep={setStep}
          />
        )}

        {/* {show !== false ? (
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
                setEmail(event.target.value);
              }}
            />
            <p>Password</p>
            <input
              className={errorPassword ? "red" : ""}
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
              className={errorPassword ? "red" : ""}
              value={confirmPassword}
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="AzErTy1234!"
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />
            <button>Register</button>
            {errorPassword === true && (
              <h3 style={{ color: "red" }}>
                Vos mots de passe ne sont pas identiques
              </h3>
            )}
          </form>
        ) : (
          <div className="StepTwo">
            <h1>Results</h1>
            <div className="sumUp">
              <span>Name: {name}</span>
              <span>Email: {email}</span>
              <span>Password: {password}</span>
            </div>
            <button
              onClick={() => {
                setShow(true);
              }}
            >
              Edit your information
            </button>
          </div>
        )} */}
      </main>
      <Footer />
    </>
  );
}

export default App;
