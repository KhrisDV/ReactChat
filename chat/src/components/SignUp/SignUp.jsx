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
        <h2>Sign Up</h2>

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

        <button onClick={registerUser}>Sign up</button>
    </>
  );
}
export default SignUp;
