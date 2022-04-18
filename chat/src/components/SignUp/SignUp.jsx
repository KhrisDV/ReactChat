import { useEffect, useRef, useState } from "react";

function SignUp(props) {
  const [userInput, setUserInput] = useState("");
  const [passInput, setPassInput] = useState("");

  function changeUserHandler(event) {
    setUserInput(event.target.value);
  }

  function changePassHandler(event) {
    setPassInput(event.target.value);
  }

  function registerUser() {
    let data = JSON.stringify({ userName: userInput, password: passInput });
    console.log(data);
    postUser(props.url + "/login/", data);
  }

  async function postUser(url, data) {
    const response = await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    console.log(responseData);
    props.setId(responseData);
  }

  return (
    <>
        <h2>SIGN UP</h2>

        <input
          type="text"
          placeholder="Username"
          onChange={changeUserHandler}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={changePassHandler}
        />
      
        <a href="#"onClick={()=>{
        props.setLogin(true)
        props.setSignUp(false)
      }}><p>¿Ya tienes cuenta? Inicia sesión</p></a>
      <button onClick={registerUser}>Sign up</button>
    </>
  );
}
export default SignUp;
