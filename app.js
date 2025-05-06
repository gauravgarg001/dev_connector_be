const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const routes = require("./routes/auth.routes.js");
const admin_router = require("./routes/admin.routes.js");

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/auth", routes);
app.use("/api/admin", admin_router)

async function startServer(){
    try{
        const connect = await connectDB();
        if(connect){
            app.listen(2001, ()=>{
                console.log(`app listen the ${2001} - PORT!!`);
            });
        }
    } catch(e){
        console.log(e);
    }
}

startServer();