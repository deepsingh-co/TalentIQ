import express from "express";
import path from "path";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import { serve } from "inngest/express";

import { ENV } from "./lib/env.js";
import {inngest , functions} from "./lib/inngest.js";

const app = express();

const __dirname = path.resolve();

//middleware
app.use(express.json());
//credentials: true allows the server to accept requests from the client with credentials (like cookies, authorization headers, or TLS client certificates). This is important for scenarios where the client and server are on different domains and need to share authentication information.
app.use(cors({origin:ENV.CLIENT_URL, credentials:true }));


app.use("/api/inngest" , serve ({client: inngest , functions: [someFunction]}) );


app.get("/health" , (req , res) =>{2
    res.status(200).json({message: "API is up and running"});
});

app.get("/books" , (req , res) =>{2
    res.status(200).json({message: "This is a book  endpoint"});
});



// make our app ready for deployment
if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname , "../frontend/dist")));


    app.get("/{*any}" , (req , res) =>{
        res.sendFile(path.join(__dirname , "../frontend" ,"dist" , "index.html"));
    });
}



const startServer = async () => {
    try {
    await connectDB();
    app.listen(ENV.PORT , ()=> console.log("Server is running on port:" , ENV.PORT));
    }catch (error) {
        console.error("Error while starting server" , error);
    };
};

startServer();