import "./App.css";
import { useRef, useState } from "react";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import SendMessage from "./components/SendMessage/SendMessage";
import GetMessages from "./components/GetMessages/GetMessages";

export function App() {
  const [id, setId] = useState("");
  const [token, setToken] = useState("");
  const host = "https://web-develop-react-express-chat.herokuapp.com";

  return (
    <>
      <SignUp setId={setId} url={host} />
      <LogIn id={id} setToken={setToken} />
      <GetMessages url={host} token={token} />
      <SendMessage url={host} token={token} />
    </>
  );
}

export default App;
