import { reducerCases } from "@/context/constants";
import { useStateProvider } from "@/context/StateContext";
import { ADD_MESSAGE_ROUTE } from "@/utils/ApiRoutes";
import axios from "axios";
import EmojiPicker from "emoji-picker-react";
import React, { useEffect, useRef, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { ImAttachment } from "react-icons/im"
import { MdSend } from "react-icons/md";
function MessageBar() {
  const [{userInfo, currentChatUser, socket},dispatch]=useStateProvider()
  const [message, setMessage] = useState("")
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const emojiPickerRef = useRef(null)

  useEffect(()=>{
    const handleOutsideClick = (event) => {
      if(event.target.id != "emoji-open"){
        if(emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)){
          setShowEmojiPicker(false)
        }
      }
    }
    document.addEventListener("click", handleOutsideClick)
    return () => {
      document.removeEventListener("click", handleOutsideClick)
    }
  })

  const handleEmojiModal = () => {
    setShowEmojiPicker(!showEmojiPicker)
  }

  const handleEmojiClick = (emoji) => {
    setMessage((prevMessage)=>(prevMessage += emoji.emoji))
  }

  const sendMessage = async () => {
    try {
      const {data} = await axios.post(ADD_MESSAGE_ROUTE,{
        to:currentChatUser?.id,
        from: userInfo?.id,
        message,
      })
      socket.current.emit("send-msg",{
        to:currentChatUser?.id,
        from: userInfo?.id,
        message: data.message,
      })
      dispatch({
        type: reducerCases.ADD_MESSAGE,
        newMessage: {
          ...data.message,
        },
        fromSelf: true,
      })
      setMessage("")
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="bg-search-input-container-background h-20 px-4 flex items-center gap-6 relative">
      <>
        <div className="flex gap-6">
          <BsEmojiSmile className="text-greenishblue cursor-pointer text-xl" title="Emoji"
            id="emoji-open"
            onClick={handleEmojiModal}
          />
          {showEmojiPicker && <div className="absolute bottom-24 left-16 z-40" ref={emojiPickerRef}>
            <EmojiPicker onEmojiClick={handleEmojiClick}/>
          </div>}
          <ImAttachment className="text-greenishblue cursor-pointer text-xl" title="Attach File"/>
        </div>
        <div className="w-full rounded-lg h-10 flex items-center">
          <input type="text" placeholder="Type a message" className="bg-panelbackground text-sm focus:outline-none h-10 rounded-lg px-5 py-4 w-full"
            onChange={e=>setMessage(e.target.value)}
            value={message}
          />
        </div>
        <div className="flex w-10 items-center justify-center">
          <button>
            <MdSend className="text-greenishblue cursor-pointer text-xl" title="Send message" onClick={sendMessage}/>
            {/* <FaMicrophone className="text-greenishblue cursor-pointer text-xl" title="Record"/> */}
          </button>
        </div>
      </>
    </div>
  );
}

export default MessageBar;
