import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Manufacture} from '../../../../model/manufacture.interface';
import {Observable} from 'rxjs';
import {ExtraService} from '../../../../service/extra.service';
import {MonitorService} from '../../../../service/monitor.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {Monitor} from '../../../../model/monitor.interface';

@Component({
  selector: 'app-update-monitor',
  templateUrl: './update-monitor.component.html',
  styleUrls: ['./update-monitor.component.css']
})
export class UpdateMonitorComponent implements OnInit {

  monitorForm: FormGroup;
  manufacture:Manufacture[];
  url:string;
  subImage:string[];
  downloadURL: Observable<string>;
  constructor(
    private fb: FormBuilder,
    private extraService:ExtraService,
    private monitorService:MonitorService,
    private storage: AngularFireStorage
  ) {
  }

  validation = {
    monitorName: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'minlength', message: 'Chiều dài phải lớn hơn 40 '}
    ],
    monitorImportPrice: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'min', message: 'Chiều dài phải lớn hơn 40 '}],
    monitorSalePrice: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'minlength', message: 'Chiều dài phải lớn hơn 40 '}
    ],
    monitorDiscount: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'minlength', message: 'Chiều dài phải lớn hơn 40 '}
    ],
    manufacture: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'minlength', message: 'Chiều dài phải lớn hơn 40 '}
    ],
    screenSize: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'minlength', message: 'Chiều dài phải lớn hơn 40 '}
    ],
    resolution: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'minlength', message: 'Chiều dài phải lớn hơn 40 '}
    ],
    screenRatio: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'minlength', message: 'Chiều dài phải lớn hơn 40 '}
    ],
    view: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'minlength', message: 'Chiều dài phải lớn hơn 40 '}
    ],
    pixelDensity: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'minlength', message: 'Chiều dài phải lớn hơn 40 '}
    ],
    backgroundPanels: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'minlength', message: 'Chiều dài phải lớn hơn 40 '}
    ],
    pixelSize: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'minlength', message: 'Chiều dài phải lớn hơn 40 '}
    ],
    responsiveness: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'minlength', message: 'Chiều dài phải lớn hơn 40 '}
    ],
    refreshGFrequency: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'minlength', message: 'Chiều dài phải lớn hơn 40 '}
    ],
    enable: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'minlength', message: 'Chiều dài phải lớn hơn 40 '}
    ],
    mainImage: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'minlength', message: 'Chiều dài phải lớn hơn 40 '}
    ],
    imageDetailOfMonitor: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'minlength', message: 'Chiều dài phải lớn hơn 40 '}
    ]
  };

  ngOnInit(): void {
    this.extraService.getManufacture().subscribe(data=>{
      this.manufacture=data;
    })
    this.monitorForm = this.fb.group({
      monitorName: ['',[Validators.required,Validators.minLength(40)]],
      monitorImportPrice: ['',[Validators.required,Validators.min(0)]],
      monitorSalePrice: ['',[Validators.required,Validators.min(0)]],
      monitorDiscount: ['',[Validators.required,Validators.min(0)]],
      manufacture: ['',[Validators.required]],
      screenSize: ['',[Validators.required,Validators.min]],
      resolution: ['',[Validators.required]],
      screenRatio: ['',[Validators.required]],
      view: ['',[Validators.required]],
      pixelDensity: ['',Validators.required],
      backgroundPanels: ['',Validators.required],
      pixelSize: ['',Validators.required],
      responsiveness: ['',Validators.required],
      refreshGFrequency: ['',Validators.required],
      enable: ['',Validators.required],
      mainImage: ['',Validators.required],
      imageDetailOfMonitor: ['']
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
    const monitor: Monitor = this.monitorForm.value;
    this.monitorForm.controls['mainImage'].setValue(this.url);
    this.monitorForm.controls['subImage'].setValue(this.subImage);
    monitor.imageDetailOfMonitor=this.monitorForm.controls['subImage'].value;
    if (this.monitorForm.invalid) {
      Object.keys(this.monitorForm.controls).forEach(field => {
        const control = this.monitorForm.get(field);
        control.markAsTouched({onlySelf: true});
      });
    } else {
      this.monitorService.create(monitor).subscribe(result => {
        this.monitorForm.reset();
      });
    }
  }

}
