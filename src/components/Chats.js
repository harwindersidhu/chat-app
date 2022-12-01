import { doc, onSnapshot } from "@firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {

  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      //onSnapshot: firebase function to fetch realtime updates
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (user) => {
    dispatch({type: "CHANGE_USER", payload:user})
  };

  //Response from getChats() was in object form. SO we will convert it into array.
  console.log("Chats: ", Object.entries(chats));
  const userChats = Object.entries(chats)?.map((chat) => {
    return <div className="user-chat" key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)} >
      <img src={chat[1].userInfo.photoURL} alt="" />
      <div className="user-chat-info">
        <span>{chat[1].userInfo.displayName}</span>
        <p>{chat[1].lastMessage?.text}</p>
      </div>
    </div>
  });

  return (
    <div className="chats">
      {userChats}
    </div>
  );
}

export default Chats;