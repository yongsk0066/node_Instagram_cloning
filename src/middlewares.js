export const isAuthenticated = request => {
    console.log();
    if(!request.user){
        throw Error("You need to log in to perform this action");
    }
    return;
};