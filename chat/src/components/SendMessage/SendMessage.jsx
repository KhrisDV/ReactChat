import { useRef, useState } from "react";
function SendMessage(props) {
  const [textInput, setTextInput] = useState("");

  function changeTextHandler(event) {
    setTextInput(event.target.value);
  }

  function sendText() {
    let data = JSON.stringify({ content: textInput });
    postText(props.url + "/message/", data, props.token);
    setTextInput("");
  }
  async function postText(url, data, token) {
    const response = await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const responseData = await response.json();
  }
  return (
    <>
      <input
        name=""
        id=""
        onChange={changeTextHandler}
        value={textInput}
      ></input>
      <button onClick={sendText}>Enviar</button>
    </>
  );
}
export default SendMessage;
