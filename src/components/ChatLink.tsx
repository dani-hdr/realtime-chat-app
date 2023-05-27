import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  avatarUrl: string;
  username: string;
  lastMessage: string;
  time: string;
};
const ChatLink = ({ href, avatarUrl, username, lastMessage, time }: Props) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-slate-50 "
    >
      <Image
        className="rounded-full"
        src={avatarUrl}
        width={35}
        height={35}
        alt="avatar"
      />
      <div className="flex flex-col">
        <h2 className="text-sm font-medium text-slate-600">{username}</h2>
        <div className="flex gap-1 text-xs text-slate-400 ">
          <p>{lastMessage}</p>
          <span className="font-medium text-slate-400 ml-auto">{time} ago</span>
        </div>
      </div>
    </Link>
  );
};

export default ChatLink;
