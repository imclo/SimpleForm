const StepTwo = ({ name, email, password, setStep }) => {
  return (
    <div className="StepTwo">
      <h1>Results</h1>
      <div className="sumUp">
        <span>Name: {name}</span>
        <span>Email: {email}</span>
        <span>Password: {password}</span>
      </div>
      <button
        onClick={() => {
          setStep(1);
        }}
      >
        Edit your information
      </button>
    </div>
  );
};

export default StepTwo;
