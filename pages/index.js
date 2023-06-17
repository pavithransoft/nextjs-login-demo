import { useRef, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Link from "next/link";
import LoginFormValidation from "@/components/LoginFormValidation";

export default function Home() {
  const [visible, setVisible] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const [loginErrors, setLoginErrors] = useState({});

  function eyeClick() {
    setVisible(!visible);
  }

  const eyeIcon = visible ? (
    <FaEye onClick={eyeClick} className="eye-icon" />
  ) : (
    <FaEyeSlash onClick={eyeClick} className="eye-icon" />
  );

  const passwordInputType = visible ? "text" : "password";

  function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    setLoginErrors(LoginFormValidation(enteredEmail, enteredPassword));

    console.log(enteredEmail, enteredPassword);

    // emailRef.current.value = "";
    // passwordRef.current.value = "";
  }

  return (
    <div className="screen">
      <div className="split-screen">
        <h1>Next Login</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="example@domain.com"
              maxLength={100}
              ref={emailRef}
              autoFocus
              // required
              className={loginErrors.enteredEmail ? "invalid-input peer" : ""}
            />
            {loginErrors.enteredEmail && (
              <span>{loginErrors.enteredEmail}</span>
            )}
          </div>
          <div className="relative">
            <label htmlFor="password">Password</label>
            <input
              type={passwordInputType}
              id="password"
              placeholder="************"
              minLength={8}
              maxLength={12}
              // max={12}
              ref={passwordRef}
              autoFocus
              // required
              className={
                loginErrors.enteredPassword ? "invalid-input peer" : ""
              }
            />
            {eyeIcon}
            {loginErrors.enteredPassword && (
              <span className="error-span">{loginErrors.enteredPassword}</span>
            )}
          </div>
          <div className="flex justify-between text-sm mt-4">
            <div className="flex flex-row gap-[0.2rem]">
              <input type="checkbox" className="h-4 w-4 m-[0.2rem]" />
              <h2>Remember me</h2>
            </div>
            <Link href="">Forget Password?</Link>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
