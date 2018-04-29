import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  images: any[];

  constructor() { }

  ngOnInit() {
    this.images = [];
        this.images.push({source:'assets/sp1.jpg', alt:'Cats1', title:'Title 1'});
        this.images.push({source:'assets/sp2.jpg', alt:'Cats2', title:'Title 2'});
        this.images.push({source:'assets/sp3.jpg', alt:'Cats3', title:'Title 3'});
        this.images.push({source:'assets/sp4.jpg', alt:'Cats4', title:'Title 4'});
        this.images.push({source:'assets/sp5.jpg', alt:'Cats5', title:'Title 5'});
  }

}
