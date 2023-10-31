import { NextRequest, NextResponse } from "next/server";
import { validateJwtAndFetchUserId } from "@/lib/utils";

interface CustomRequest extends NextRequest {
  context: {
    userID: string | undefined;
  };
}

export const config = {
  matcher: ["/profile", "/hello", '/login'],
};

export default async function middleware(req: CustomRequest) {
  console.log("Middleware started 3");

  try {
    // Use the validateJwtAndFetchUserId function to check the JWT token
  const userID = await validateJwtAndFetchUserId();
  console.log("UserID from JWT:", userID);
  req.context.userID = userID;
  
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }


  console.log("Middleware completed");
  // Continue processing the request
  return NextResponse.next();
}
