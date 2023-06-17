export default function LoginFormValidation(enteredEmail, enteredPassword) {
  const loginErrors = {};
  const emailPattern =
    /^[a-z]{1}[a-z0-9._-]+[a-z]+@+\@?[a-z]{1}?.\@?[a-z]+\.?[a-z]{2,6}\.?[a-z]{2,6}$/;
  const passwordPattern =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~!@#$%^&*]).{8,12}$/;

  if (enteredEmail === "") {
    loginErrors.enteredEmail = (
      <p className="text-red-600">Email is required!</p>
    );
  } else if (!emailPattern.test(enteredEmail)) {
    loginErrors.enteredEmail = (
      <p className="text-yellow-600">Please enter valid email!</p>
    );
  }

  if (enteredPassword === "") {
    loginErrors.enteredPassword = (
      <p className="text-red-600">Password is required!</p>
    );
  } else if (!passwordPattern.test(enteredPassword)) {
    loginErrors.enteredPassword = (
      <p className="text-yellow-600">Please enter valid password!</p>
    );
  }

  return loginErrors;
}
