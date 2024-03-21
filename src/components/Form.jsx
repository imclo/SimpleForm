import { useState } from "react";

const Form = ({
  handleSubmit,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setErrorPassword,
  name,
  email,
  password,
  confirmPassword,
  errorPassword,
}) => {
  return (
    <>
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
            setErrorPassword(true);
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
            setErrorPassword(true);
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
    </>
  );
};

export default Form;
