import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ComputerService} from '../../../service/computer.service';
import {FeatureComputer} from '../../../model/featureComputer';
import {FeatureComputerService} from '../../../service/feature-computer.service';
import {FeatureProductProductService} from '../../../service/feature-product-product.service';
import {FeatureProductProduct} from '../../../model/featureProductProduct';
import {ComputerDto} from '../../../model/computerDto';
import {CategoryService} from '../../../service/category.service';
import {Category} from '../../../model/category';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-computer',
  templateUrl: './create-computer.component.html',
  styleUrls: ['./create-computer.component.css']
})
export class CreateComputerComponent implements OnInit {
  computerForm: FormGroup;
  featureComputers: FeatureComputer[];
  categories: Category[];
  computerError: ComputerDto;

  constructor(private fb: FormBuilder,
              private computerService: ComputerService,
              private featureComputerService: FeatureComputerService,
              private featureProductProduct: FeatureProductProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getFeatureComputer();
    this.toCreate();
    this.getCategory();
  }

  base64textString = [];

  onUploadChange(evt: any) {
    const file = evt.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
  }

  validation_msg = {
    nameProduct: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'minlength', message: 'Chiều dài phải lớn hơn 40 '}
    ],
    importPrice: [
      {type: 'required', message: 'Vui lòng nhập trường này'},
      {type: 'min', message: 'Vui lòng nhập số dương'}
    ],
    listedPrice: [
      {type: 'required', message: 'Vui lòng nhập trường này'},
      {type: 'min', message: 'Vui lòng nhập số dương'}
    ],
    discount: [
      {type: 'required', message: 'Vui lòng nhập trường này'},
      {type: 'min', message: 'Vui lòng nhập số dương'}
    ],
    warehouse: [
      {type: 'required', message: 'Vui lòng nhập trường này'},
      {type: 'min', message: 'Vui lòng nhập số dương'}
    ],
    imageProduct: [
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ],
    cpu: [
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ],
    ram: [
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ],
    hardDrive: [
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ],
    graphicCard: [
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ],
    screen: [
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ],
    operatingSystem: [
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ],
    typeComputerId: [
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ],
    featureComputers: [
      {type: 'required', message: 'Vui lòng nhập trường này'}
    ]

  };

  toCreate() {
    this.computerForm = this.fb.group({
      nameProduct: ['', [Validators.required, Validators.minLength(40)]],
      importPrice: ['', [Validators.required, Validators.min(0)]],
      listedPrice: ['', [Validators.required]],
      discount: ['', Validators.required],
      warehouse: ['', Validators.required],
      imageProduct: ['', Validators.required],
      cpu: ['', [Validators.required]],
      ram: ['', [Validators.required]],
      hardDrive: ['', [Validators.required]],
      graphicCard: ['', Validators.required],
      screen: ['', Validators.required],
      operatingSystem: ['', [Validators.required]],
      categoryId: [''],
      typeComputerId: [''],
      featureComputers: this.fb.array([])
    });

  }

  onSubmit() {
    const computer: ComputerDto = this.computerForm.value;
    console.log(computer);
    if (this.computerForm.invalid) {
      Object.keys(this.computerForm.controls).forEach(field => {
        const control = this.computerForm.get(field);
        control.markAsTouched({onlySelf: true});
      });
    } else {
      this.computerService.createComputer(computer).subscribe(result => {
        // this.msgCreateSuccessful();
        this.computerForm.reset();
        this.base64textString = [];
      });
    }
  }

  // msgCreateSuccessful() {
  //   Swal.fire({
  //     title: 'Tạo mới thành công',
  //     showClass: {
  //       popup: 'animate__animated animate__fadeInDown'
  //     },
  //     hideClass: {
  //       popup: 'animate__animated animate__fadeOutUp'
  //     },
  //     icon: 'success'
  //   });
  // }

  getFeatureComputer() {
    this.featureComputerService.getAll().subscribe(featureComputers => {
      this.featureComputers = featureComputers;
    });
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

  getCategory() {
    this.categoryService.getCategory().subscribe(categories => {
      this.categories = categories;
    });
  }
}
