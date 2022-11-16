import React from "react";

const Message = () => {
  return (
    <div className="message">
      <div className="message-info">
        <img src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="message-content">
        <p>hello</p>
        {/* <img src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> */}
      </div>
    </div>
  );
}

export default Message;