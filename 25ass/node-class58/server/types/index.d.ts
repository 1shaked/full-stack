export {};
export declare global {
    declare namespace Express {
        export interface Request {
            //   myCustomProperty?: string; // Replace this with your custom properties or methods
            isAuthenticated(): boolean;
            // If you are also using other methods or properties from Passport, you can include them as well.
            // For example:
            // user?: any;
            // logout(): void;
        }
    }
    declare module 'express-serve-static-core' {
        interface Request {
          myField?: string;
          isAuthenticated(): boolean;
        }
        interface Response {
          myField?: string
        }
      }
      declare module 'express' {
        interface Request {
            sAuthenticated(): boolean;
        }
    }
}
