import nextAuth from "next-auth";
import { authOption} from './option'

const handler = nextAuth(authOption)


export { handler as GET , handler as POST }