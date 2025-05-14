import { jwtDecode } from "jwt-decode";
import  {JwtPayload}  from "jsonwebtoken";

interface CustomJwtPayload extends JwtPayload {
  email?: string;
  name?: string;
  role?: string;
  id?: string;
  // add more fields as needed
}


// export const GetUserInfo = (): CustomJwtPayload | null => {

//   const token = localStorage.getItem('token'); 

//   if(token){
//     const decoded = jwtDecode(token);
//     // console.log( 'decoded user and user info', decoded);
//     return decoded
//   }
// }



export const GetUserInfo = (): CustomJwtPayload | null => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
      const decoded = jwtDecode<CustomJwtPayload>(token);
      return decoded;
    } catch (error) {
      console.error("Invalid token", error);
      return null;
    }
  }
  return null;
};
