export {} // makes a file module

export type Roles = "admin" | "moderator"

declare global {
    interface CustomJwtSessionClaims {
        metadata: {
            role?: Roles;
        };
    }
} // this will provide autocompletion