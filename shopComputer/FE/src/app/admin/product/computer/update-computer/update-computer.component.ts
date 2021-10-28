import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TypeComputer} from '../../../../model/typeComputer.interface';
import {Manufacture} from '../../../../model/manufacture.interface';
import {Pcs} from '../../../../model/pcs.interface';
import {Observable, Subscription} from 'rxjs';
import {ComputerService} from '../../../../service/computer.service';
import {ExtraService} from '../../../../service/extra.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {Computer} from '../../../../model/computer.interface';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-computer',
  templateUrl: './update-computer.component.html',
  styleUrls: ['./update-computer.component.css']
})
export class UpdateComputerComponent implements OnInit {
  computerForm: FormGroup;
  typeComputers: TypeComputer[];
  manufactures:Manufacture[];
  pcs:Pcs[];
  selectedFile: File = null;
  downloadURL: Observable<string>;
  url:string;
  subImage:any[]=[];
  querySub:Subscription;
  idComputer:number;
  constructor(private fb: FormBuilder,
              private computerService: ComputerService,
              private extraService: ExtraService,
              private storage: AngularFireStorage,
              private router:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.extraService.getManufacture().subscribe(data=>{
      this.manufactures=data;
    })
    this.extraService.getTypeComputer().subscribe(data=>{
      this.typeComputers=data;
    })
    this.extraService.getPcs().subscribe(data=>{
      this.pcs=data;
    })
    this.querySub=this.router.params.subscribe((params)=>{
      const id=+params['id'];
      this.idComputer=id;
      console.log(id);
      this.computerService.findById(+id).subscribe(data=>{
        this.computerForm = this.fb.group({
          computerName: [data.computerName, [Validators.required, Validators.minLength(40)]],
          computerImportPrice: [data.computerImportPrice, [Validators.required, Validators.min(0)]],
          computerSalePrice: [data.computerSalePrice, [Validators.required]],
          computerDiscount: [data.computerDiscount, Validators.required],
          mainImage: [data.mainImage, Validators.required],
          subImage: [data.imageDetailOfComputers, Validators.required],
          cpu: [data.cpu, [Validators.required]],
          ram: [data.ram, [Validators.required]],
          hardDrive: [data.hardDrive, [Validators.required]],
          graphicCard: [data.graphicCard, Validators.required],
          screen: [data.screen, Validators.required],
          operatingSystem: [data.operatingSystem, [Validators.required]],
          dimensionsWeight:[data.dimensionsWeight,Validators.required],
          connector:[data.connector,Validators.required],
          design:[data.design,Validators.required],
          releaseTime:[data.releaseTime,Validators.required],
          pcs: [data.pcs,Validators.required],
          typeComputer: [data.typeComputer,Validators.required],
          manufacture: [data.manufacture,Validators.required]
        });
        this.url=data.mainImage;
        this.subImage=data.imageDetailOfComputers.map(x=>x['url']);
      })
    })
  }


  validation_msg = {
    computerName: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'minlength', message: 'Chiều dài phải lớn hơn 40 '}
    ], computerImportPrice: [
      {type: 'required', message: 'Vui lòng nhập trường này'},
      {type: 'min', message: 'Vui lòng nhập số dương'}
    ], computerSalePrice: [
      {type: 'required', message: 'Vui lòng nhập trường này'},
      {type: 'min', message: 'Vui lòng nhập số dương'}
    ], computerDiscount: [
      {type: 'required', message: 'Vui lòng nhập trường này'},
      {type: 'min', message: 'Vui lòng nhập số dương'}
    ], mainImage: [
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ], cpu: [
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ], ram: [
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ], hardDrive: [
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ], graphicCard: [
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ], screen: [
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ], dimensionsWeight:[
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ], connector:[
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ], design:[
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ],releaseTime:[
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ], operatingSystem: [
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ], pcs: [
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ], typeComputer: [
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ],manufacture:[
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ]
  };

  compareTypeComputer(c1:TypeComputer,c2:TypeComputer): boolean{
    return c1 && c2 ? c1.typeComputerId === c2.typeComputerId : c1 === c2;
  };

  compareManufacture(c1: Manufacture, c2: Manufacture): boolean {
    return c1 && c2 ? c1.manufactureId === c2.manufactureId : c1 === c2;
  }

  toCreate() {
    this.computerForm = this.fb.group({
      computerName: ['', [Validators.required, Validators.minLength(40)]],
      computerImportPrice: ['', [Validators.required, Validators.min(0)]],
      computerSalePrice: ['', [Validators.required]],
      computerDiscount: ['', Validators.required],
      mainImage: ['', Validators.required],
      cpu: ['', [Validators.required]],
      ram: ['', [Validators.required]],
      hardDrive: ['', [Validators.required]],
      graphicCard: ['', Validators.required],
      screen: ['', Validators.required],
      operatingSystem: ['', [Validators.required]],
      dimensionsWeight:['',Validators.required],
      connector:['',Validators.required],
      design:['',Validators.required],
      releaseTime:['',Validators.required],
      pcs: ['',Validators.required],
      typeComputer: ['',Validators.required],
      manufacture: ['',Validators.required]
    });

  }

  onFileSelected(event) {
    let n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.url=url;
            }
          });
        })
      )
      .subscribe(url => {
      });
  }

  onMultipleFileSelected(event){
    let n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.subImage[this.subImage.length]=url;
            }
          });
        })
      )
      .subscribe(url => {
      });
  }


  onSubmit() {
    const computer: Computer = this.computerForm.value;
    this.computerForm.controls['mainImage'].setValue(this.url);
    this.computerForm.controls['subImage'].setValue(this.subImage);
    computer.imageDetailOfComputers=this.computerForm.controls['subImage'].value;
    computer.mainImage=this.computerForm.controls['mainImage'].value;
    console.log(computer);
    if (this.computerForm.invalid) {
      Object.keys(this.computerForm.controls).forEach(field => {
        const control = this.computerForm.get(field);
        control.markAsTouched({onlySelf: true});
      });
    } else {
      this.computerService.update(this.idComputer,computer).subscribe(result => {
        this.computerForm.reset();
      });
    }
  }


  // onCheckChange(event) {
  //   const formArray: FormArray = this.computerForm.get('featureComputers') as FormArray;
  //   if (event.target.checked) {
  //     formArray.push(new FormControl(event.target.value));
  //   } else {
  //     let i: number = 0;
  //     formArray.controls.forEach((ctrl: FormControl) => {
  //       if (ctrl.value == event.target.value) {
  //         formArray.removeAt(i);
  //         return;
  //       }
  //       i++;
  //     });
  //   }
  //   for (let el in this.computerForm.controls) {
  //     if (this.computerForm.controls[el].errors) {
  //       console.log(el);
  //     }
  //   }
  // }
}
