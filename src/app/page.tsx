import { getServerSession } from 'next-auth'
import { redirect } from 'next/dist/server/api-utils';
import Image from 'next/image'

export default async function Home() {
  const session =await getServerSession();
  if(!session)
    return <p>Access not allowed</p>
  return (
    <h1>Hello {session?.user?.name}</h1>
  )
}
