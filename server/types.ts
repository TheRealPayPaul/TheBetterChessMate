import UserList from "./UserList";
import UserObject from "./UserObject";

/** Represents a (key:string,UserObject) relational pair */
export interface userListFormat{
  [key:string]:UserObject
}