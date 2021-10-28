import {Ward} from './ward.interface';

export interface Districts{
  name:string;
  code:string;
  codename:string;
  division_type:string;
  short_codename:string;
  wards:Ward[];
}
