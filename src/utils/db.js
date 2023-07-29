import mongoose from "mongoose";

const connect = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
    } catch (error) {
        throw new Error("connection Failed!!");
    }
};

export default connect;
