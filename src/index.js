import dotenv from "dotenv" ;
import app  from "./app.js" ;
import connectDB from "./db/index.js";
dotenv.config(
    {
        path: "./src/.env"
    }
)
const PORT = process.env.PORT || 5000
console.clear();
connectDB()
.then(
    app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
}))
.catch((error) => {
    console.log("Error Connecting to Database:", error);
    
})