import { Component, OnInit } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'Skills and Qualifications',
          items: [
              {label: 'BSc Informatics', routerLink: ['/bscinformatics']},
              {label: 'MCDST', routerLink: ['/mcdst']},
              {label: 'Professional Skills', routerLink: ['/skills']},
          ]
      },
      {
          label: 'Work Experience',
          items: [
              {label: 'Spatial Dimension', routerLink: ['/spatialdimension']},
              {label: 'Popcorn Training',  routerLink: ['/popcorntraining']}
          ]
      },
      {
        label: 'Personal Details',
        items: [
          {label: 'Overview', routerLink: ['/personaloverview']},
          {label: 'About Me'},
      ]
      },
  ];
  }

}
