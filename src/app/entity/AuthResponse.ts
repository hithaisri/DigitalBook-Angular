import LoggedInUser from "./LoggedInUser";

export default class AuthResponse{
    message:string="";
    role:number=0;
    statusCode:number=0;
    user:LoggedInUser=new LoggedInUser();
}