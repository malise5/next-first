import mongoose from "mongoose";
import handleError from "handleError";

const connect = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
    } catch (error) {
        throw new Error("connection Failed!!");
    }
};

export default connect;
