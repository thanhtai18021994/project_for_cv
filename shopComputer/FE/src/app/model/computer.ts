import {Category} from './category';
import {TypeComputer} from './typeComputer';
import {ComputerDetail} from './computerDetail';
import {FeatureComputer} from './featureComputer';
import {FeatureProductProduct} from './featureProductProduct';
export interface Computer {
  productId: number;
  nameProduct:string;
  importPrice:number;
  listedPrice:number;
  newPriceProduct:number;
  discount:number;
  warehouse:number;
  sold:number;
  imageProduct:string;
  category:Category;
  typeComputer:TypeComputer;
  cpu:string;
  ram:string;
  hardDrive:string;
  graphicCard:string;
  screen:string;
  operatingSystem:string;
  featureProductProducts:FeatureProductProduct[];
  featureComputers:FeatureComputer[];
}
