import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Item} from '../model/item.interface';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';
import {CookieService} from 'ngx-cookie-service';
import {User} from '../model/user.interface';
import {ProductInOrder} from '../model/productInOrder.interface';
import {Cart} from '../model/cart.class';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartUrl='http://localhost:8080/cart'
  localMap={};
  private itemSubject:BehaviorSubject<Item[]>;
  private totalSubject:BehaviorSubject<number>;
  private items:Observable<Item[]>;
  private total:Observable<number>;
  private currentUser:User;

  constructor(private http:HttpClient,
              private userService:UserService,
              private cookieService:CookieService) {
    this.itemSubject=new BehaviorSubject<Item[]>(null);
    this.items=this.itemSubject.asObservable();
    this.totalSubject=new BehaviorSubject<number>(null);
    this.total=this.totalSubject.asObservable();
    this.userService.getPrincipal().subscribe(user=>{
      this.currentUser=user;
    })
  }

  private getLocalCart(): ProductInOrder[] {
    if (this.cookieService.check('cart')) {
      this.localMap = JSON.parse(this.cookieService.get('cart'));
      return Object.values(this.localMap);
    } else {
      this.localMap = {};
      return [];
    }
  }

  getCart(): Observable<ProductInOrder[]> {
    const localCart = this.getLocalCart();
    console.log("localcart");
    console.log(localCart);
    if (this.currentUser) {
      console.log("here");
      if (localCart.length > 0) {
        return this.http.post<Cart>(this.cartUrl,localCart).pipe(tap(_=>{
          this.clearLocalCart();
        }),tap(cart=>{
          console.log("cart");
          console.log(cart);
        }),map(cart=>{
          return cart.products;
        }))
      } else {
        return this.http.get<Cart>(this.cartUrl).pipe(
          tap(cart=>{
            console.log(cart);
          }),
          map(cart=>cart.products),
          catchError(_=>of([]))
        );
      }
    } else {
      return of(localCart);
    }
  }

  addItem(productInOrder:ProductInOrder):Observable<boolean>{
    if (!this.currentUser) {
      if (this.cookieService.check('cart')) {
        this.localMap = JSON.parse(this.cookieService.get('cart'));
      }
      if (!this.localMap[productInOrder.productId]) {
        this.localMap[productInOrder.productId] = productInOrder;
      } else {
        this.localMap[productInOrder.productId].count += productInOrder.count;
      }
      this.cookieService.set('cart', JSON.stringify(this.localMap));
      return of(true);
    } else {
      const url = `${this.cartUrl}/add`;
      console.log(url);
      return this.http.post<boolean>(url, {
        'quantity': productInOrder.count,
        'productId': productInOrder.productId
      });
    }
  }

  update(productInOrder): Observable<ProductInOrder> {
    if (this.currentUser) {
      const url = `${this.cartUrl}/${productInOrder.productId}`;
      return this.http.put<ProductInOrder>(url, productInOrder.count);
    }
  }

  remove(productInOrder) {
    if (!this.currentUser) {
      delete this.localMap[productInOrder.productId];
      return of(null);
    } else {
      const url = `${this.cartUrl}/${productInOrder.productId}`;
      return this.http.delete(url).pipe( );
    }
  }

  checkout(): Observable<any> {
    const url = `${this.cartUrl}/checkout`;
    return this.http.post(url, null).pipe();
  }

  clearLocalCart() {
    console.log('clear local cart');
    this.cookieService.delete('cart');
    this.localMap = {};
  }
}
