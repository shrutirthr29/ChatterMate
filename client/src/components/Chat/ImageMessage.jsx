import { useStateProvider } from "@/context/StateContext";
import Image from "next/image";
import React from "react";
import MessageStatus from "../common/MessageStatus";
import { calculateTime } from "@/utils/CalculateTime";
import { HOST } from "@/utils/ApiRoutes";

function ImageMessage({ message }) {
  const [{ currentChatUser, userInfo }] = useStateProvider()
  return (
    <div className={`p-1 rounded-lg ${message.senderId === currentChatUser.id ? "bg-search-input-container-background" : "bg-greenishblue"}`}>
      <div className="relative">
        <Image src={`${HOST}/${message.message}`}
          className="rounded-lg"
          alt="asset"
          height={300}
          width={300}
        />
        <div className="absolute bottom-1 right-1 flex items-end gap-1">
          <span className={`text-[11px] pt-1 min-w-fit ${message.senderId === currentChatUser.id ? "text-calendar-text-light" : "text-bubble-meta"}`}>
            {
              calculateTime(message.createdAt)
            }
          </span>
          <span className="text-bubble-meta">
            {
              message.senderId === userInfo.id && (<MessageStatus messageStatus={message.messageStatus}/>)
            }
          </span>
        </div>
      </div>
    </div>
  );
}

export default ImageMessage;
