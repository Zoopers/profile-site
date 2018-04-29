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
          label: 'Education',
          items: [
              {label: 'BSc Informatics', routerLink: ['/bscinformatics']},
              {label: 'MCDST', routerLink: ['/mcdst']}
          ]
      },
      {
          label: 'Work',
          items: [
              {label: 'Spatial Dimension', routerLink: ['/spatialdimension']},
              {label: 'Popcorn Training',  routerLink: ['/popcorntraining']}
          ]
      },
      {
        label: 'Personal Details',
        items: [
          {label: 'About Me'},
      ]
      },
  ];
  }

}
