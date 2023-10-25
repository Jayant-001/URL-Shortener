import mongoose from "mongoose";

export default async function connectToDB() {
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("Mongo DB connected");
    } catch (error) {
        console.log(error);
    }
}
