
import { IUser } from "@/types/User";
import { Schema,model,models,Document } from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
})



const User = models.User || model<IUser,Document>('User',userSchema)
export default User;