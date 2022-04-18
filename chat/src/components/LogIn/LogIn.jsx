import { useEffect, useRef, useState } from "react";
import "./LogIn.css"

function LogIn(props) {
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
    props.setGetMessages(true)
  }
  return (
    <>
    <div id="logintotal">
      <h2>LOGIN</h2>
      
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

      <a href="#"onClick={()=>{
        props.setLogin(false)
        props.setSignUp(true)
      }}><p> ¿No tienes cuenta? Regístrate</p></a>
      <button onClick={signUser}>Login</button>
      </div>
    </>
  );
}
export default LogIn;
