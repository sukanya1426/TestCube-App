import mongoose from 'mongoose';

let initialized = false;

export const connect = async () => {
    mongoose.set('strictQuery',true);

    if(initialized){
        console.log('MongoDB is already connected');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"testcube-app",
            useNewUrlParser: true,
            userUnifiedTopology : true,
        });
        console.log('MongoDB connected');
        initialized=true;

    }catch(error){
        console.log('MongoDB connection error:', error);
    }
}