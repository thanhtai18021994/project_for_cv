import {Manufacture} from './manufacture.interface';

export interface Monitor {
  monitorId:number;
  monitorName:string;
  monitorImportPrice:number;
  monitorSalePrice:number;
  monitorDiscount:number;
  manufacture:Manufacture;
  screenSize:string;
  resolution:string;
  screenRatio:string;
  view:string;
  pixelDensity:string;
  backgroundPanels:string;
  pixelSize:string;
  responsiveness:string;
  refreshGFrequency:string;
  enable:string;
  mainImage:string;
  imageDetailOfMonitor:string[];
}
