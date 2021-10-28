import {Manufacture} from './manufacture.interface';
import {TypeComputer} from './typeComputer.interface';
import {Pcs} from './pcs.interface';
import {Provider} from './provider.interface';

export interface Computer {
  computerId:number;
  computerCode:string;
  computerName:string;
  computerImportPrice:number;
  computerSalePrice:number;
  computerDiscount:number;
  manufacture:Manufacture;
  typeComputer:TypeComputer;
  pcs:Pcs;
  cpu:string;
  ram:string;
  hardDrive:string;
  screen:string;
  graphicCard:string;
  connector:string;
  operatingSystem:string;
  design:string;
  dimensionsWeight:string;
  releaseTime:string;
  enable:boolean;
  mainImage:string;
  imageDetailOfComputers:string[];
  provider:Provider;
}
