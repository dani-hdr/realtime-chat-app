import { NextResponse } from "next/server";

import connectDb from "@/lib/mongoose";
import User from "@/models/user";
import bcrypt from 'bcrypt'
import { IUser } from "@/types/User";


export async function POST(req: Request) {
  const user : IUser = await req.json();
  try {
     await connectDb();
    const userExist = await User.exists({username : user.username})
    
    if(userExist) 
      return NextResponse.json({message:"Username is already taken!"},{status:400});
    
    const hashedPassword = await bcrypt.hash(user.password,10)
    const userToAdd = {
        username:user.username.trim().toLowerCase(),
        password:hashedPassword
    }
     await User.create(userToAdd);
    return NextResponse.json({message:'Sign up was succesful!'});
  } catch (error) {
    console.log(error)
    return NextResponse.json({message:"Somwthing went wrong"});
  }
}
