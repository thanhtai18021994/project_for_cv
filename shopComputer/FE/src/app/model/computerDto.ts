import {Category} from './category';
import {TypeComputer} from './typeComputer';
import {FeatureProductProduct} from './featureProductProduct';
import {FeatureComputer} from './featureComputer';

export interface ComputerDto{
  productId: number;
  nameProduct:string;
  importPrice:number;
  listedPrice:number;
  newPriceProduct:number;
  discount:number;
  warehouse:number;
  sold:number;
  imageProduct:string;
  typeComputerId:number;
  cpu:string;
  ram:string;
  hardDrive:string;
  graphicCard:string;
  screen:string;
  operatingSystem:string;
  categoryId:number;
  featureComputers:number[];
}
