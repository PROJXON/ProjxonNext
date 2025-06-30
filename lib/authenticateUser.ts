import jwt from "jsonwebtoken";
import type { NextRequest } from "next/server";

export function authenticateUser(request: NextRequest) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) throw new Error("Unauthorized");
  const token = authHeader.split(" ")[1];

  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JSON web token secret is not defined");

  return jwt.verify(token, secret);
}