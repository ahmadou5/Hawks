import nextAuth from "next-auth";
import { authOption} from './options'

const handler = nextAuth(authOption)


export { handler as GET , handler as POST }