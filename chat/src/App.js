import { useRef, useState } from "react";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import SendMessage from "./components/SendMessage/SendMessage";
import GetMessages from "./components/GetMessages/GetMessages";

export function App() {
  const [id, setId] = useState("");
  const [token, setToken] = useState("");
  const host = "https://web-develop-react-express-chat.herokuapp.com";
  const [login, setLogin] = useState(true);
  const [signUp, setSignUp] = useState(false);
  const [getMessages, setGetMessages] = useState(false);
  const [sendMessage, setSendMessages] = useState(false);

  return (
    <>
      {signUp && (
        <SignUp
          setId={setId}
          url={host}
          setLogin={setLogin}
          setToken={setToken}
          setSignUp={setSignUp}
        />
      )}

      {login && (
        <LogIn
          id={id}
          setLogin={setLogin}
          setToken={setToken}
          setSignUp={setSignUp}
          setGetMessages={setGetMessages}
        />
      )}

      {getMessages && (
        <GetMessages
          url={host}
          token={token}
          setGetMessages={setGetMessages}
          setSendMessages={setSendMessages}
        />
      )}

      {sendMessage && (
        <SendMessage
          token={token}
          setGetMessages={setGetMessages}
          setSendMessages={setSendMessages}
        />
      )}
    </>
  );
}

export default App;
