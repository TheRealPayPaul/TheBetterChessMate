import UserList from "./UserList";
import UserObject from "./UserObject";

/** Represents a (key:string,UserObject) relational pair */
export interface userListFormat{
  [key:string]:UserObject
}

/** Represents a (key:string,string) relational pair */
export interface cookieFormat {
  [key:string]: string
}