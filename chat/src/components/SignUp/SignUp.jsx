import { useEffect, useRef, useState } from "react";

function SignUp(props) {
  const [userInput, setUserInput] = useState("");
  const [passInput, setPassInput] = useState("");

  function changeUserHandler(event) {
    setUserInput(event.target.value);
  }

  function changePassHandler(event) {
    setPassInput(event.target.value);
    setUserInput(props.id);
  }

  function authToken(id, secret) {
    // En autenticación Basic, usuario y contraseña se separan con ':'
    const authToken = `${id}:${secret}`;
    // Y se codifican en Base64
    const base64token = btoa(authToken);
    props.setToken(`Basic ${base64token}`);
  }

  function signUser() {
    authToken(userInput, passInput);
  }
  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="ID"
        onChange={changeUserHandler}
        value={props.id}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={changePassHandler}
      />
      <button onClick={signUser}>Login</button>
    </>
  );
}
export default SignUp;
