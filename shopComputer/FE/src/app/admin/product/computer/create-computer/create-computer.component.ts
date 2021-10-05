

import {ComputerService} from '../../../../service/computer.service';
import {TypeComputer} from '../../../../model/typeComputer.interface';
import {Manufacture} from '../../../../model/manufacture.interface';
import {Computer} from '../../../../model/computer.interface';
import {Pcs} from '../../../../model/pcs.interface';


import {Observable} from 'rxjs';
import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';
import {ExtraService} from '../../../../service/extra.service';

@Component({
  selector: 'app-create-computer',
  templateUrl: './create-computer.component.html',
  styleUrls: ['./create-computer.component.css']
})
export class CreateComputerComponent implements OnInit {
  computerForm: FormGroup;
  typeComputers: TypeComputer[];
  manufactures:Manufacture[];
  pcs:Pcs[];
  selectedFile: File = null;
  downloadURL: Observable<string>;
  url:string;
  subImage:string[]=[];
  constructor(private fb: FormBuilder,
              private computerService: ComputerService,
              private extraService: ExtraService,
              private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    this.toCreate();
    this.extraService.getManufacture().subscribe(data=>{
      this.manufactures=data;
    })
    this.extraService.getTypeComputer().subscribe(data=>{
      this.typeComputers=data;
    })
    this.extraService.getPcs().subscribe(data=>{
      this.pcs=data;
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

  toCreate() {
    this.computerForm = this.fb.group({
      computerName: ['', [Validators.required, Validators.minLength(40)]],
      computerImportPrice: ['', [Validators.required, Validators.min(0)]],
      computerSalePrice: ['', [Validators.required]],
      computerDiscount: ['', Validators.required],
      // mainImage: ['', Validators.required],
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
    computer.mainImage=this.url;
    computer.imageDetailOfComputers=this.subImage;
    console.log(computer);
    if (this.computerForm.invalid) {
      console.log("err");
      Object.keys(this.computerForm.controls).forEach(field => {
        const control = this.computerForm.get(field);
        control.markAsTouched({onlySelf: true});
      });
    } else {
      console.log("successful");
      this.computerService.create(computer).subscribe(result => {
        this.computerForm.reset();
      });
    }
  }


  onCheckChange(event) {
    const formArray: FormArray = this.computerForm.get('featureComputers') as FormArray;
    if (event.target.checked) {
      formArray.push(new FormControl(event.target.value));
    } else {
      let i: number = 0;
      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    for (let el in this.computerForm.controls) {
      if (this.computerForm.controls[el].errors) {
        console.log(el);
      }
    }
  }
}
