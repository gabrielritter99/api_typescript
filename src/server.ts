import "reflect-metadata";
import  express, {NextFunction, Request, Response} from "express";
import AppError from "./errors/AppError";
import {createConnection} from 'typeorm';
import { routes } from "./routes";

createConnection();

const app = express();

app.use(express.json());

app.use((error: Error, request: Request, response: Response, next:NextFunction)=> {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        });
    }

    return response.status(500).json({
        status: 'error',
        message: 'internal server error'
    })
});

app.use(routes);

app.listen(3000, ()=> console.log("Server is running!!!"))