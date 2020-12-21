import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  image = "../../assets/img/tree.png"

  // form คือชื่อตัวแปร
  form: FormGroup;

  constructor(
    // private คือตัวแปรนี้ใช้ได้แค่ใน home เท่านั้น
    // fb คือชื่อตัวแปร
    // formBuilder เหมือน string มี 3 แบบ 1.control 2.group 3.array
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // เรียกใช้ฟังก์ชั่น
    this.createForm();
  }
  // function
  createForm() {
    this.form = this.fb.group({
      // "" = string, null = number  
      KUBOTAID: "",
      name: "",
      tel: "",
      hour: null,
      store: "",
      broken: "",
      salary: null,
      supplies: null,
      car: null,
      IDSupplies: "",
      Cost: null,
      Promotion: "",
    })
  }
  submit() {
    console.log(this.form.value);
  }
}
