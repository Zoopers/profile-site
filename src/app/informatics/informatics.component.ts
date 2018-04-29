import { Component, OnInit } from '@angular/core';
import { FIRSTYEARMODULES } from '../first-year';
import { SECONDYEARMODULES } from '../second-year';
import { THIRDYEARMODULES } from '../third-year';
import {TableModule} from 'primeng/table';


@Component({
  selector: 'app-informatics',
  templateUrl: './informatics.component.html',
  styleUrls: ['./informatics.component.css']
})
export class InformaticsComponent implements OnInit {

  firstyearmodules = FIRSTYEARMODULES;
  secondyearmodules = SECONDYEARMODULES;
  thirdyearmodules = THIRDYEARMODULES;

  constructor() { }

  ngOnInit() {
  }

}
