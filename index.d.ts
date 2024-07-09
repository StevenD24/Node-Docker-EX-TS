import * as express from "express-serve-static-core";

// manual type definition
declare global {
  namespace Express {
    interface Request {
      customField?: string;
    }
  }
}
