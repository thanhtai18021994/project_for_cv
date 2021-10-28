import {Provider} from './provider.interface';

export interface Mouse {
  mouseId:string;
  mouseCode:string;
  mouseName:string;
  mouseImportPrice:number;
  mouseSalePrice:number;
  discount:number;
  enable:boolean;
  mainImage:string;
  imageDetailMouse:string[];
  resolution:string;
  SupportedOperatingSystems:string;
  FrequencyResponse:string;
  provider:Provider;
}
