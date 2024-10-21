import mongoose from "mongoose"


const connectDb=async ()=>{
    try {
        mongoose.connect(`${process.env.DATABASE_LINK}`)
        
        console.log("connect")

    } catch (error) {
        console.log("error hai ",error)
    }
}
export default connectDb;