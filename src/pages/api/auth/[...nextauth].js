import NextAuth from "next-auth"
import { authOption } from "./option"


export default NextAuth(authOption)