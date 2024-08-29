import React from "react";
import Avatar from "../common/Avatar";

function ChatListItem({ data, isContactPage = false }) {
  return (
    <div className={`flex cursor-pointer items-center hover:bg-search-input-container-background`}>
    <div className="min-w-fit px-5 pt-3 pb-1">
      <Avatar type="lg" image={data?.profilePicture}/>
    </div>
    </div>
  );
}

export default ChatListItem;
