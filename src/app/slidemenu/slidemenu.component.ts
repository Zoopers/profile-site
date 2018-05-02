import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-slidemenu',
  templateUrl: './slidemenu.component.html',
  styleUrls: ['./slidemenu.component.css']
})
export class SlidemenuComponent implements OnInit {

  constructor(private router: Router) { }

  config = {
    animation: "slider",
    closeOnCLick: true,
    offset: {
    top: 70
    }
    };

  ngOnInit() {
    
  }

  private menuItemsArray: any[] = [
    {"title":"Home","link":"home"},
    {"title":"Skills and Qualifications","link":"",
    "subItems":[
                {"title":"BSc Informatics","link":"bscinformatics"},
                {"title":"MCDST","link":"mcdst"},
                {"title":"Professional Skills","link":"skills"},
               ]
    },
    {"title":"Work Experience","link":"",
    "subItems":[
                {"title":"Spatial Dimension","link":"spatialdimension"},
                {"title":"Popcorn Training","link":"popcorntraining"},
               ]
    },
    {"title":"Hobbies and Interests","link":"",
    "subItems":[
                {"title":"Videogames","link":"videogames"},
                {"title":"Reading","link":"reading"},
                {"title":"Animals","link":"animals"},
               ]
    },
];

public onMenuClose(){
 console.log("menu closed");
}
public onMenuOpen(){
 console.log("menu Opened");
}
private onItemSelect(item:any){
  this.router.navigate([item.link]);
}

}

