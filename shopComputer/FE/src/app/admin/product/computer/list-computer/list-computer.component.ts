import {Component, OnDestroy, OnInit} from '@angular/core';
import {ComputerService} from '../../../../service/computer.service';
import {Computer} from '../../../../model/computer.interface';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-computer',
  templateUrl: './list-computer.component.html',
  styleUrls: ['./list-computer.component.css']
})
export class ListComputerComponent implements OnInit,OnDestroy {
  computerList:Computer[];
  p: any;
  query:Subscription;
  page: any;
  querySub:Subscription;
  paramsSub:Subscription;
  constructor(private computerService: ComputerService,
              private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub=this.router.queryParams.subscribe(()=>{
      const page=this.router.snapshot.queryParamMap.get('page');
      const size=this.router.snapshot.queryParamMap.get('size');
      this.getProd(+page,+size);
    });
    this.paramsSub=this.router.queryParams.subscribe(()=>{
      });
  }

  getAll(){
    this.computerService.getAll().subscribe(computers=>{
      console.log(computers);
      this.computerList=computers;
    })
  }

  getProd(page:number=1,size:number=1){
     this.computerService.getAllByPaginate(page,size).subscribe(data=>{
       this.computerList=data['content'];
       console.log("data"+data['content']);
       this.page=data['totalPages'];
       console.log(data['totalPages']);
     });
  }

  deleteItem(computerId: number) {
    this.computerService.delete(computerId).subscribe(()=>{
      this.ngOnInit();
    });
  }

  ngOnDestroy(): void {
    this.querySub.unsubscribe();
  }
}
