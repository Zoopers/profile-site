import { Component, OnInit } from '@angular/core';
import { Media } from '../media';
import {CarouselModule} from 'primeng/carousel';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css']
})
export class VideogamesComponent implements OnInit {

  currentlyPlaying: Media[];

  constructor() { 
    this.currentlyPlaying = [
      {title: 'Mordheim', genre: 'Turn-based Strategy', rating: '8/10'},
  ];
  }

  ngOnInit() {
  }

}
