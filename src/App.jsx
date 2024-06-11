import style from "./App.module.css";
import Input from "./assets/components/Input";
import { useRef } from "react";

function App() {
  const FIRST_NAME = useRef(null);
  const LAST_NAME = useRef(null);
  const EMAIL = useRef(null);
  const PHONE_NUMBER = useRef(null);

 function HANDLE_SUBMIT (e) {
    e.preventDefault();

    console.log(FIRST_NAME.current.value)
    console.log(LAST_NAME.current.value)
    console.log(EMAIL.current.value)
    console.log(PHONE_NUMBER.current.value)
  }

  return (
    <div className={style.mainDiv}>
      <div>
        <form onSubmit={HANDLE_SUBMIT}>
          <Input placeholder="First Name" name="first-name" reference={FIRST_NAME}/>
          <Input placeholder="Last Name" name="last-name" reference={LAST_NAME}/>
          <Input placeholder="Email" name="email" reference={EMAIL}/>
          <Input placeholder="Phone Number" name="phone-number" reference={PHONE_NUMBER}/>
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
}

export default App;
