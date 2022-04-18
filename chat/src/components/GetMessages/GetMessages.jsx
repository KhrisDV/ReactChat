import { useEffect, useState } from "react";

function GetMessages(props) {
  const [messages, setMessages] = useState("");

  async function authGet(url, token) {
    const response = await fetch(url, {
      headers: {
        Authorization: token,
      },
    });
    const data = await response.json();
    
    setMessages(
      data.map((item, idx) => (
        <dl key={idx}>
          {" "}
          Usuario{item.source}: {item.content}
        </dl>
      ))
    );
    return data;
  }
  function updateMessages() {
    authGet(props.url + "/messages/", props.token);
  }
  useEffect(() => {
    setTimeout(updateMessages, 1000);
  });

  return (
    <>
    <dt>{messages}</dt>
    </>
  );
}
export default GetMessages;
