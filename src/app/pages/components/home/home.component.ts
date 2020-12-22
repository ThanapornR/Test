import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: any = FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      ID: ['', Validators.required], //เลขบัตรประชาชน
      tel: ['', Validators.pattern(/^[0-9]/)], //เบอร์โทรศัพท์มือถือ
      KID: ['', Validators.required], //KUBOTA ID
      name: [''], //ชื่อลูกค้า
      tel2: [''], //เบอร์โทร
      hour2: null, //ชั่วโมงการใช้งาน{card2}
      state: [''], //ประเภทงาน
      hour3: [''], //ชั่วดมงการใช้งาน{card3}
      detail: [''], //อาการเสีย
      tradeName: ['คูโบต้าชัยศิริขอนแก่น'], //ร้านค้าบริการ
      date: null, //วันที่จองบริการ
      time: null, //เวลาจองบริการ 
      IDName: [''], //ID/ชื่อช่างบริการ
      wage: null, //ค่าแรงพนักงาน 
      otherCost: null, //ค่าอะไหล่สิ้นเปลือง
      costCar: null, //ค่ารถ
      IDTool: [''], //รหัสอะไหล่
      cost: null, //ราคา{card4}
      promotion: [''], //โปรโมชั่นส่วนลด
    });
  }

  submit() {
    this.form.get('ID').markAsTouched();
    this.form.get('KID').markAsTouched();

    if (this.form.invalid) return;
    console.log(this.form.value);

  }

}
