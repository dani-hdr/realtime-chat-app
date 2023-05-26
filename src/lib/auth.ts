
import connectDb from "@/lib/mongoose";
import User from "@/models/user";
import { IUser } from "@/types/User";
import bcrypt from "bcrypt";
import { Document } from "mongoose";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages:{
    signIn:'/auth/sign-in'
  },
  providers: [
    CredentialsProvider({
      credentials: {},
      async authorize(credentials) {
        await connectDb();
         
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        console.log(username)
        const user:IUser | null = await User.findOne<IUser>({ username });
        if(!user)
          return null;
        const compare = await bcrypt.compare(password,user?.password);
        if(compare){
          console.log(user)
          return {id:user._id,name:user.username}
        }else{
          console.log('error null')
          return null
        }
        
         

      },
    }),
  ],
  callbacks:{
    async jwt({token,user}){
      console.log(token)
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
     
      return session
    }
  },
};
