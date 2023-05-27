'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineChatAlt } from "react-icons/hi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";

type Props = {
    children:React.ReactNode
}
export default function DashboardLayout({
  children,
}: Props) {

    const pathname = usePathname()
  return (
    <div className="flex">
      <nav className="flex h-screen w-44 flex-col gap-5 border-r-2 p-5">
        <Image src="/logo.png" width={35} height={35} alt="logo" />
        <Link
          href="/chat"
          className={`${pathname == '/chat' ? 'text-blue-600' : ''} inline-flex items-center gap-3 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600`}
        >
          <HiOutlineChatAlt size={23} /> Chat
        </Link>
        <Link
          className={`${pathname == '/people' ? 'text-blue-600' : ''} inline-flex items-center gap-3 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600`}
          href="/people"
        >
          <MdOutlinePeopleAlt size={23} />
          People
        </Link>
        <Link
          className={`${pathname == '/requests' ? 'text-blue-600' : ''} inline-flex items-center gap-3 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600`}
          href="/requests"
        >
          <VscGitPullRequestNewChanges size={23} />
          Requests
        </Link>
      </nav>
      {children}
    </div>
  );
}
