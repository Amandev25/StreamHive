import express from 'express';
import cors from 'cors';

const app = express() ;

app.use(
    cors({
        origin : process.env.CORS_ORIGIN ,
        credentials : true
    })
)
// Middleware to parse JSON and URL-encoded data ,  and serve static files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

export default app ;