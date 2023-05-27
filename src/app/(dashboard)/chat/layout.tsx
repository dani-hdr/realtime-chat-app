import ChatLink from '@/components/ChatLink'
import React from 'react'

type Props = {
    children:React.ReactNode
 }
const ChatLayout = ({children} : Props) => {

  return (
    <>
    <nav className='border-r-2 p-5 max-w-72 flex flex-col gap-3 h-screen'>
        <h1 className='text-lg font-bold'>Chats</h1>
        <input type="text" className='rounded-lg border-none bg-slate-100 placeholder-slate-400 text-sm' placeholder='Search Messenger'/>
        <div className='overflow-y-auto'>
        <ul className='flex flex-col '>    
           <ChatLink href='/chat/123' username='Daniel Heydari' avatarUrl='/logo.png' lastMessage='let go out' time='1min'/>
           <ChatLink href='/chat/123' username='Daniel Heydari' avatarUrl='/logo.png' lastMessage='let go out' time='1min'/>
           <ChatLink href='/chat/123' username='Daniel Heydari' avatarUrl='/logo.png' lastMessage='let go out' time='1min'/>
           <ChatLink href='/chat/123' username='Daniel Heydari' avatarUrl='/logo.png' lastMessage='let go out' time='1min'/>
         
        </ul>
        </div>
    </nav>
    <>
        {children}
    </>
    </>
  )
}

export default ChatLayout