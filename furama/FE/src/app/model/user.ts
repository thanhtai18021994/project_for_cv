import {Role} from './role';

export interface User {
  id:number;
  fullName:string;
  email:string;
  status:boolean;
  password:string;
  roles:Role[];
  imageAvatarOfUser:string;
}
