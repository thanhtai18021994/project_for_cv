import {Component, OnDestroy, OnInit} from '@angular/core';
import {ComputerService} from '../../../../service/computer.service';
import {Computer} from '../../../../model/computer.interface';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Manufacture} from '../../../../model/manufacture.interface';
import {TypeComputer} from '../../../../model/typeComputer.interface';
import {ExtraService} from '../../../../service/extra.service';

@Component({
  selector: 'app-list-computer',
  templateUrl: './list-computer.component.html',
  styleUrls: ['./list-computer.component.css']
})
export class ListComputerComponent implements OnInit, OnDestroy {
  computerList: Computer[];
  p: any;
  query: Subscription;
  page: any;
  querySub: Subscription;
  controlFilter = [true, false, false];
  manufactures: Manufacture[];
  typeComputers: TypeComputer[];
  manufactureSearch: string;
  nameSearch: string;
  typeComputerSearch: string;
  keySearch: string;

  constructor(private computerService: ComputerService,
              private extraService: ExtraService,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.extraService.getManufacture().subscribe(data => {
      this.manufactures = data;
    });
    this.extraService.getTypeComputer().subscribe(data => {
      this.typeComputers = data;
    });
    this.getProd();
  }

  getProd(page: number = 0, size: number = 5) {
    console.log(this.router.snapshot.url);
    const request = {page: page, size: size};
    this.computerService.getAllByPaginate(request).subscribe(data => {
      this.computerList = data['content'];
      this.page = data;
    });
  }

  getProdByName(name: string, request) {
    this.computerService.findByName(name, request).subscribe(data => {
      this.computerList = data['content'];
      this.page = data;
    });
  }

  getProdByManufacture(id: number, request) {
    this.computerService.findByTypeComputer(id, request).subscribe(data => {
      this.computerList = data['content'];
      this.page = data;
    });
  }

  getProdByTypeComputer(id: number, request) {
    this.computerService.findByTypeComputer(id, request).subscribe(data => {
      this.computerList = data['content'];
      this.page = data;
    });
  }

  deleteItem(computerId: number) {
    console.log(computerId);
    this.computerService.delete(computerId).subscribe(() => {
      this.ngOnInit();
    });
  }

  ngOnDestroy(): void {
  }

  filterBy(value: string) {
    switch (value) {
      case '1':
        for (let i = 0; i < this.controlFilter.length; i++) {
          if (i == 0) {
            this.controlFilter[i] = true;
          } else {
            this.controlFilter[i] = false;
          }
        }
        break;
      case '2':
        for (let i = 0; i < this.controlFilter.length; i++) {
          if (i == 1) {
            this.controlFilter[i] = true;
          } else {
            this.controlFilter[i] = false;
          }
        }
        break;
      case '3':
        for (let i = 0; i < this.controlFilter.length; i++) {
          if (i == 2) {
            this.controlFilter[i] = true;
          } else {
            this.controlFilter[i] = false;
          }
        }
        break;
    }
  }

  filter(value: any) {
    console.log(this.manufactureSearch);
    this.keySearch = value;
    console.log(this.keySearch);
    if (this.controlFilter[0]) {
      this.computerService.findByName(this.nameSearch, {page: 0, size: 5}).subscribe(data => {
        this.computerList = data['content'];
        this.page = data;
      });
    } else if (this.controlFilter[1]) {
      this.computerService.findByManufacture(+this.manufactureSearch, {page: 0, size: 5}).subscribe(data => {
        this.computerList = data['content'];
        this.page = data;
      });
    } else if (this.controlFilter[2]) {
      this.computerService.findByTypeComputer(+this.typeComputerSearch, {page: 0, size: 5}).subscribe(data => {
        this.computerList = data['content'];
        this.page = data;
      });
    }
  }

  goToPage(pageElement: number) {
    const request = {page: pageElement, size: 5};
    if (this.nameSearch) {
      this.getProdByName(this.nameSearch, request);
    } else if (this.manufactureSearch) {
      this.getProdByManufacture(+this.manufactureSearch, request);
    } else if (this.typeComputerSearch) {
      this.getProdByTypeComputer(+this.typeComputerSearch, request);
    } else {
      this.computerService.getAllByPaginate(request).subscribe(data => {
        this.computerList = data['content'];
        this.page = data;
      });
    }
  }
}
