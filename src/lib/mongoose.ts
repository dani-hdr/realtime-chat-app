
import mongoose,{ConnectOptions }  from 'mongoose';


 const connectDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log('MongoDb connected');
    }
    catch(error){
        console.log(error)
        process.exit(1);
    }
}

export default connectDb;
