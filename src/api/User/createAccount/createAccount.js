import {prisma} from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createAccount: async(_, args) => {
            const { username, email, firtstName="", lastName="", bio=""} = args;
            const user = await prisma.createUser({
                username,
                email,
                firtstName,
                lastName,
                bio
            });
            return user;
        }
    }
};