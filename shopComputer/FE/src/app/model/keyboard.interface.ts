import {Provider} from './provider.interface';

export interface Keyboard{
  keyboardId:number;
  keyboardCode:string;
  keyboardName:string;
  keyboardImportPrice:number;
  keyboardSalePrice:number;
  discount:number;
  enable:boolean;
  mainImage:string;
  imageDetailKeyboards:string[];
  provider:Provider;
}
