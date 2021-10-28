import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ComputerService} from '../../../service/computer.service';
import {Computer} from '../../../model/computer.interface';
import {MonitorService} from '../../../service/monitor.service';
import {CartService} from '../../../service/cart.service';
import {ProductInOrder} from '../../../model/productInOrder.interface';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  selected = 0;
  hovered = 0;
  readonly = false;
  currentComputer:Computer;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private computerService:ComputerService,
    private monitorService:MonitorService,
    private cartService:CartService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      const id=+value.get('id');
      this.computerService.findById(id).subscribe(data=>{
        this.currentComputer=data;
      })
    })
  }

  addToCart(){
    let productInOrder =new ProductInOrder();
    productInOrder.productId=this.currentComputer.computerId
    productInOrder.productName=this.currentComputer.computerName;
    productInOrder.productPrice=this.currentComputer.computerSalePrice;
    productInOrder.productIcon=this.currentComputer.mainImage;
    productInOrder.count=1;
    console.log(productInOrder);
    this.cartService.addItem(productInOrder).subscribe(res=>{
      if(!res){
        console.log('Add Cart failed:' + res);
        throw new Error();
      }
      this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
        this.router.navigate(['client',{outlets:{'client':['view',this.currentComputer.computerId]}}]);
      })
    },_=>{
      console.log(_);
      console.log('Add Cart Failed');
    })
  }

}
