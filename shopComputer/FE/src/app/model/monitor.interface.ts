import {Manufacture} from './manufacture.interface';
import {Provider} from './provider.interface';

export interface Monitor {
  monitorId:number;
  monitorCode:string;
  monitorName:string;
  monitorImportPrice:number;
  monitorSalePrice:number;
  monitorDiscount:number;
  manufacture:Manufacture;
  screenSize:string;
  resolution:string;
  screenRatio:string;
  view:string;
  backgroundPanels:string;
  enable:string;
  mainImage:string;
  imageDetailOfMonitor:string[];
  provider:Provider;
}
