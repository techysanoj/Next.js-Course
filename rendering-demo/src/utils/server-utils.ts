import "server-only"; // now this will be only used when calling in the server-code and gives error in the client side code

export const serverSideFunction = () => {
    console.log(
        `use multiple libraries,
        use environment variables,
        interact with a database,
        process confidential information
        `
    );
    return "server result";
};