import {Role} from './role';

export interface User{
  id:number;
  fullName:string;
  email:string;
  address:string;
  status:boolean;
  password:string;
  numberPhone:string;
  roles:Role[];
  imageAvatarOfUser:string;
}
