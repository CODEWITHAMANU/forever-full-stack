import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected',() => {
        console.log("DB Connected");
    })

    await mongoose.connect(`${process.env.NEXT_PUBLIC_MONGODB_URI}/e-commerce`)

}

export default connectDB;