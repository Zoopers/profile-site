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
              {label: 'BSc Informatics'},
              {label: 'MCDST'}
          ]
      },
      {
          label: 'Work',
          items: [
              {label: 'Spatial Dimension', },
              {label: 'Popcorn Training',}
          ]
      },
      {
        label: 'Personal Details',
        items: [
          {label: 'Life'},
      ]
      },
  ];
  }

}
