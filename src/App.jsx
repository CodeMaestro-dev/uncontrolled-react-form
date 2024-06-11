import style from "./App.module.css";
import Input from "./assets/components/Input";
import { useRef, useState } from "react";

function App() {
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  const FIRST_NAME = useRef(null);
  const LAST_NAME = useRef(null);
  const EMAIL = useRef(null);
  const PHONE_NUMBER = useRef(null);

  function HANDLE_SUBMIT(e) {
    e.preventDefault();
    setShow(false)
    if (
      !FIRST_NAME.current.value ||
      !LAST_NAME.current.value ||
      !EMAIL.current.value ||
      !PHONE_NUMBER.current.value
    ) {
      setShow(true);
      return setError("Please fill out all fields");
    } else {
      setSuccess(true)
      console.log(FIRST_NAME.current.value);
      console.log(LAST_NAME.current.value);
      console.log(EMAIL.current.value);
      console.log(PHONE_NUMBER.current.value);

      setTimeout (()=> {
        window.location.reload();
      }, 2000)
    }
  }

  return (
    <div className={style.mainDiv}>
      {success ? (
        <div className={style.toast}>
          <img src="/check_circle.svg" alt="" />
          <div>
            <h1 id={style.toastHeading}>User Details Submitted Successfully</h1>
            <p id={style.toastDetails}>Redirecting...</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div>
        <form onSubmit={HANDLE_SUBMIT}>
          <Input
            placeholder="First Name"
            name="first-name"
            reference={FIRST_NAME}
          />
          <Input
            placeholder="Last Name"
            name="last-name"
            reference={LAST_NAME}
          />
          <Input placeholder="Email" name="email" reference={EMAIL} />
          <Input
            placeholder="Phone Number"
            name="phone-number"
            reference={PHONE_NUMBER}
          />
          <input type="submit" value="Register" />
          {show ? <p id={style.error}>{error}</p> : <p></p>}
        </form>
      </div>
    </div>
  );
}

export default App;
