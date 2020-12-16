import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // import รูปเข้ามา
  image = '../../assets/icon/tree.png'
  constructor() { }

  ngOnInit(): void {
  }

}
