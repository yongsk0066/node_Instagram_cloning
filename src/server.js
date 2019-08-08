import path from "path";
import "./env";
import {prisma} from "../generated/prisma-client";
import { GraphQLServer} from "graphql-yoga";
import logger from "morgan";
import schema from "./schema"
import {sendSecretMail} from "./utils";
import passport from "passport";
import "./passport";
import {authenticateJwt} from "./passport";

const PORT = process.env.PORT || 4000;



const server = new GraphQLServer({
    schema,
    context: ({request}) => ({request})
});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);


server.start({port: PORT}, () => 
console.log(`Server running on http://localhost:${PORT}`));