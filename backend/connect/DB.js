const mongoose=require("mongoose")

const DB=async (req,res)=>{
try {
    await mongoose.connect("mongodb+srv://Abbos:2CClDwqeLaDxrgzP@cluster0.mhv06.mongodb.net/Payment?retryWrites=true&w=majority ")
    console.log("mongo ulandiiiiii");
} catch (error) {
    console.log("mongodb Ulanmadi ");
    
}

}
module.exports=DB